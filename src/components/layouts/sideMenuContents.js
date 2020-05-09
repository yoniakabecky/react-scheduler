import React from "react";
import * as path from "../../constants/pathNames";

import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BusinessIcon from "@material-ui/icons/Business";

export const userMenu = {
  name: "Your Schedule",
  icon: <EventAvailableIcon />,
  path: path.MY_SCHEDUEL,
};
export const scheduleViewList = [
  {
    name: "Monthly",
    icon: <EventNoteIcon />,
    path: path.MONTHLY_VIEW,
  },
  {
    name: "Weekly",
    icon: <DateRangeIcon />,
    path: path.WEEKLY_VIEW,
  },
  {
    name: "Daily",
    icon: <TodayIcon />,
    path: path.DAILY_VIEW,
  },
];

export const companyMenu = [
  {
    name: "Companies",
    icon: <BusinessIcon />,
    path: path.MY_SCHEDUEL,
  },
];
