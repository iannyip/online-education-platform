import React from "react";

export default function LessonTitle({ currentLesson }) {
  console.log(currentLesson.title);
  return (
    <div>
      <h1>
        {currentLesson.id}: {currentLesson.title}
      </h1>
    </div>
  );
}
