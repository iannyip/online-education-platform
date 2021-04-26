import React, { useState } from "react";
import axios from "axios";

function getLessonTitles() {
  axios
    .get("/titleIndex")
    .then((result) => {
      console.log(result.data);
      console.log("inside");
      const list = result.data;
      return list;
    })
    .catch((error) => console.log(error));
}

function TitleList({ lessons }) {
  lessons.map((lesson) => {
    <li>{lesson}</li>;
  });
  return <ol>{lessons}</ol>;
}

export default function LeftMenu() {
  const [lessons, setLessons] = useState([]);

  console.log(`The lesson: ${lessons}`);

  function getTitles() {
    axios
      .get("/titleIndex")
      .then((result) => {
        console.log(result.data);
        setLessons(result.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="left-menu">
      <h1>Lessons</h1>
      <button onClick={getTitles}>Click me</button>
      <TitleList lessons={lessons} />
      {/* <ol>{}</ol> */}
    </div>
  );
}
