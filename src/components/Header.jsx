// import the required libraries
import React from "react";

// header tell you where you actually navigated in the app
export default function Header(props) {
  // destructure the props
  const notes = props.notes;
  const path = props.path;
  const subPath = props.subPath;

  // return the jsx
  return (
    <div>
      <div className="header">
        <div className="header-name">
          {path !== "view"
            ? path
            : notes.map((note) => {
                if (note.id === parseInt(subPath)) {
                  return note.title;
                }
                return null;
              })}
        </div>
      </div>
    </div>
  );
}
