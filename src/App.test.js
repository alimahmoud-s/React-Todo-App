import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div).toMatchSnapshot(); /* This is our snapshot */

  ReactDOM.unmountComponentAtNode(div);
});
