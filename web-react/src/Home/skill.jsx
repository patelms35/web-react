import React from "react";

const Skill = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <div className="container flex-center">
          <h1 className="section-title-01">Skills</h1>
          <h2 className="section-title-02">Skills</h2>
          <div className="content">
            <div className="skills-description">
              <h3>Education &amp; Skills</h3>
              <p>
                I am currently expanding my expertise by learning MERN stack
                development. I have a strong background in application design
                for both Android and iOS, web design, UI/UX design, copywriting,
                and creating impactful PowerPoint presentations. These skills
                enable me to craft well-rounded and user-centric digital
                experiences.
              </p>
            </div>
            <div className="skills-info education-all">
              <div className="education">
                <h4>
                  <label>Education</label>
                </h4>
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2021</span>
                    <p>
                      <span>Completed Higher</span> - Secondary
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2021-2025</span>
                    <p>
                      <span>Persuing </span>Study Computer Science Engineering{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h4>
                  <label>Skills</label>
                </h4>
                <ul className="bars">
                  <li className="bar">
                    <div className="info">
                      <span>UI/UX Design</span>
                      <span>100%</span>
                    </div>
                    <div className="line ux" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>HTML</span>
                      <span>95%</span>
                    </div>
                    <div className="line html" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>CSS</span>
                      <span>90%</span>
                    </div>
                    <div className="line css" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>Tailwind</span>
                      <span>60%</span>
                    </div>
                    <div className="line tailwind" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>Javascript</span>
                      <span>50%</span>
                    </div>
                    <div className="line javascript" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>React.js</span>
                      <span>20%</span>
                    </div>
                    <div className="line react" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>C / C++</span>
                      <span>70%</span>
                    </div>
                    <div className="line c" />
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>Python</span>
                      <span>50%</span>
                    </div>
                    <div className="line python" />
                  </li>
                </ul>
              </div>
              <div className="education">
                <h4>
                  <label>Awards</label>
                </h4>
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2022</span>
                    <p>
                      <span> UI/UX </span> - Figma (Udemy)
                    </p>
                    <br />
                    <h5>
                      <label>
                        <a className="acolor" href=".Black/figma.jpg">
                          Certificate
                        </a>
                      </label>
                    </h5>
                  </li>
                  <li className="item">
                    <span className="year">2022</span>
                    <p>
                      <span> UI/UX </span> - Adobe XD (Udemy)
                    </p>
                    <br />
                    <h5>
                      <label>
                        <a className="acolor" href="./AdobeXD.jpg">
                          Certificate
                        </a>
                      </label>
                    </h5>
                  </li>
                  <li className="item">
                    <span className="year">2022</span>
                    <p>
                      <span> Web Developer </span> - Bootcamp (Udemy)
                    </p>
                    <br />
                    <h5>
                      <label>
                        <a className="acolor" href="./web.jpg">
                          Certificate
                        </a>
                      </label>
                    </h5>
                  </li>
                  <li className="item">
                    <span className="year">2021</span>
                    <p>
                      <span> C / C++</span> - Language
                    </p>
                    <br />
                    <h5>
                      <label>
                        <a className="acolor" href="./2.jpg">
                          Certificate
                        </a>
                      </label>
                    </h5>
                  </li>
                  <li className="item">
                    <span className="year">2022</span>
                    <p>
                      <span>Python </span>
                    </p>{" "}
                    <br />
                    <h5>
                      <label>
                        <a className="acolor" href="./python.pdf">
                          Certificate
                        </a>
                      </label>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            {/* Work & Experience */}
            <div className="skills-description">
              <h3>Work &amp; Experience</h3>
            </div>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>Engaj Media</h3>
                  <h5>InternShip</h5>
                  <span>October 2023 - December 2023 </span>
                </div>
                <div className="hr" />
                <h4>
                  <label>
                    <a className="acolor" href="/Internship.jpg">
                      UI/UX Designer
                    </a>
                  </label>
                </h4>
                <p>
                  I am a UX Designer in Engaj media. i create a UX design for
                  leading digital marketing agency that specializes in providing
                  tailored marketing solutions for the fashion industry.
                </p>
              </div>
              <div className="skills-info">
                <div className="experience-card">
                  <div className="upper">
                    <h3>Artifice labs</h3>
                    <h5>Freelancer</h5>
                    <span>june 2024 - Sep 2024 </span>
                  </div>
                  <div className="hr" />
                  <h4>
                    <label>
                      <a
                        className="acolor"
                        href="https://www.artificelabs.com/"
                      >
                        Designer &amp; Developer
                      </a>
                    </label>
                  </h4>
                  <p>
                    Crafted a sleek, responsive website using Figma for design
                    and developed with React.js and Tailwind CSS, delivering a
                    seamless user experience with modern aesthetics and
                    optimized performance across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
