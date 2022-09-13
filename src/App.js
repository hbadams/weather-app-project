import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <footer>
          This project was coded by Hayley Adams, and is{" "}
          <a
            href="https://github.com/hbadams/weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
          {"  "}
          You can view it on{" "}
          <a
            href="https://jolly-cranachan-7f7f10.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          !
        </footer>
      </div>
    </div>
  );
}
