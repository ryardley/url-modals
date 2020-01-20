import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import styled from "@emotion/styled";

type Props = {
  onSearch: (e: any) => void;
};

const SearchInput = styled(InputBase)`
  background: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.2rem;
`;

export default function SearchBar({ onSearch }: Props) {
  const [revealSearch, setRevealSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const runSearch = React.useCallback(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);

  const handleSearchClicked = React.useCallback(() => {
    if (revealSearch) {
      runSearch();
    } else {
      setRevealSearch(true);
    }
  }, [revealSearch, runSearch]);

  const handleSearchTextChanged = React.useCallback(
    event => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  const handleSearchTextKeyDown = React.useCallback(
    event => {
      if (event.keyCode === 13) {
        handleSearchClicked();
      }
    },
    [handleSearchClicked]
  );

  const handleSearchTextBlur = React.useCallback(event => {
    if (event.target.value.length === 0) {
      setRevealSearch(false);
    }
  }, []);

  return (
    <div>
      {revealSearch && (
        <SearchInput
          color="primary"
          placeholder="Search Jobs"
          onChange={handleSearchTextChanged}
          onKeyDown={handleSearchTextKeyDown}
          onBlur={handleSearchTextBlur}
        />
      )}
      <IconButton
        onClick={handleSearchClicked}
        color="inherit"
        type="submit"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
