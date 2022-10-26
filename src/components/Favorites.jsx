import React, { useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Favourites() {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/meet1706/home").then((res) => {
      const notes = Object.keys(res.data).map((key) => {
        const noteid = key;
        return { noteid, ...res.data[key] };
      });
      setNotes(notes.filter((note) => note.fav === "true"));
    });
  }, [notes]);
  const processMd = (text) => {
    text = text.replace(
      /yt\?https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g,
      (match, p1) => {
        // youtube iframe with no title and controls
        return `<iframe src="https://www.youtube.com/embed/${p1}?controls=0&modestbranding=1&showinfo=0&fs=0" title="Some youtube video!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
  const addToFavorites = (id) => {
    if (notes[notes.findIndex((note) => note.noteid === id)].fav === "false") {
      notes[notes.findIndex((note) => note.noteid === id)].fav = "true";
      axios.put("http://localhost:3001/meet1706/notes/" + id, {
        heading: notes[notes.findIndex((note) => note.noteid === id)].heading,
        content: notes[notes.findIndex((note) => note.noteid === id)].content,
        fav: "true",
      });
    } else {
      notes[notes.findIndex((note) => note.noteid === id)].fav = "false";
      axios.put("http://localhost:3001/meet1706/notes/" + id, {
        heading: notes[notes.findIndex((note) => note.noteid === id)].heading,
        content: notes[notes.findIndex((note) => note.noteid === id)].content,
        fav: "false",
      });
    }
  };
  return (
    <div className="homepage">
      <h1>Your Favourites.</h1>
      <div className="notes-home-container">
        {notes.map((note) => {
          return (
            <nav className="notes-preview-home" key={note.noteid}>
              <div>
                <div className="notes-preview-home-title">
                  <h2>{note.heading}</h2>
                  <nav>
                    <button
                      className="notes-preview-home-button"
                      onClick={() => addToFavorites(note.noteid)}
                      title={
                        note.fav === "true"
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={
                          note.fav === "true"
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
                          note.fav === "true"
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
                        axios.delete(
                          "http://localhost:3001/meet1706/notes/" + note.noteid
                        );
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
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  children={processMd(note.content)}
                />
              </div>
            </nav>
          );
        })}
      </div>
    </div>
  );
}
