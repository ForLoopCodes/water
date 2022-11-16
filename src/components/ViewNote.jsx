// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";

// view shows the note
export default function ViewNote(props) {
  // destructure the props
  const notes = props.notes;

  // return the jsx
  return (
    <div className="write">
      {notes.map((note) => {
        if (note.id === parseInt(props.subPath)) {
          return (
            <ReactMarkdown
              key={note.id}
              rehypePlugins={[rehypeRaw]}
              children={processMd(note.content)}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
