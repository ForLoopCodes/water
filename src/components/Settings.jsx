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
        {props.themes.map((theme) => (
          <button
            key={theme.name}
            style={{
              margin: "5px",
            }}
            onClick={() => {
              props.setCssVariablesFunction(theme.css);
              localStorage.setItem("cssVariables", JSON.stringify(theme.css));
            }}
          >
            {theme.name}.
          </button>
        ))}
      </blockquote>
    </div>
  );
}
