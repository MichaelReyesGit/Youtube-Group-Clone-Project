import React from "react";

function About() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <button
        className="btn btn-danger"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop1"
        aria-controls="offcanvasTop"
      >
        Michael Reyes
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop1"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Micheal Reyes</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            I am a Full Stack Web Developer interested in creating apps related
            to and building upon video games. I am studying Javascript with html
            and css at Pursuit, an intensive 12-month software engineering
            fellowship with a 9% acceptance rate in Queens, New York. I am
            currently pursuing software engineering in order to grow upon my
            passion for game design and mechanical implementation. After living
            with an elderly mother who still enjoys video games, It is my core
            belief that with a strong foundation of intuitive mechanics and
            accessibility options a game can appeal to an audience beyond what
            is normally expected. Outside of my career as a software developer I
            am constantly on the hunt for new game and movie experiences that
            can get my heart pumping. As I move forward in my career and get a
            more focused picture of my goals, I only wish to continue sharpening
            my skills to a fine point and increasing my coding toolbox.
          </div>
          <div className="d-grid gap-2 d-md-block mt-3">
            <a
              href="https://www.linkedin.com/in/michael-reyes-ny/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger"
              type="button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MichaelReyesGit"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger mx-2"
              type="button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn btn-danger mx-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop2"
        aria-controls="offcanvasTop"
      >
        Jameel Ibrahim
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop2"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Ibrahim Jameel</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Hello there! I'm Jameel, a Pursuit fellow which is a Google-funded
            software engineering fellowship with a 9% acceptance rate. At
            Pursuit, I'm learning how to create web applications with
            technologies like JavaScript, HTML5, CSS3, APIs, and Git.
          </div>
          <div className="d-grid gap-2 d-md-block mt-3">
            <a
              href="https://www.linkedin.com/in/jameel-ibrahim-8a7a6b155/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger"
              type="button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Jameel914"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger mx-2"
              type="button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn btn-danger"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop3"
        aria-controls="offcanvasTop"
      >
        Luis Garcia
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop3"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Luis Garcia</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Former cycle courier with a passion for health and fitness,
            problem-solving, and a hunger for learning, recently pivoted into
            the world of coding by entering Pursuit Fellowship, and intensive 12
            - month software engineering fellowship with a 9% acceptance rate.
            Now building my skills as a Full Stack Web Developer such as
            JavaScript, CSS, HTML, Node.js, Express, SQL, React, and Redux , and
            much more. Excited to connect with like-minded individuals and
            explore new opportunities in the tech industry!
          </div>
          <div className="d-grid gap-2 d-md-block mt-3">
            <a
              href="https://www.linkedin.com/in/luis-garcia-silva/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger"
              type="button"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/luis-garcia-silva/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger mx-2"
              type="button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
