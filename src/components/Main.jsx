// import the required libraries
import React from "react";

// import the components
import Sidebar from "./Sidebar.jsx";
import MainBody from "./MainBody.jsx";

// start the function
export default function Main() {
  // initialize notes array
  const notes = [
    {
      id: 1,
      title: "My first Note!",
      content:
        "# Hey! good to see you here! \n This is a note! \n and this is how **bold** and *Italic* looks. \n\n ## This is a heading. \n\n > This is a quote. \n\n",
      favourite: true,
    },
    {
      id: 2,
      title: "Another Note!",
      content:
        " - This is a list. \n - This is a list. \n\n [This is a link](https://www.google.com) \n\n `This is a code block.` \n\n ![This is an image](https://images.hdqwalls.com/download/mountains-retreat-minimal-beautiful-4k-vl-1920x1080.jpg)",
      favourite: false,
    },
    {
      id: 3,
      title: "Youtube and spotify can be embedded too!",
      content:
        "yt?https://www.youtube.com/watch?v=QH2-TGUlwu4 \n\n sp?https://open.spotify.com/track/3Qm86XLflmIXVm1wcwkgDK?si=6e8e3b3b6f0a4b3f",
      favourite: false,
    },
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
      <Sidebar path={path} />
      <MainBody notes={notes} path={path} subPath={subPath} />
    </div>
  );
}
