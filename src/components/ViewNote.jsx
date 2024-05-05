// import the required libraries
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import rehypeRaw from "rehype-raw";

// import the functions
import processMd from "./functions/ProcessMd";
import WriteTop from "./WriteTop";

// view shows the note
export default function ViewNote(props) {
  // destructure the props
  const notes = props.notes;
  const [news, setNews] = React.useState("");
  const [quote, setQuote] = React.useState("");
  const [joke, setJoke] = React.useState("");
  const [didYouKnow, setDidYouKnow] = React.useState("");
  useEffect(() => {
    axios.get("https://api.quotable.io/random?tags=wisdom").then((res) => {
      setQuote(res.data.content);
    });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setJoke(res.data.setup + " \n " + res.data.punchline);
      });
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=science&apiKey=8f3a93f8c9a541b1acea21292c61eaeb&pageSize=100"
      )
      .then((res) => {
        setNews(res.data.articles[0].title);
      });
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => {
        setDidYouKnow(res.data.text);
      });
  }, []);
  const loader = () => {
    axios.get("https://api.quotable.io/random?tags=wisdom").then((res) => {
      setQuote(res.data.content);
    });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setJoke(res.data.setup + " \n " + res.data.punchline);
      });
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=science&lang=en&apiKey=8f3a93f8c9a541b1acea21292c61eaeb&pageSize=100"
      )
      .then((res) => {
        setNews(res.data.articles[0].title);
      });
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => {
        setDidYouKnow(res.data.text);
      });
  };
  // eslint-disable-next-line
  const [all, setAll] = React.useState(news + quote + joke + didYouKnow);
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
  // return the jsx
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
              <div className="rightbar">
                {note.rightbar === "" ? (
                  <div>
                    <h3>Today's news.</h3>
                    <blockquote>
                      <strong></strong>
                      {news}
                    </blockquote>
                    <hr />
                    <h3>Random quote for you!</h3>
                    <blockquote>
                      <strong></strong>
                      {quote}
                    </blockquote>
                    <hr />
                    <h3>How about a joke?</h3>
                    <blockquote>
                      <strong></strong>
                      {joke}
                    </blockquote>
                    <hr />
                    <h3>Did you know?</h3>
                    <blockquote>
                      <strong></strong>
                      {didYouKnow}
                    </blockquote>
                    <hr />
                    <h4>
                      No image set. Set one by pasting the image link here.
                    </h4>
                    <input
                      type="text"
                      placeholder="Paste your image link here and hit enter"
                      defaultValue={note.rightbar !== "" ? note.rightbar : ""}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          props.setImgFromInput(e, note);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="rightbar-img"
                    style={{
                      backgroundImage: "url(" + note.rightbar + ")",
                    }}
                  ></div>
                )}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
