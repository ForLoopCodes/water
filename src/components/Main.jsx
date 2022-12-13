// import the required libraries
import React, { useState } from "react";

// import the components
import Sidebar from "./Sidebar.jsx";
import MainBody from "./MainBody.jsx";

// start the function
export default function Main() {
  // initialize notes array
  const user = {
    name: "ForLoop",
    notes: [
      {
        id: 1,
        title: "My first Note!",
        content:
          "# Hey! good to see you here! \n This is a note! \n and this is how **bold** and *Italic* looks. \n\n ## This is a heading. \n\n > This is a quote. \n\n",
        favourite: true,
        rightbar: "",
      },
      {
        id: 2,
        title: "Another Note!",
        content:
          " - This is a list. \n - This is a list. \n\n [This is a link](https://www.google.com) \n\n `This is a code block.` \n\n ![This is an image](https://images.hdqwalls.com/download/mountains-retreat-minimal-beautiful-4k-vl-1920x1080.jpg)",
        favourite: true,
        rightbar:
          "https://images.hdqwalls.com/download/mountains-retreat-minimal-beautiful-4k-vl-1920x1080.jpg",
      },
      {
        id: 3,
        title: "Youtube and spotify can be embedded too!",
        content:
          "yt?https://www.youtube.com/watch?v=QH2-TGUlwu4 \n\n sp?https://open.spotify.com/track/3Qm86XLflmIXVm1wcwkgDK?si=6e8e3b3b6f0a4b3f",
        favourite: true,
        rightbar: "https://wallpapercave.com/wp/wp4056410.jpg",
      },
      {
        id: 4,
        title: "This is a note with a long content",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies \n # one",
        favourite: true,
        rightbar: "",
      },
    ],
    theme: {
      "--main-theme-color": "#737373",
      "--main-theme-color-transparent": "#00000000",
      "--main-font-color": "#000000bb",
      "--main-font-color-transparent": "#00000044",
      "--main-bgcolor-fainted": "#00000005",
      "--main-bgcolor": "#ffffff",
      "--main-bgcolor-shade-3": "#00000009",
      "--main-bgcolor-fainted-light": "#ffffffaa",
      "--blur-color": "#ffffffaa",
      "--main-homepage-background-image": "url('')",
    },
  };
  const notes = user.notes;
  // also update with backend the css variables
  const [cssVariables, setCssVariables] = useState(user.theme);

  const setCssVariablesFunction = (cssVar) => {
    for (const [key, value] of Object.entries(cssVar)) {
      document.documentElement.style.setProperty(key, value);
    }
  };
  setCssVariablesFunction(cssVariables);
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
      <MainBody
        notes={notes}
        path={path}
        subPath={subPath}
        userName={user.name}
        setCssVariablesFunction={setCssVariablesFunction}
        setCssVariables={setCssVariables}
        cssVariables={cssVariables}
      />
    </div>
  );
}
