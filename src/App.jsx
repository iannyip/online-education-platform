import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";
import LessonTitle from "./components/LessonTitle.jsx";
import LessonDetail from "./components/LessonDetail.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import MainNav from "./components/navbar.jsx";
import LoginModal from "./components/LoginModal.jsx";

export default function App() {
  const [currentLessonNo, setCurrentLessonNo] = useState(1);
  const [currentLesson, setCurrentLesson] = useState();
  const [lessonTitles, setlessonTitles] = useState({});
  const [loginShow, setLoginShow] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const showLoginModal = () => {
    setLoginShow(true);
  };

  const hideLoginModal = () => {
    setLoginShow(false);
  };

  const logUserOut = () => {
    console.log("logging out...");
    setUserLoggedIn(false);
    setUserId("");
  };

  const changeLesson = (newLessonNo) => {
    setCurrentLessonNo(newLessonNo);
  };

  const loginReq = (name, password) => {
    axios
      .post("/login", { name, password })
      .then((result) => {
        console.log(`Cookie: ${document.cookie.UserId}`);
        console.log(result.data);
        if (result.data.message === "valid user") {
          setUserLoggedIn(true);
          setLoginShow(false);
          setUserId(result.data.UserId);
        } else if (result.data.message === "invalid user") {
          console.log("failed");
          setUserLoggedIn(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
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
    <div className="container pt-4">
      <MainNav
        showLoginModal={showLoginModal}
        userLoggedIn={userLoggedIn}
        logUserOut={logUserOut}
      />
      <LoginModal
        loginShow={loginShow}
        onHide={hideLoginModal}
        loginReq={loginReq}
      />
      <div className="row mt-4">
        <div className="col-4 mt-4">
          <LeftMenu lessonTitles={lessonTitles} changeLesson={changeLesson} />
        </div>
        <div className="col-8 mt-4">
          <div className="row lesson-content">
            {currentLesson && (
              <LessonTitle className="col-12" currentLesson={currentLesson} />
            )}
            {currentLesson && (
              <LessonDetail className="col-12" currentLesson={currentLesson} />
            )}
          </div>
          <div className="row editor-style">
            {currentLesson && <CodeEditor currentLesson={currentLesson} />}
          </div>
        </div>
      </div>
    </div>
  );
}
