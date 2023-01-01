import React from "react";

import Login from "./login";

var isLoggedin = false;

function App() {
  return (
    <div className="container">{isLoggedin ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
