import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import FanSignup from '../pages/FanSignup';
import TalentSignup from '../pages/TalentSignup';

function RoutesComp() {
  return (
    <Routes>
      <Route exact path="/fan-signup" element={<FanSignup />} />
      <Route exact path="/talent-signup" element={<TalentSignup />} />
      <Route path="*" element={<Navigate to="/fan-signup" />} />
    </Routes>
  );
}

export default RoutesComp;
