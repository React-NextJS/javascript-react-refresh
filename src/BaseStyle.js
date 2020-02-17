import React, { useContext } from "react";
import "./BaseStyle.scss";
import { ThemeContext } from "./ThemeProvider";

const BaseStyle = ({ children }) => {
  const state = useContext(ThemeContext);

  localStorage.setItem("dark-mode", state.theme.type);

  console.log(state.theme.type === "dark");

  const dark = localStorage.getItem("dark-mode");

  return (
      <div className={dark === "dark" ? "dark base-style" : "base-style"}>
        <div className="base-style-container">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <p>This is a paragraph</p>
          <a href="/">This is an a tag</a> <br />
          <input placeholder="Input Field"></input> <br />
          <textarea placeholder="Text Area"></textarea> <br />
          <button
            onClick={() => {
              state.setTheme(state.theme.type);
            }}
          >
            Toggle Dark Mode
          </button>
        </div>
        {children}
      </div>
  );
};

export default BaseStyle;
