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
    "# Water\n #### 🌊 So that you can flow like water!\n #\n ---\n \n `- ` **👋 Heya!**\n \n > **We're excited to have you as an early tester in the Water Beta.**\n > **Welcome to the official server for support and access to water's beta version!**\n \n ---\n \n `- ` 🤷 **What is water?**\n \n > Water is a note-making application created with react.js and based on markdown, minimal, easy to use, simple, fast, eye-catching UI, which is fully customizable. The next generation of notes, and everything you expect from a notes-taking app!\n \n > Star the repository on GitHub: \n > [ForLoopCodes/Water](https://github.com/ForLoopCodes/Water)\n \n ---\n \n `- ` 🧑‍💻 **Support the developer.**\n \n > `1.  ` Subscribe on YouTube: [@ForLoopCodes](https://www.youtube.com/@ForLoopCodes)\n \n > `2.  ` Join Discord Server: [Water | Beta access](https://discord.gg/kdK54zAebz)\n \n > `3.  ` Join community server: [ForLoop Species](https://dsc.gg/ForLoop)\n \n > `4.  ` Follow on GitHub: [ForLoopCodes](https://www.github.com/ForLoopCodes)\n \n > `5.  ` Buy me neon socks: [ForLoopCoffee](https://buymeacoffee.com/ForLoopCoffee)\n \n ---\n \n `- ` 📖 **Documentation.**\n \n > Available in official discord server: [Water | Beta access](https://discord.gg/kdK54zAebz)\n \n ---\n \n `- ` 💖 **Have fun!**\n \n > **This app was made with ❤️ by ForLoop.**\n \n ### Used Libraries:\n - React.js\n - ReactMarkDown\n - RehypeRAW\n \n ---";
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
