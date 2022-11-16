// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";

// start the home component
export default function Home(props) {
  // destructure the props
  const notes = props.notes;

  // some functions
  const addToFavorites = (id) => {
    //   if (notes[notes.findIndex((note) => note.noteid === id)].fav === "false") {
    //     notes[notes.findIndex((note) => note.noteid === id)].fav = "true";
    //     axios.put("http://localhost:3001/meet1706/notes/" + id, {
    //       heading: notes[notes.findIndex((note) => note.noteid === id)].heading,
    //       content: notes[notes.findIndex((note) => note.noteid === id)].content,
    //       fav: "true",
    //     });
    //   } else {
    //     notes[notes.findIndex((note) => note.noteid === id)].fav = "false";
    //     axios.put("http://localhost:3001/meet1706/notes/" + id, {
    //       heading: notes[notes.findIndex((note) => note.noteid === id)].heading,
    //       content: notes[notes.findIndex((note) => note.noteid === id)].content,
    //       fav: "false",
    //     });
    //   }
  };
  const deleteNote = (id) => {
    //   axios.delete("http://localhost:3001/meet1706/notes/" + id);
    //   notes.splice(notes.findIndex((note) => note.noteid === id), 1);
  };

  // return the jsx
  return (
    <div className="homepage">
      <h1>Your Notes.</h1>
      <div className="notes-home-container">
        {notes.map((note) => {
          return (
            <nav className="notes-preview-home" key={note.id}>
              <div>
                <div className="notes-preview-home-title">
                  <h2>{note.title}</h2>
                  <nav>
                    <button
                      className="notes-preview-home-button"
                      onClick={() => addToFavorites(note.id)}
                      title={
                        note.favourite === "true"
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={
                          note.favourite === "true"
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <g>
                          <path
                            d={
                              "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                            }
                            fill="#f70153"
                          ></path>
                        </g>
                      </svg>
                      <svg
                        viewBox={"0 0 24 24"}
                        style={
                          note.favourite === "true"
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <path
                          d={
                            "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                          }
                        />
                      </svg>
                    </button>
                    <button
                      className="notes-preview-home-button"
                      onClick={() => {
                        deleteNote(note.id);
                      }}
                      title="Delete note"
                    >
                      <svg viewBox={"0 0 24 24"}>
                        <path
                          d={
                            "M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"
                          }
                        />
                        <path
                          d={
                            "M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"
                          }
                        />
                        <path
                          d={
                            "M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                          }
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
                <a className="dead-link" href={"/water/view/" + note.id}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    children={processMd(note.content)}
                  />
                </a>
              </div>
            </nav>
          );
        })}
        <a className="notes-preview-home dead-link" href="/water/new">
          <div>
            <div className="notes-preview-home-title">
              <h2
                style={{
                  maxWidth: "210px",
                  width: "210px",
                  textAlign: "center",
                }}
              >
                👋 Hey! Make a new one!
              </h2>
            </div>
            <div
              className="notes-preview-home-content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                viewBox={"0 0 24 24"}
                style={{ height: "70%", fill: "#ddd" }}
              >
                <path
                  d={
                    "m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"
                  }
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
