import React from "react";

export default function LessonDetail({ currentLesson }) {
  return (
    <div>
      <p>{currentLesson.task}</p>
    </div>
  );
}
