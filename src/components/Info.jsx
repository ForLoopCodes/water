// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";

// info is just a md file
export default function Info() {
  return (
    <div>
      <div className="write">
        <div className="write-top-buttons">
          <button
            className="write-top-button"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Copied to clipboard!");
            }}
          >
            <svg viewBox="0 0 24 24">
              <g data-name="01 align center">
                <path d="M19.333,14.667a4.66,4.66,0,0,0-3.839,2.024L8.985,13.752a4.574,4.574,0,0,0,.005-3.488l6.5-2.954a4.66,4.66,0,1,0-.827-2.643,4.633,4.633,0,0,0,.08.786L7.833,8.593a4.668,4.668,0,1,0-.015,6.827l6.928,3.128a4.736,4.736,0,0,0-.079.785,4.667,4.667,0,1,0,4.666-4.666ZM19.333,2a2.667,2.667,0,1,1-2.666,2.667A2.669,2.669,0,0,1,19.333,2ZM4.667,14.667A2.667,2.667,0,1,1,7.333,12,2.67,2.67,0,0,1,4.667,14.667ZM19.333,22A2.667,2.667,0,1,1,22,19.333,2.669,2.669,0,0,1,19.333,22Z" />
              </g>
            </svg>
            Share
          </button>
          <button className="write-top-button-more">
            <svg viewBox="0 0 512 512">
              <g>
                <circle cx="256" cy="53.333" r="53.333" />
                <circle cx="256" cy="256" r="53.333" />
                <circle cx="256" cy="458.667" r="53.333" />
              </g>
            </svg>
          </button>
        </div>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={processMd(
            '\n# About Water! \n\n\n#### So that you can flow like 🌊 water! \n\n\nWater is a **simple** and minimal react-based web app currently 🔨 **under cunstruction** that allows you to take **beautiful 📝 notes** directly from your browser! It is massively based on react.js, node.js, express.js, and markdown.\n\n\nLearn how to use **markdown** [here](https://www.markdownguide.org/cheat-sheet/).\n\n\n> This application was made successful by **react-markdown** library: [https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)\n\n\n> and **GitHub pages**: [https://pages.github.com/](https://pages.github.com/)\n\n\n## Some features:\n- **Minimalistic** design, **Markdown** support, Easy to use.\n- Open source.\n- Use `yt?` to embed youtube videos.\n- Use `sp?` to embed spotify songs.\n\n\n## Future features:\n- Themes.\n- Code Highlighting.\n- Todo lists.\n- Youtube/spotify player in sidebar. \n- Share button in "view" page on top of heading which will share the window url. \n- Edit button with the share button. \n- Show as markdown button in more options button with the share button. \n\n\n## Feedback.\n👋 Hey! Your feedback is very **important** to us. If you have any suggestions or ideas, please feel free to contact us.\nPlease reach out to us at **[@ForLoop](mailto:meetnp1706@gmail.com).**\n> Support us by giving a **star** on our **[GitHub](https://www.github.com/ForLoopCodes/water)** repository.\n\n\n---\n\n\nMade with ❤️ by **[ForLoop](https://www.github.com/ForLoopCodes).**'
          )}
        />
      </div>
      <div className="rightbar">
        <div
          className="rightbar-img"
          style={{
            backgroundImage:
              "url(https://images.hdqwalls.com/download/mountains-retreat-minimal-beautiful-4k-vl-1920x1080.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}
