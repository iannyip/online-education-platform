import React, { useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";

export default function App() {
  const [currentLesson, setCurrentLesson] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LeftMenu />
        </div>
        <div className="col-8 row">
          <div className="row">Hello</div>
          <div className="row">Goodby</div>
        </div>
      </div>
    </div>
  );
}
