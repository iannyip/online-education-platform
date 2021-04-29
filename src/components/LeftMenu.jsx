import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeftMenu({ lessonTitles, changeLesson }) {
  const titlesarr = [];
  for (const lessonNam in lessonTitles) {
    // console.log(`${lessonNam}: ${lessonTitles[lessonNam]}`);
    titlesarr.push(lessonNam);
  }
  const jsxLessonTitles = titlesarr.map((lesson) => (
    <li
      key={lesson}
      className="left-menu-item"
      onClick={() => {
        changeLesson(lessonTitles[lesson]);
      }}
    >
      {lesson}
    </li>
  ));

  return (
    <div className="left-menu">
      <h3>Lessons</h3>
      <ol>{jsxLessonTitles}</ol>
    </div>
  );
}
