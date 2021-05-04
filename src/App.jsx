import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftMenu from "./components/LeftMenu.jsx";
import LessonTitle from "./components/LessonTitle.jsx";
import LessonDetail from "./components/LessonDetail.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import MainNav from "./components/navbar.jsx";
import LoginModal from "./components/LoginModal.jsx";
import HomePage from "./components/HomePage.jsx";
import NewUserModal from "./components/NewUserModal.jsx";

export default function App() {
  const [currentLessonNo, setCurrentLessonNo] = useState(1);
  const [currentLesson, setCurrentLesson] = useState();
  const [lessonTitles, setlessonTitles] = useState([]);
  const [userSubmittedCode, setUserSubmittedCode] = useState("");

  const [view, setView] = useState("home");

  const [loginShow, setLoginShow] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [userCompleted, setUserCompleted] = useState([]);
  const [newUserShow, setNewUserShow] = useState(false);

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

  useEffect(() => {
    // If the user is logged in
    if (userLoggedIn) {
      axios
        .get(`/pastsubmission/${userId}/${currentLessonNo}`)
        .then((result) => {
          if (result.data !== "OK") {
            setUserSubmittedCode(result.data);
          } else {
            setUserSubmittedCode("");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [currentLessonNo]);

  const changeView = (nextView) => {
    setView(nextView);
  };

  const showLoginModal = () => {
    setLoginShow(true);
  };

  const hideLoginModal = () => {
    setLoginShow(false);
  };

  const logUserOut = () => {
    setUserLoggedIn(false);
    setUserCompleted([]);
    setUserId("");
  };

  const showNewUserModal = () => {
    setNewUserShow(true);
  };

  const hideNewUserModal = () => {
    setNewUserShow(false);
  };

  const createNewUser = (name, password) => {
    axios
      .post("/register", { name, password })
      .then((result) => {
        setNewUserShow(false);
        setUserLoggedIn(true);
        setUserId(result.data.UserId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeLesson = (newLessonNo) => {
    setCurrentLessonNo(newLessonNo);
  };

  const getUserProgress = () => {
    axios
      .get(`/progress/${userId}`)
      .then((result) => {
        setUserCompleted(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userId !== "") {
      getUserProgress();
    }
  }, [userId]);

  const loginReq = (name, password) => {
    axios
      .post("/login", { name, password })
      .then((result) => {
        if (result.data.message === "valid user") {
          setUserLoggedIn(true);
          setLoginShow(false);
          setUserId(result.data.UserId);
        } else if (result.data.message === "invalid user") {
          setUserLoggedIn(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const updateProgress = (editorValue) => {
    axios
      .post("/attempts", { editorValue, userId, currentLessonNo })
      .then((result) => {
        getUserProgress();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container pt-4">
      <MainNav
        showLoginModal={showLoginModal}
        userLoggedIn={userLoggedIn}
        logUserOut={logUserOut}
        view={view}
        changeView={changeView}
      />
      <LoginModal
        loginShow={loginShow}
        onHide={hideLoginModal}
        loginReq={loginReq}
        showNewUserModal={showNewUserModal}
      />
      <NewUserModal
        newUserShow={newUserShow}
        onHide={hideNewUserModal}
        createNewUser={createNewUser}
      />
      {view === "home" && (
        <div className="row mt-4">
          <HomePage
            changeView={changeView}
            showLoginModal={showLoginModal}
            showNewUserModal={showNewUserModal}
          />
        </div>
      )}
      {view === "learn" && (
        <div className="row mt-3">
          <div className="col-4 mt-4">
            {lessonTitles && (
              <LeftMenu
                LessonTitles={lessonTitles}
                changeLesson={changeLesson}
                userLoggedIn={userLoggedIn}
                userCompleted={userCompleted}
              />
            )}
          </div>
          <div className="col-8 mt-4">
            <div className="row lesson-content">
              {currentLesson && (
                <LessonTitle className="col-12" currentLesson={currentLesson} />
              )}
              {currentLesson && (
                <LessonDetail
                  className="col-12"
                  currentLesson={currentLesson}
                />
              )}
            </div>
            <div className="row editor-style">
              {currentLesson && (
                <CodeEditor
                  currentLesson={currentLesson}
                  updateProgress={updateProgress}
                  userLoggedIn={userLoggedIn}
                  userSubmittedCode={userSubmittedCode}
                  changeLesson={changeLesson}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
