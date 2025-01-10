import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  TAB_PENDING_PROPOSAL,
  TAB_PENDING_REGISTER,
  TAB_PENDING_SARALY,
  TAB_PENDING_PROMOTED,
} from "app/const/EmployeeConst";
import { TabPanel, a11yProps } from "app/component/CustomTab";
import { Breadcrumb } from "egret";
import WaitingPromoteTab from "./Tabs/WaitingPromoteTab";
import WaitingProposalTab from "./Tabs/WaitingProposalTab";
import WaitingRegisterTab from "./Tabs/WaitingRegisterTab";
import WaitingSalaryTab from "./Tabs/WaitingSalaryTab";

const LeaderWaiting = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="m-20">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Lãnh đạo chờ duyệt" }]} />
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label={"Chờ duyệt đăng ký"}
            {...a11yProps(TAB_PENDING_REGISTER)}
          />
          <Tab
            label={"Chờ duyệt thăng chức"}
            {...a11yProps(TAB_PENDING_PROMOTED)}
          />
          <Tab label={"Chờ duyệt lương"} {...a11yProps(TAB_PENDING_SARALY)} />
          <Tab
            label={"Chờ duyệt đề xuất"}
            {...a11yProps(TAB_PENDING_PROPOSAL)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={tab} index={TAB_PENDING_REGISTER} dir={theme.direction}>
        <WaitingRegisterTab />
      </TabPanel>
      <TabPanel value={tab} index={TAB_PENDING_PROMOTED} dir={theme.direction}>
        <WaitingPromoteTab />
      </TabPanel>
      <TabPanel value={tab} index={TAB_PENDING_SARALY} dir={theme.direction}>
        <WaitingSalaryTab />
      </TabPanel>
      <TabPanel value={tab} index={TAB_PENDING_PROPOSAL} dir={theme.direction}>
        <WaitingProposalTab />
      </TabPanel>
    </div>
  );
};

export default LeaderWaiting;
