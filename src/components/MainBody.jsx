// import the required libraries
import React from "react";

// import the components
import Home from "./Home";
import Favorites from "./Favorites";
import Info from "./Info";
import Settings from "./Settings";
import NewNote from "./NewNote";
import ViewNote from "./ViewNote";
import EditNote from "./EditNote";

// mainbody is just a component that renders the required component
export default function MainBody(props) {
  // destructure the props
  const notes = props.notes;
  const path = props.path;
  const subPath = props.subPath;

  // return the jsx
  return (
    <div className="mainbody">
      {path === "app" ? (
        <Home notes={notes} />
      ) : path === "favorites" ? (
        <Favorites notes={notes} />
      ) : path === "info" ? (
        <Info path={path} />
      ) : path === "settings" ? (
        <Settings
          cssVariables={props.cssVariables}
          setCssVariables={props.setCssVariables}
          setCssVariablesFunction={props.setCssVariablesFunction}
        />
      ) : path === "new" ? (
        <NewNote />
      ) : path === "view" ? (
        <ViewNote notes={notes} subPath={subPath} path={path} />
      ) : path === "edit" ? (
        <EditNote notes={notes} subPath={subPath} />
      ) : (
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
