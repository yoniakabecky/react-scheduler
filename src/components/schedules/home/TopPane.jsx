import React from "react";

import PaneWrapper from "./PaneWrapper";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const TopPane = ({ schedule }) => {
  const { mySchedules, loading } = schedule;

  return (
    <PaneWrapper title="Upcoming">
      {!loading ? (
        mySchedules.map((schedule) => (
          <Chip
            avatar={<Avatar>{schedule.companyName}</Avatar>}
            label={schedule.position}
            onClick={() => console.log("ha-ha")}
          />
        ))
      ) : (
        <p>loading...</p>
      )}
    </PaneWrapper>
  );
};

export default TopPane;
