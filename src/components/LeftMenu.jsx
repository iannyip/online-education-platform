import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeftMenu({ LessonTitles, changeLesson, userLoggedIn }) {
  const jsxLessonTitles = LessonTitles.map((lesson) => (
    <li
      key={lesson.id}
      className="left-menu-item"
      onClick={
        lesson.premium == 0 || userLoggedIn
          ? () => {
              changeLesson(lesson.id);
            }
          : undefined
      }
    >
      {lesson.title}
      {/* {<span className="access-status-style">✔️</span>} */}
      {lesson.premium === 1 && !userLoggedIn && (
        <span className="access-status-style">
          🔒<span className="tooltiptext">Login to unlock</span>
        </span>
      )}
    </li>
  ));

  return (
    <div className="left-menu">
      <h3>Lessons</h3>
      <ol>{jsxLessonTitles}</ol>
    </div>
  );
}
