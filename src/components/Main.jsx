import React from "react";
import App from "./App.jsx";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";
const url = window.location.href;

export default function Main() {
  const [activeTab, setActiveTab] = React.useState(
    url.split("/")[url.split("/").length - 1]
  );
  return (
    <div>
      <Sidebar setActiveTab={setActiveTab} />
      <MainBody activeTab={activeTab} />
      <Header activeTab={activeTab} />
      <App />
    </div>
  );
}
