import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Layout from "../components/Layout";

// import faker from "faker";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useGlobalState } from "../store";
import { useBus } from "ts-bus/react";
import { fetchJobs } from "../store/events";
// const data = Array.from(Array(20)).map(() => {
//   return {
//     Icon: ImageIcon,
//     jobDescriptor: faker.name.jobDescriptor(),
//     companyName: faker.company.companyName()
//   };
// });

export default function Jobs() {
  const bus = useBus();

  const handleSearch = React.useCallback(
    searchText => {
      console.log({ searchText, bus });
      const ev = fetchJobs({ searchText });
      bus.publish(ev);
    },
    [bus]
  );

  const state = useGlobalState();

  return (
    <Layout
      footer={<Layout.Footer />}
      header={<SearchBar onSearch={handleSearch} />}
      showSpinner={state.loading}
    >
      <List>
        {state.jobs.map(({ company, title, id }, i) => {
          return (
            <ListItem button component={Link} to="/jobs" key={id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={company} secondary={title} />
            </ListItem>
          );
        })}
      </List>
    </Layout>
  );
}
