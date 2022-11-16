// import the required libraries
import React from "react";

// import the components
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";

// start the function
export default function Main() {
  // initialize notes array
  const notes = [
    { id: 1, title: "sometih", content: "my forst note", favourite: true },
  ];

  // use mysql here
  //
  //
  //

  // url
  const url = window.location.href;
  const path = url.split("/")[4];
  const subPath = url.split("/")[5];

  // debug the code
  console.log(notes, path, subPath);

  // return the jsx
  return (
    <div>
      <Sidebar />
      <Header notes={notes} path={path} subPath={subPath} />
      <MainBody notes={notes} path={path} subPath={subPath} />
    </div>
  );
}
