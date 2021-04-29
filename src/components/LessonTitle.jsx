import React from "react";

export default function LessonTitle({ currentLesson }) {
  // To ask akira: why does this run twice?
  console.log(currentLesson.title);
  return (
    <div>
      <h1>
        {currentLesson.id}: {currentLesson.title}
      </h1>
    </div>
  );
}
