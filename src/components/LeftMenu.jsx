import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function LeftMenu({
  LessonTitles,
  changeLesson,
  userLoggedIn,
  userCompleted,
}) {
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
      {userCompleted && userCompleted.includes(lesson.id) && (
        <span className="access-status-style">✔️</span>
      )}
      {lesson.premium === 1 && !userLoggedIn && (
        <span className="access-status-style">
          🔒<span className="tooltiptext">Login to unlock</span>
        </span>
      )}
    </li>
  ));

  return (
    <div className="left-menu">
      <h3 className="d-none d-md-block">Lessons</h3>
      <div className="d-none d-md-block">
        <ol>{jsxLessonTitles}</ol>
      </div>

      <Accordion defaultActiveKey="0" className="d-md-none">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="w-100 text-center"
              as={Button}
              variant="h3"
              eventKey="0"
            >
              <h3 className="p-0">Lessons</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <div>
                <ol>{jsxLessonTitles}</ol>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
