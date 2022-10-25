import React, { useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Home() {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/meet1706/home").then((res) => {
      const notes = Object.keys(res.data).map((key) => {
        return res.data[key];
      });
      setNotes(notes);
    });
  }, []);
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
    if (notes[id - 1].fav === "false") {
      axios.put("http://localhost:3001/meet1706/notes/" + id, {
        heading: notes[id - 1].heading,
        content: notes[id - 1].content,
        fav: "true",
      });
    } else {
      axios.put("http://localhost:3001/meet1706/notes/" + id, {
        heading: notes[id - 1].heading,
        content: notes[id - 1].content,
        fav: "false",
      });
    }
  };
  return (
    <div className="homepage">
      <h1>Your Notes.</h1>
      <div className="notes-home-container">
        {notes.map((note) => {
          return (
            <nav className="notes-preview-home" key={notes.indexOf(note)}>
              <div>
                <div className="notes-preview-home-title">
                  <h2>{note.heading}</h2>
                  <button
                    className="notes-preview-home-button"
                    onClick={() => addToFavorites(notes.indexOf(note) + 1)}
                  >
                    <svg viewBox={"0 0 24 24"}>
                      <path
                        d={
                          "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                        }
                      />
                    </svg>
                  </button>
                </div>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  children={processMd(note.content)}
                />
              </div>
            </nav>
          );
        })}
        <nav
          className="notes-preview-home"
          onClick={() => {
            window.location.href = "/water/new";
          }}
        >
          <div>
            <div className="notes-preview-home-title">
              <h2>Add note</h2>
            </div>
            <div className="notes-preview-home-content">
              <p>Click here to add a new note.</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
