import React from "react";

const About = () => {
  return (
    <>
      {/*=======About section=======*/}
      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">About Me</h1>
          <h2 className="section-title-02">About Me</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src="./22.png" alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>I&apos;m Mark</h3>
                <h4>
                  A Lead <span>Programmer</span> based in <span>India</span>
                </h4>
                <p>
                  I am currently pursuing a degree in Computer Science
                  Engineering, with a strong focus on staying updated with the
                  latest advancements in computer projects, UI/UX design, and
                  programming. I am passionate about creating innovative
                  solutions and contributing to open-source projects,
                  continuously seeking opportunities to expand my knowledge and
                  skill set in these areas.
                </p>
              </div>
              <ul className="professional-list">
                <li className="list-item">
                  <h3>1</h3>
                  <span>
                    Years of
                    <br />
                    Experience
                  </span>
                </li>
                <li className="list-item">
                  <h3>4+</h3>
                  <span>
                    Success
                    <br />
                    Projects
                  </span>
                </li>
              </ul>
              <a href="./Mark Patel Resume.pdf" className="btn">
                {" "}
                Download Resume <i className="fas fa-download" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
