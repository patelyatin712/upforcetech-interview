import React from "react";

import MainTemplate from "../../components/Modules/Templates/MainTemplate";
import InputForm from "../../components/Modules/InputForm";

import "./style.css";

function FanSignup() {
  return (
    <MainTemplate>
      <div className="fan-page">
        <h1>Create Your Fan Account</h1>
        <InputForm url="http://wren.in:3200/api/sign-up/fan"/>
      </div>
    </MainTemplate>
  );
}

export default FanSignup;
