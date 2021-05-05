import React from "react";

export default function LessonDetail({ currentLesson }) {
  return (
    <div>
      <div className="new-line">{currentLesson.task}</div>
    </div>
  );
}
