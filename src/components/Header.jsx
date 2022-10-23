import React from "react";

export default function Header(props) {
  const activeTab = props.activeTab;
  return (
    <div>
      <div className="header">
        <div className="header-name">{activeTab}</div>
      </div>
    </div>
  );
}
