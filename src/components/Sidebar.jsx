// import the required libraries
import React, { useState, useEffect } from "react";

// sidebar is just a dumb component which has buttons to other pages
export default function Sidebar(props) {
  // deconstruct the props
  const path = props.path;

  // youtube link
  const [ytVideoId, setYtVideoId] = useState("");

  // for the clock
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // return the jsx
  return (
    <div>
      <div>
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-clock">
              <div>
                {time.getDay() === 0
                  ? "Sun"
                  : time.getDay() === 1
                  ? "Mon"
                  : time.getDay() === 2
                  ? "Tue"
                  : time.getDay() === 3
                  ? "Wed"
                  : time.getDay() === 4
                  ? "Thu"
                  : time.getDay() === 5
                  ? "Fri"
                  : "Sat"}

                {", " + time.getDate().toString() + " "}

                {time.getMonth() === 0
                  ? "Jan"
                  : time.getMonth() === 1
                  ? "Feb"
                  : time.getMonth() === 2
                  ? "Mar"
                  : time.getMonth() === 3
                  ? "Apr"
                  : time.getMonth() === 4
                  ? "May"
                  : time.getMonth() === 5
                  ? "Jun"
                  : time.getMonth() === 6
                  ? "Jul"
                  : time.getMonth() === 7
                  ? "Aug"
                  : time.getMonth() === 8
                  ? "Sep"
                  : time.getMonth() === 9
                  ? "Oct"
                  : time.getMonth() === 10
                  ? "Nov"
                  : "Dec"}
              </div>
              {time.getHours() > 12
                ? (time.getHours() - 12).toString().padStart(2, "0") +
                  ":" +
                  time.getMinutes().toString().padStart(2, "0")
                : time.getHours().toString().padStart(2, "0") +
                  ":" +
                  time.getMinutes().toString().padStart(2, "0")}
            </div>
            <a href="/water/app">
              <button className={path === "app" ? "button-active" : ""}>
                <svg viewBox={"0 0 24 24"}>
                  <path
                    d={
                      "M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
                    }
                  />
                </svg>
                <span className="sidebar-des">Home</span>
              </button>
            </a>
            <a href="/water/favorites">
              <button className={path === "favorites" ? "button-active" : ""}>
                <svg viewBox={"0 0 24 24"}>
                  <path
                    d={
                      "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                    }
                  />
                </svg>
                <span className="sidebar-des">Favorites</span>
              </button>
            </a>
            <a href="/water/new">
              <button className={path === "new" ? "button-active" : ""}>
                <svg viewBox={"0 0 24 24"}>
                  <path
                    d={
                      "m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"
                    }
                  />
                </svg>
                <span className="sidebar-des">New Note</span>
              </button>
            </a>
            <a href="/water/info">
              <button className={path === "info" ? "button-active" : ""}>
                <svg viewBox={"0 0 24 24"}>
                  <path
                    d={
                      "M13.5,6.5a1.5,1.5,0,0,1-3,0A1.5,1.5,0,0,1,13.5,6.5ZM24,19V12.34A12.209,12.209,0,0,0,12.836.028,12,12,0,0,0,.029,12.854C.471,19.208,6.082,24,13.083,24H19A5.006,5.006,0,0,0,24,19ZM12.7,2.024A10.2,10.2,0,0,1,22,12.34V19a3,3,0,0,1-3,3H13.083C7.049,22,2.4,18.1,2.025,12.716A10,10,0,0,1,12.016,2C12.243,2,12.472,2.009,12.7,2.024ZM14,18V12a2,2,0,0,0-2-2H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0Z"
                    }
                  />
                </svg>
                <span className="sidebar-des">About</span>
              </button>
            </a>
            <a href="/water/settings">
              <button className={path === "settings" ? "button-active" : ""}>
                <svg viewBox={"0 0 24 24"}>
                  <path
                    d={
                      "M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                    }
                  />
                  <path
                    d={
                      "M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"
                    }
                  />
                </svg>
                <span className="sidebar-des">Settings</span>
              </button>
            </a>
          </div>
          <div className="sidebar-yt-player">
            <iframe
              title="youtube"
              src={
                "https://www.youtube.com/embed/" +
                ytVideoId +
                "?mute=0&controls=1&showinfo=0&rel=0&loop=1"
              }
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <input
              type="text"
              placeholder="Paste a YouTube link here!"
              onChange={(e) => {
                // get video id from the link
                let videoId = e.target.value.split("v=")[1];
                // if the video id is not undefined
                if (videoId !== undefined) {
                  // get the first 11 characters
                  videoId = videoId.substring(0, 11);
                  // set the video id
                  setYtVideoId(videoId);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
