import React from "react";

export default function HomePage({
  changeView,
  showLoginModal,
  showNewUserModal,
}) {
  console.log("rendering home page");
  return (
    <div className="container mt-4">
      {/* SECTION 1 */}

      <div className="row my-4 flex-md-row flex-column-reverse">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 mb-4">Learn JavaScript</h1>
          <p className="my-0 lead">Start from the basics</p>
          <p className="my-0 lead">Learn by doing</p>
          <p className="my-0 lead">Tons of fun</p>
          <button
            className="btn btn-outline-secondary mt-4"
            onClick={() => {
              changeView("learn");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="col-md-6 pb-4 d-flex justify-content-center justify-content-md-start">
          <img
            src="images/javascript_logo.png"
            alt="progress"
            className="w-50"
          />
        </div>
      </div>
      <hr className="home-view-lines" />

      {/* SECTION 2 */}

      <div className="row d-flex">
        <div className="pb-4 col-md-6 d-flex justify-content-center">
          <img
            src="images/process_ppt.png"
            alt="javascript logo"
            className="w-50"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 mb-4">Track your progress</h1>
          <p className="my-0 lead">Come back to where you left off</p>
          <p className="my-0 lead">Tracked progress is effective learning</p>
          <button
            className="btn btn-outline-secondary mt-4"
            onClick={() => showLoginModal()}
          >
            Login
          </button>
        </div>
      </div>
      <hr className="home-view-lines" />

      {/* SECTION 3 */}

      <div className="row flex-md-row flex-column-reverse">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 mb-4 ">Ready to start learning?</h1>
          <p className="my-0 lead">Unlock your full learning potential</p>
          <button
            className="btn btn-outline-secondary mt-4"
            onClick={showNewUserModal}
          >
            Sign up today
          </button>
        </div>
        <div className="col-md-6">
          <img
            src="images/rocket_gif.gif"
            alt="javascript logo"
            className="rocket-style"
          />
        </div>
      </div>

      {/* SECTION 4 */}

      <div className="row disclaimer-row">
        <p>Disclaimer:</p>
        <p>
          This is a clone of{" "}
          <a href="https://brilliant.org/" target="_blank">
            brilliant.org
          </a>{" "}
        </p>
        <p>Created for learning purposes</p>
      </div>
    </div>
  );
}
