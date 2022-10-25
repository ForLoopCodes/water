import React, { useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Favorites() {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/meet1706/home").then((res) => {
      const notes = Object.keys(res.data).map((key) => {
        return res.data[key];
      });
      setNotes(notes.filter((note) => note.fav === "true"));
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
  console.log(notes);
  return (
    <div className="homepage">
      <h1>Your Favourites.</h1>
      <div className="notes-home-container">
        {notes.map((note) => {
          return (
            <nav className="notes-preview-home" key={notes.indexOf(note)}>
              <div>
                <div className="notes-preview-home-title">
                  <h2>{note.heading}</h2>
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
