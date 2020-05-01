import React from "react";
import * as path from "../../constants/pathNames";

// icons
import DateRangeIcon from "@material-ui/icons/DateRange";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import BusinessIcon from "@material-ui/icons/Business";
import SupervisorIcon from "@material-ui/icons/SupervisorAccount";
import SecurityIcon from "@material-ui/icons/Security";

export default [
  {
    title: "My Schedules",
    path: path.MY_SCHEDUEL,
    icon: <DateRangeIcon />,
    disabled: false,
  },
  {
    title: "Request Form",
    path: path.MY_SCHEDUEL,
    icon: <CreateIcon />,
    disabled: true,
  },
  {
    title: "Secret",
    path: path.MY_SCHEDUEL,
    icon: <SecurityIcon />,
    disabled: true,
  },

  {
    title: "Companies",
    path: path.MY_SCHEDUEL,
    icon: <BusinessIcon />,
    disabled: false,
  },
  {
    title: "Admin",
    path: path.MY_SCHEDUEL,
    icon: <SupervisorIcon />,
    disabled: true,
  },
  {
    title: "Settings",
    path: path.MY_SCHEDUEL,
    icon: <SettingsIcon />,
    disabled: false,
  },
];
