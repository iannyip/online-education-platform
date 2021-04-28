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
        <div className="col-8 ">
          <div className="row lesson-content">
            {currentLesson && (
              <LessonTitle className="col-12" currentLesson={currentLesson} />
            )}
            {currentLesson && (
              <LessonDetail className="col-12" currentLesson={currentLesson} />
            )}
          </div>
          <div className="row editor-style">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
}
