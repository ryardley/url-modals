import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Footer() {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        component={Link}
        to="/jobs"
        label="Jobs"
        icon={<WorkIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
