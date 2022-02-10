import React from "react";

import MainTemplate from "../../components/Modules/Templates/MainTemplate";
import InputForm from "../../components/Modules/InputForm";

import "./style.css";

function TalentSignup() {
  return (
    <MainTemplate>
      <div className="talent-page">
        <h1>Create Your Talent Account</h1>
        <InputForm url="http://wren.in:3200/api/sign-up/talent"/>
      </div>
    </MainTemplate>
  );
}

export default TalentSignup;
