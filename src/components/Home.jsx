// import the required libraries
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import axios from "axios";

// import the functions
import processMd from "./functions/ProcessMd";

// start the home component
export default function Home(props) {
  // destructure the props
  const notes = props.notes;

  const [news, setNews] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=8f3a93f8c9a541b1acea21292c61eaeb&pageSize=100"
      )
      .then((res) => {
        setNews(res.data.articles.slice(0, 9));
      });
  }, []);
  const loader = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=science&apiKey=8f3a93f8c9a541b1acea21292c61eaeb&pageSize=100"
      )
      .then((res) => {
        setNews(res.data.articles[0].title);
      });
  };
  // eslint-disable-next-line
  const [all, setAll] = React.useState(news);
  if (
    all.includes("nsfw") ||
    all.includes("penis") ||
    all.includes("sperm") ||
    all.includes("semen") ||
    all.includes("vagina") ||
    all.includes("rape")
  ) {
    loader();
  }
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
      <div className="splash">
        <img
          src={process.env.PUBLIC_URL + "/images/water-logo.png"}
          alt="logo"
          className="splash-logo"
        />
      </div>
      <h2>
        Good {new Date().getHours() < 12 ? "Morning" : "Evening"},
        {" " + props.userName}.
      </h2>
      <hr />
      <h3>Take a look at your notes!</h3>
      <div className="notes-home-container">
        {notes.map((note) => {
          return (
            <nav className="notes-preview-home" key={note.id}>
              <div
                onClick={() =>
                  window.location.replace("/notes/view/" + note.id.toString())
                }
              >
                <div className="notes-preview-home-title">
                  <h2>{note.title}</h2>
                  <nav>
                    <button
                      className="notes-preview-home-button"
                      onClick={() => {
                        addToFavorites(note.id);
                      }}
                      title={
                        note.favourite === true
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={
                          note.favourite === true
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                        }
                      >
                        <g>
                          <path
                            d={
                              "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                            }
                            fill="#f70153"
                            style={{
                              filter: "none",
                            }}
                          ></path>
                        </g>
                      </svg>
                      <svg
                        viewBox={"0 0 24 24"}
                        style={
                          note.favourite === true
                            ? { display: "none", filter: "none" }
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
                <a
                  className="dead-link"
                  href={"/notes/view/" + note.id.toString()}
                >
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
            <div
              className="notes-preview-home-content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <svg
                viewBox={"0 0 24 24"}
                style={{ height: "70px", width: "70px" }}
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
      <h3>Whiteboard.</h3>
      <textarea
        className="whiteboard"
        style={{ width: "50%", height: "500px" }}
        placeholder="Write anyting here in a hurry, and copy it to your notes later."
      />
      <div className="rightbar">
        <hr />
        <div>
          <h3>Today's news.</h3>
          {news.map((article) => {
            return (
              <blockquote key={article.id}>
                <strong></strong>
                {article.title}
              </blockquote>
            );
          })}
        </div>
      </div>
    </div>
  );
}
