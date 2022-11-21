// import required libraries
import React, { useState } from "react";

export default function WriteTop(props) {
  // create a ref for the input
  const [topText, setTopText] = useState(true);
  const [isShareVisible, setIsShareVisible] = useState(false);
  // change the button text
  //changeText(".write-top-para" ,"Copy Link", "Copied!");
  const changeText = (bool) => {
    setTopText(bool);
    setTimeout(() => {
      setTopText(!bool);
    }, 3000);
  };

  return (
    <div className="write-top-buttons">
      <button
        className="write-top-button"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          changeText(false);
        }}
      >
        <svg viewBox="0 0 24 24">
          <path d="m13 20a5.006 5.006 0 0 0 5-5v-8.757a3.972 3.972 0 0 0 -1.172-2.829l-2.242-2.242a3.972 3.972 0 0 0 -2.829-1.172h-4.757a5.006 5.006 0 0 0 -5 5v10a5.006 5.006 0 0 0 5 5zm-9-5v-10a3 3 0 0 1 3-3s4.919.014 5 .024v1.976a2 2 0 0 0 2 2h1.976c.01.081.024 9 .024 9a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3-3zm18-7v11a5.006 5.006 0 0 1 -5 5h-9a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3v-11a1 1 0 0 1 2 0z" />
        </svg>
        <div style={topText ? { display: "block" } : { display: "none" }}>
          Copy Link
        </div>
        <div style={!topText ? { display: "block" } : { display: "none" }}>
          Copied!
        </div>
      </button>
      <button
        className="write-top-button-more"
        onClick={() => setIsShareVisible(!isShareVisible)}
        title="More"
      >
        <svg viewBox="0 0 512 512">
          <g>
            <circle cx="256" cy="53.333" r="53.333" />
            <circle cx="256" cy="256" r="53.333" />
            <circle cx="256" cy="458.667" r="53.333" />
          </g>
        </svg>
      </button>
      <div
        className="write-top-share"
        style={
          isShareVisible
            ? { opacity: 1, pointerEvents: "all" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <div className="write-top-share-buttons">
          <button
            className="write-top-share-button-close"
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              border: "1px solid #232031",
              margin: "0",
            }}
            onClick={() => setIsShareVisible(!isShareVisible)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
            </svg>
          </button>
          <button
            style={{
              width: "80%",
              height: "40px",
              marginBottom: "15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="write-top-share-button"
            onClick={() => {
              props.path === "info"
                ? navigator.clipboard.writeText(props.info)
                : navigator.clipboard.writeText(props.note.content);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                marginRight: "20px",
              }}
            >
              <path d="m13 20a5.006 5.006 0 0 0 5-5v-8.757a3.972 3.972 0 0 0 -1.172-2.829l-2.242-2.242a3.972 3.972 0 0 0 -2.829-1.172h-4.757a5.006 5.006 0 0 0 -5 5v10a5.006 5.006 0 0 0 5 5zm-9-5v-10a3 3 0 0 1 3-3s4.919.014 5 .024v1.976a2 2 0 0 0 2 2h1.976c.01.081.024 9 .024 9a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3-3zm18-7v11a5.006 5.006 0 0 1 -5 5h-9a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3v-11a1 1 0 0 1 2 0z" />
            </svg>
            Copy as Markdown
          </button>
          <button
            style={{
              width: "80%",
              height: "40px",
              marginBottom: "26px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="write-top-share-button"
            onClick={() => {
              window.open(
                `mailto:meetnp1706@gmail.com?subject=Hello!%20@ForLoop!%20I%20found%20a%20bug%20in%20Water.`
              );
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                marginRight: "20px",
              }}
            >
              <path d="M11.904,16c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1-2c0-.561,.408-1.225,.928-1.512,1.5-.826,2.307-2.523,2.009-4.223-.283-1.613-1.607-2.938-3.221-3.221-1.182-.204-2.38,.112-3.289,.874-.907,.763-1.428,1.879-1.428,3.063,0,.553,.448,1,1,1s1-.447,1-1c0-.592,.26-1.15,.714-1.532,.461-.386,1.052-.542,1.657-.435,.787,.138,1.458,.81,1.596,1.596,.153,.871-.241,1.705-1.004,2.125-1.156,.637-1.963,1.979-1.963,3.264,0,.553,.448,1,1,1s1-.447,1-1Zm11.096,5v-6.66C24,5.861,19.096,.454,12.836,.028,9.361-.202,5.961,1.066,3.509,3.521,1.057,5.977-.211,9.378,.03,12.854c.44,6.354,6.052,11.146,13.054,11.146h5.917c2.757,0,5-2.243,5-5ZM12.701,2.024c5.215,.354,9.299,4.885,9.299,10.315v6.66c0,1.654-1.346,3-3,3h-5.917c-6.035,0-10.686-3.904-11.059-9.284-.201-2.899,.855-5.735,2.899-7.781,1.882-1.885,4.435-2.934,7.092-2.934,.228,0,.457,.008,.685,.023Z" />
            </svg>
            Feedback
          </button>

          <h2>Share</h2>
          <div className="write-top-share-buttons-container">
            <button
              className="write-top-share-button"
              onClick={() => {
                // share on whatsapp
                window.open(
                  `https://wa.me/?text=Hey!%20I%20just%20wrote%20a%20note%20on%20Water.%20Check%20it%20out%20at%20${window.location.href}!`,
                  "_blank"
                );
              }}
            >
              <svg viewBox="0 0 24 24">
                <g id="WA_Logo">
                  <g>
                    <path
                      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"
                    />
                  </g>
                </g>
              </svg>
              Whatsapp
            </button>
            <button
              className="write-top-share-button"
              onClick={() => {
                // share on mail
                window.open(
                  `mailto:?subject=Hey! I just wrote a note on Water. Check it out at ${window.location.href}!`,
                  "_blank"
                );
              }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z" />
              </svg>
              E-Mail
            </button>
            <button
              className="write-top-share-button"
              onClick={() => {
                // share on twitter
                window.open(
                  `https://twitter.com/intent/tweet?text=Hey!%20I%20just%20wrote%20a%20note%20on%20Water.%20Check%20it%20out%20at%20${window.location.href}!`,
                  "_blank"
                );
              }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" />
              </svg>
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
