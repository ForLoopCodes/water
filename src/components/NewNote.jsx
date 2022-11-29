// import the required libraries
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import processMd from "./functions/ProcessMd";

// just make a new note
export default function NewNote() {
  // some states
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  // some functions
  const submitNote = () => {
    // if (heading === "" && content === "") {
    //   return;
    // } else if (heading === "") {
    //   axios.post("http://localhost:3001/meet1706/notes/add", {
    //     heading: "Untitled note.",
    //     content: content,
    //     fav: "false",
    //   });
    // } else if (content === "") {
    //   axios.post("http://localhost:3001/meet1706/notes/add", {
    //     heading: heading,
    //     content: "This note feels empty!",
    //     fav: "false",
    //   });
    // } else {
    //   axios.post("http://localhost:3001/meet1706/notes/add", {
    //     heading: heading,
    //     content: content,
    //     fav: "false",
    //   });
    // }
    // setHeading("");
    // setContent("");
  };

  // return the jsx
  return (
    <div className="write">
      <h1>Add a note.</h1>
      <p>Add a new note directly into your inventory!</p>
      <div className="new-note-container">
        <div className="new-note-heading">
          <input
            type="text"
            value={heading}
            placeholder="Einstein's Theory of Relativity."
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="new-note-image">
          <input
            type="text"
            value={image}
            placeholder="Your image link here."
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="new-note-content">
          <textarea
            value={content}
            placeholder="Time is relative to the observer!"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={submitNote}>Commit!</button>
        <div className="rightbar">
          <h4>Live preview.</h4>
          <h1>{heading}</h1>
          <hr />
          {image !== "" ? <img src={image} alt="preview" /> : null}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={processMd(content)}
          />
        </div>
      </div>
    </div>
  );
}
