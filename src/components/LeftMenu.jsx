import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeftMenu() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get("/titleIndex")
      .then((result) => {
        setLessons(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const jsxLessonTitles = lessons.map((lesson) => {
    return <li key={lesson}>{lesson}</li>;
  });

  return (
    <div className="left-menu">
      <h3>Lessons</h3>
      <ol>{jsxLessonTitles}</ol>
    </div>
  );
}
