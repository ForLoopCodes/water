import React from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import Info from "./Info";
import Settings from "./Settings";
import NewNote from "./NewNote";

export default function MainBody(props) {
  const activeTab = props.activeTab;
  return (
    <div className="mainbody">
      {activeTab === "app" && <Home />}
      {activeTab === "favorites" && <Favorites />}
      {activeTab === "info" && <Info />}
      {activeTab === "settings" && <Settings />}
      {activeTab === "new" && <NewNote />}
      {!["app", "favorites", "info", "settings", "new"].includes(activeTab) && (
        <div className="write">
          <h1>404</h1>
          <h2>Page not found.</h2>
          <p>
            go back to <a href="/water/app">home</a>
          </p>
        </div>
      )}
    </div>
  );
}
