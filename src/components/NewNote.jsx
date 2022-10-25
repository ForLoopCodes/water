import React, { useState } from "react";
import axios from "axios";

export default function NewNote() {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const submitNote = () => {
    if (heading === "" || content === "") {
      return;
    }
    axios.post("http://localhost:3001/meet1706/notes/add", {
      heading: heading,
      content: content,
      fav: false,
    });
    setHeading("");
    setContent("");
  };
  return (
    <div className="write">
      <h1>Add a note.</h1>
      <p>
        Add a new note directly into your inventory!
        <strong>{" Make sure that you don't add an empty one!"}</strong>
      </p>
      <div className="new-note-container">
        <div className="new-note-heading">
          <input
            type="text"
            value={heading}
            placeholder="Einstein's Theory of Relativity."
            onChange={(e) => setHeading(e.target.value)}
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
      </div>
    </div>
  );
}
