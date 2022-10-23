import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Info() {
  const mdtext = `
# About Water! 

#### So that you can flow like 🌊 water! 

Water is a **simple** and minimal react-based web app currently 🔨 **under cunstruction** that allows you to take **beautiful 📝 notes** directly from your browser! 
It is massively based on react.js, node.js, express.js, and markdown.

Learn how to use **markdown** [here](https://www.markdownguide.org/cheat-sheet/).

> This application was made successful by **react-markdown** library: [https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)

> and **GitHub pages**: [https://pages.github.com/](https://pages.github.com/)

## Some features:
- **Minimalistic** design.
- **Markdown** support.
- Easy to use.
- Open source.
- Use \`yt?\` to embed youtube videos.
- Use \`sp?\` to embed spotify songs.

## Future features:
- Themes.
- Code Highlighting.
- Todo lists.

## Feedback.
👋 Hey! Your feedback is very **important** to us. If you have any suggestions or ideas, please feel free to contact us.
Please reach out to us at **[@ForLoop](mailto:meetnp1706@gmail.com).**
> Support us by giving a **star** on our **[GitHub](https://www.github.com/ForLoopGH/water)** repository.

---

Made with ❤️ by **[ForLoop](https://www.github.com/ForLoopGH).**
`;
  const processMd = (text) => {
    // change youtube links to embeds
    text = text.replace(
      /yt\?https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
      (match, p1) => {
        return `<iframe src="https://www.youtube.com/embed/${p1}" title="Minecraft Live 2022: A Warden’s Song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    );
    // change spotify links to embeds
    text = text.replace(
      /sp\?https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9_-]+)/g,
      (match, p1) => {
        return `<iframe class="spotify-iframe" src="https://open.spotify.com/embed/track/${p1}" title="Minecraft Live 2022: A Warden’s Song" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
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
