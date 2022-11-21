// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";
import WriteTop from "./WriteTop";

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
            <div key={note.id}>
              <WriteTop path={props.path} note={note} />
              <h1>{note.title}</h1>
              <hr />
              <ReactMarkdown
                key={note.id}
                rehypePlugins={[rehypeRaw]}
                children={processMd(note.content)}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
