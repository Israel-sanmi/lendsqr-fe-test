import React from "react";
import "./NavTabs.scss";

const NavTabs = ({tabDesc, tabIcon}:any) => {
  return (
    <div>
      <div className="tab">
        <div className="tab-icon">
          {tabIcon}
        </div>
        <p className="tab-desc">{tabDesc}</p>
      </div>
    </div>
  );
};

export default NavTabs;
