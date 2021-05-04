import React from "react";

export default function LessonTitle({ currentLesson }) {
  // To ask akira: why does this run twice?
  return (
    <div>
      <h1 className="lead display-6 mb-4">
        {currentLesson.id}. {currentLesson.title}
      </h1>
    </div>
  );
}
