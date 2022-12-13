// import the required libraries
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";

// start the home component
export default function Favorites(props) {
  // destructure the props
  const notes = props.notes;

  // some functions
  const deleteNote = (id) => {
    //   axios.delete("http://localhost:3001/meet1706/notes/" + id);
    //   notes.splice(notes.findIndex((note) => note.noteid === id), 1);
  };

  // return the jsx
  return (
    <div className="homepage">
      <div className="splash">
        <img
          src={process.env.PUBLIC_URL + "/images/water-logo.png"}
          alt="logo"
          className="splash-logo"
        />
      </div>
      <h2>Your Favourites.</h2>
      <hr />
      <div className="notes-home-container">
        {notes
          .filter((note) => note.favourite === true)
          .map((note) => {
            return (
              <nav className="notes-preview-home" key={note.id}>
                <div>
                  <div className="notes-preview-home-title">
                    <h2>{note.title}</h2>
                    <nav>
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
      </div>
    </div>
  );
}
