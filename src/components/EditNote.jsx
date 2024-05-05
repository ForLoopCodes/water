import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import processMd from "./functions/ProcessMd";

export default function EditNote(props) {
  // destructure the props
  const notes = props.notes;
  const subPath = props.subPath;
  const setTheTitleFromInput = (e) => {};
  const setTheImgFromInput = (e) => {};
  const setTheContentFromInput = (e) => {};

  return (
    <div className="write">
      <div className="splash">
        <img
          src={
            "https://github.com/ForLoopCodes/water/blob/master/public/images/Water-logo.png?raw=true"
          }
          alt="logo"
          className="splash-logo"
        />
      </div>
      {notes.map((note) => {
        if (note.id === parseInt(subPath)) {
          return (
            <div key={note.id}>
              <h1>Edit note #{note.id}.</h1>
              <input
                type="text"
                placeholder="Title"
                defaultValue={note.title}
                onChange={(e) => {
                  setTheTitleFromInput(e, note);
                }}
              />
              <input
                type="text"
                placeholder="Your image link here"
                defaultValue={note.rightbar !== "" ? note.rightbar : ""}
                onChange={(e) => {
                  setTheImgFromInput(e, note);
                }}
              />
              <textarea
                placeholder="Content"
                defaultValue={note.content}
                onChange={(e) => {
                  setTheContentFromInput(e, note);
                }}
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.key === "b") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "**" +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      "**" +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                  if (e.ctrlKey && e.key === "i") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "*" +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      "*" +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                  if (e.ctrlKey && e.key === "1") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "# " +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                  if (e.ctrlKey && e.key === "2") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "## " +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                  if (e.ctrlKey && e.key === "3") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "### " +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                  if (e.ctrlKey && e.key === "4") {
                    e.target.value =
                      e.target.value.slice(0, e.target.selectionStart) +
                      "#### " +
                      e.target.value.slice(
                        e.target.selectionStart,
                        e.target.selectionEnd
                      ) +
                      e.target.value.slice(e.target.selectionEnd);
                  }
                }}
              />
              <p>
                Don't worry about saving! We'll automatically save this for you
                as you type.
              </p>
              <div className="rightbar">
                <h4>Live preview.</h4>
                <h1>{note.title}</h1>
                <hr />
                {note.rightbar !== "" ? (
                  <img src={note.rightbar} alt="preview" />
                ) : null}
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  children={processMd(note.content)}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
