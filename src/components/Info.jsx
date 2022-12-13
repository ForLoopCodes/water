// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import WriteTop from "./WriteTop";
import processMd from "./functions/ProcessMd";

// info is just a md file
export default function Info(props) {
  const info =
    '\n# About Water!\n --- \n\n\n#### So that you can flow like 🌊 water! \n\n\nWater is a **simple** and minimal react-based web app currently 🔨 **under cunstruction** that allows you to take **beautiful 📝 notes** directly from your browser! It is massively based on react.js, node.js, express.js, and markdown.\n\n\nLearn how to use **markdown** [here](https://www.markdownguide.org/cheat-sheet/).\n\n\n> This application was made successful by **react-markdown** library: [https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)\n\n\n> and **GitHub pages**: [https://pages.github.com/](https://pages.github.com/)\n\n\n## Some features:\n- **Minimalistic** design, **Markdown** support, Easy to use.\n- Open source.\n- Use `yt?` to embed youtube videos.\n- Use `sp?` to embed spotify songs.\n\n\n## Future features:\n- Themes.\n- Code Highlighting.\n- Todo lists.\n- Youtube/spotify player in sidebar. \n- Share button in "view" page on top of heading which will share the window url. \n- Edit button with the share button. \n- Show as markdown button in more options button with the share button. \n\n\n## Feedback.\n👋 Hey! Your feedback is very **important** to us. If you have any suggestions or ideas, please feel free to contact us.\nPlease reach out to us at **[@ForLoop](mailto:meetnp1706@gmail.com).**\n> Support us by giving a **star** on our **[GitHub](https://www.github.com/ForLoopCodes/water)** repository.\n\n\n---\n\n\nMade with ❤️ by **[ForLoop](https://www.github.com/ForLoopCodes).**';

  return (
    <div>
      <div className="splash">
        <img
          src={process.env.PUBLIC_URL + "/images/water-logo.png"}
          alt="logo"
          className="splash-logo"
        />
      </div>
      <div className="write">
        <WriteTop info={info} path={props.path} />
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={processMd(info)} />
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
