import React from "react";
// import javascript_logo from "../../public/javascript_logo.png";

export default function HomePage() {
  console.log("rendering home page");
  return (
    <div className="container mt-4">
      <div className="row my-4">
        <div className="col-6">
          <h1 className="display-5 mb-4">Learn JavaScript</h1>
          <p className="my-0 lead">Start from the basics</p>
          <p className="my-0 lead">Learn by doing</p>
          <p className="my-0 lead">Tons of fun</p>
          <button className="btn btn-outline-secondary mt-4">
            Get Started
          </button>
        </div>
        <div className="col-6">
          <img src={"../../public/javascript_logo.png"} alt="javascript logo" />
          {/* <img src={javascript_logo} alt="javascript logo" /> */}
        </div>
      </div>
      <hr className="home-view-lines" />
      <div className="row">
        <div className="col-6">Image here</div>
        <div className="col-6">
          <h1 className="display-5 mb-4">Track your progress</h1>
          <p className="my-0 lead">Come back to where you left off</p>
          <p className="my-0 lead">Tracked progress is effective learning</p>
          <button className="btn btn-outline-secondary mt-4">Login</button>
        </div>
      </div>
      <hr className="home-view-lines" />
      <div className="row">
        <div className="col-6">Content here</div>
        <div className="col-6">Logo here</div>
      </div>
    </div>
  );
}
