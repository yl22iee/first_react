import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

export const WHeader = () => {
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}>Logo</Link>
        </div>

        <ul>
          <li>
            <Link to={"sub01"}>Sub01</Link>
          </li>
          <li>
            <Link to={"sub02"}>Sub02</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
