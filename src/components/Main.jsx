import React from "react";
import App from "./App.jsx";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";

export default function Main() {
  return (
    <div>
      <Sidebar />
      <MainBody />
      <Header />
      <App />
    </div>
  );
}
