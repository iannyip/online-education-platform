import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeftMenu({ LessonTitles, changeLesson }) {
  const jsxLessonTitles = LessonTitles.map((lesson) => (
    <li
      key={lesson.id}
      className="left-menu-item"
      onClick={() => {
        changeLesson(lesson.id);
      }}
    >
      {lesson.title}
      {/* {<span className="access-status-style">✔️</span>} */}
      {lesson.premium === 1 && <span className="access-status-style">🔒</span>}
    </li>
  ));

  return (
    <div className="left-menu">
      <h3>Lessons</h3>
      <ol>{jsxLessonTitles}</ol>
    </div>
  );
}
