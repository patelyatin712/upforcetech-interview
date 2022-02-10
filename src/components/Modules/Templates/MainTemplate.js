import React from 'react';
import HeaderTabs from '../../Shared/HeaderTabs';

import './style.css';

function MainTemplate({ children }) {
  return (
    <div className="main-template">
      <div className="content">
        <HeaderTabs/>
        {children}
      </div>
    </div>
  );
}

export default MainTemplate;
