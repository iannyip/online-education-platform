import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeftMenu({ lessonTitles }) {
  const jsxLessonTitles = lessonTitles.map((lesson) => {
    return <li key={lesson}>{lesson}</li>;
  });

  return (
    <div className="left-menu">
      <h3>Lessons</h3>
      <ol>{jsxLessonTitles}</ol>
    </div>
  );
}
