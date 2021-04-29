import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";
import LessonTitle from "./components/LessonTitle.jsx";
import LessonDetail from "./components/LessonDetail.jsx";
import CodeEditor from "./components/CodeEditor.jsx";

// import testFunctions from "./tests.mjs";

export default function App() {
  const [currentLessonNo, setCurrentLessonNo] = useState(1);
  const [currentLesson, setCurrentLesson] = useState();
  const [lessonTitles, setlessonTitles] = useState({});

  const changeLesson = (newLessonNo) => {
    setCurrentLessonNo(newLessonNo);
  };

  useEffect(() => {
    // get the first lesson
    console.log("I should be running one time");

    setCurrentLessonNo(1);
    axios
      .get("/titleIndex")
      .then((result) => {
        setlessonTitles(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // USEEFFECT - runs when currentLessonNo updates
  useEffect(() => {
    axios
      .get(`/lessons/${currentLessonNo}`)
      .then((result) => {
        setCurrentLesson(result.data);
      })
      .catch((error) => console.log(error));
  }, [currentLessonNo]);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <LeftMenu lessonTitles={lessonTitles} changeLesson={changeLesson} />
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
