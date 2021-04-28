import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";
import LessonTitle from "./components/LessonTitle.jsx";
import LessonDetail from "./components/LessonDetail.jsx";
import CodeEditor from "./components/CodeEditor.jsx";

export default function App() {
  const [currentLesson, setCurrentLesson] = useState();
  const [lessonTitles, setlessonTitles] = useState([]);

  useEffect(() => {
    // get the first lesson
    const firstLesson = 1;

    axios
      .get(`/lessons/${firstLesson}`)
      .then((result) => {
        setCurrentLesson(result.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("/titleIndex")
      .then((result) => {
        setlessonTitles(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LeftMenu lessonTitles={lessonTitles} />
        </div>
        <div className="col-8 row">
          {currentLesson && (
            <LessonTitle className="row" currentLesson={currentLesson} />
          )}
          {currentLesson && (
            <LessonDetail className="row" currentLesson={currentLesson} />
          )}
          <CodeEditor className="row" />
          <div className="row">Goodby</div>
        </div>
      </div>
    </div>
  );
}
