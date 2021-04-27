import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";
import LessonTitle from "./components/LessonTitle.jsx";

export default function App() {
  const [currentLesson, setCurrentLesson] = useState();

  useEffect(() => {
    // get the first lessons
    const firstLesson = 1;
    axios
      .get(`/lessons/${firstLesson}`)
      .then((result) => {
        setCurrentLesson(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LeftMenu />
        </div>
        <div className="col-8 row">
          <LessonTitle />
          <div className="row">Hello</div>
          <div className="row">Goodby</div>
        </div>
      </div>
    </div>
  );
}
