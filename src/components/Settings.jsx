import React from "react";

export default function Settings(props) {
  return (
    <div className="write">
      <div className="splash">
        <img
          src={process.env.PUBLIC_URL + "/images/water-logo.png"}
          alt="logo"
          className="splash-logo"
        />
      </div>
      <h1>Settings.</h1>
      <hr />
      <h3>Customization.</h3>
      <blockquote>
        <button
          onClick={() => {
            props.setCssVariablesFunction({
              "--main-theme-color": "#2685e9cc",
              "--main-theme-color-transparent": "#2685e911",
              "--main-font-color": "#1c1b28",
              "--main-font-color-transparent": "#1c1b2844",
              "--main-bgcolor-fainted": "#f9f9fb",
              "--main-bgcolor": "#e3e2ec",
              "--main-bgcolor-shade-3": "#ececf3",
              "--main-bgcolor-fainted-light": "#a09fab22",
              "--blur-color": "#ffffff77",
              "--main-homepage-background-image": "url('')",
            });
            props.setCssVariables({
              "--main-theme-color": "#2685e9cc",
              "--main-theme-color-transparent": "#2685e911",
              "--main-font-color": "#1c1b28",
              "--main-font-color-transparent": "#1c1b2844",
              "--main-bgcolor-fainted": "#f9f9fb",
              "--main-bgcolor": "#e3e2ec",
              "--main-bgcolor-shade-3": "#ececf3",
              "--main-bgcolor-fainted-light": "#a09fab22",
              "--blur-color": "#ffffff77",
              "--main-homepage-background-image": "url('')",
            });
          }}
        >
          Default Light.
        </button>
        <button
          onClick={() => {
            props.setCssVariablesFunction({
              "--main-theme-color": "#8d80cf",
              "--main-theme-color-transparent": "#8d80cf33",
              "--main-font-color": "#fcfcfe",
              "--main-font-color-transparent": "#fcfcfe44",
              "--main-bgcolor-fainted": "#383548",
              "--main-bgcolor": "#181623",
              "--main-bgcolor-shade-3": "#232031",
              "--main-bgcolor-fainted-light": "#383548aa",
              "--blur-color": "#000000aa",
              "--main-homepage-background-image": "url('')",
            });
            props.setCssVariables({
              "--main-theme-color": "#8d80cf",
              "--main-theme-color-transparent": "#8d80cf33",
              "--main-font-color": "#fcfcfe",
              "--main-font-color-transparent": "#fcfcfe44",
              "--main-bgcolor-fainted": "#383548",
              "--main-bgcolor": "#181623",
              "--main-bgcolor-shade-3": "#232031",
              "--main-bgcolor-fainted-light": "#383548aa",
              "--blur-color": "#000000aa",
              "--main-homepage-background-image": "url('')",
            });
          }}
        >
          Default Dark.
        </button>
        <button
          onClick={() => {
            props.setCssVariablesFunction({
              "--main-theme-color": "#00000088",
              "--main-theme-color-transparent": "#00000000",
              "--main-font-color": "#000000bb",
              "--main-font-color-transparent": "#00000044",
              "--main-bgcolor-fainted": "#00000005",
              "--main-bgcolor": "#ffffff",
              "--main-bgcolor-shade-3": "#00000009",
              "--main-bgcolor-fainted-light": "#ffffffaa",
              "--blur-color": "#ffffffaa",
              "--main-homepage-background-image": "url('')",
            });
            props.setCssVariables({
              "--main-theme-color": "#00000088",
              "--main-theme-color-transparent": "#00000000",
              "--main-font-color": "#000000bb",
              "--main-font-color-transparent": "#00000044",
              "--main-bgcolor-fainted": "#00000005",
              "--main-bgcolor": "#ffffff",
              "--main-bgcolor-shade-3": "#00000009",
              "--main-bgcolor-fainted-light": "#ffffffaa",
              "--blur-color": "#ffffffaa",
              "--main-homepage-background-image": "url('')",
            });
          }}
        >
          Light Greyscale.
        </button>
      </blockquote>
    </div>
  );
}
