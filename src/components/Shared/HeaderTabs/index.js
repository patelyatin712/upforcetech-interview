import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TabsUnstyled from "@mui/base/TabsUnstyled";

import { Tab, TabsList } from "./styles";

function HeaderTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TabsUnstyled
      value={location?.pathname}
      onChange={(e, value) => navigate(value)}
    >
      <TabsList>
        <Tab value="/fan-signup">Fan Signup</Tab>
        <Tab value="/talent-signup">Talent Signup</Tab>
      </TabsList>
    </TabsUnstyled>
  );
}

export default HeaderTabs;
