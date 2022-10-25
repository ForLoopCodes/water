import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Info() {
  const mdtext =
    "\n# About Water! \n\n\n#### So that you can flow like 🌊 water! \n\n\nWater is a **simple** and minimal react-based web app currently 🔨 **under cunstruction** that allows you to take **beautiful 📝 notes** directly from your browser! It is massively based on react.js, node.js, express.js, and markdown.\n\n\nLearn how to use **markdown** [here](https://www.markdownguide.org/cheat-sheet/).\n\n\n> This application was made successful by **react-markdown** library: [https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)\n\n\n> and **GitHub pages**: [https://pages.github.com/](https://pages.github.com/)\n\n\n## Some features:\n- **Minimalistic** design.\n- **Markdown** support.\n- Easy to use.\n- Open source.\n- Use `yt?` to embed youtube videos.\n- Use `sp?` to embed spotify songs.\n\n\n## Future features:\n- Themes.\n- Code Highlighting.\n- Todo lists.\n\n\n## Feedback.\n👋 Hey! Your feedback is very **important** to us. If you have any suggestions or ideas, please feel free to contact us.\nPlease reach out to us at **[@ForLoop](mailto:meetnp1706@gmail.com).**\n> Support us by giving a **star** on our **[GitHub](https://www.github.com/ForLoopGH/water)** repository.\n\n\n---\n\n\nMade with ❤️ by **[ForLoop](https://www.github.com/ForLoopGH).**";

  const processMd = (text) => {
    text = text.replace(
      /yt\?https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
      (match, p1) => {
        // youtube iframe with no title and controls
        return `<iframe src="https://www.youtube.com/embed/${p1}" title="Some youtube video!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    );
    text = text.replace(
      /sp\?https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9_-]+)\?si=([a-zA-Z0-9_-]+)/g,
      (match, p1) => {
        return `<iframe class="spotify-iframe" src="https://open.spotify.com/embed/track/${p1}" title="Some spotify song!" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      }
    );
    return text;
  };
  return (
    <div className="write">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={processMd(mdtext)} />
    </div>
  );
}
