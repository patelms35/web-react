import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      {/*=======Light/Dark theme button=======*/}
      <div className="theme-btn flex-center">
        <i className="fas fa-moon" />
        <i className="fas fa-sun" />
      </div>
      {/*=======Scroll to top button=======*/}
      <div className="scrollToTop-btn flex-center">
        <i className="fas fa-arrow-up" />
      </div>

      {/*=======Header=======*/}
      <header>
        <div className="nav-bar">
          <a href="#" className="logo">
            Mark
          </a>
          <div className="navigation">
            <div className="nav-items">
              <div className="nav-close-btn" />
              <a href="index.html">Home</a>
              <a href="index.html">About</a>
              <a href="index.html">Skills</a>
              <a href="index.html">Services</a>
              <a className="active" href="#portfolio">
                Portfolio
              </a>
              <a href="index.html">Contact</a>
            </div>
          </div>
          <div className="nav-menu-btn" />
        </div>
      </header>

      {/*=======Portfolio section=======*/}
      <section className="portfolio section" id="portfolio">
        <div className="container flex-center">
          <h1 className="section-title-01">Portfolio</h1>
          <h2 className="section-title-02">Portfolio</h2>
          <div className="button-container">
            <button
              role="button"
              data-name="all"
              className="button-name active"
            >
              Show All
            </button>
            <button
              role="button"
              data-name="UI/UX Design"
              className="button-name"
            >
              UI/UX Design
            </button>
            <button role="button" data-name="Websites" className="button-name">
              Websites
            </button>
          </div>
          <div className="content">
            <div className="portfolio-list">
              {/*2*/}
              <div className="img-card-container" data-name="all">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design &amp; Development</h3>
                    <span>Figma &amp; React.js</span>
                  </div>
                  <img src="images/ar-cover.jpeg" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design &amp; Web Development</h3>
                    <h5>
                      <label>
                        <a href="https://www.artificelabs.com/">Live Website</a>
                      </label>
                    </h5>
                    <img src="images/ar-back.png" alt="" />
                    <p>
                      I recently designed and developed a fully responsive
                      website using Figma 🎨 for the UI/UX design and React.js
                      ⚛️ along with Tailwind CSS 💻 for the development. Figma
                      allowed me to create a clean, user-friendly interface with
                      a focus on intuitive navigation and seamless user
                      experiences. Leveraging the power of React.js, I built a
                      dynamic and scalable front-end, while Tailwind CSS helped
                      streamline the styling process, ensuring a modern,
                      responsive design that looks great across all devices
                      📱💻.
                    </p>
                  </div>
                </div>
              </div>
              {/* --1-- */}
              <div className="img-card-container" data-name="all">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design &amp; Website</h3>
                    <span>Figma &amp; React.js</span>
                  </div>
                  <img src="images/ICMR-cover.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design &amp; Web Development</h3>
                    <h5>
                      <label>
                        <a href="https://indiaems.icmr.org.in/">Live Website</a>
                      </label>
                    </h5>
                    <img src="images/ICMR-back.png" alt="" />
                    <p>
                      At Parul University, our team specializes in website
                      development 🌐, guided by our mentor, Umang Panchal,
                      Assistant Professor 👨‍🏫. We are proud to have developed a
                      website for the prestigious Indian Council of Medical
                      Research (ICMR) 🏥, showcasing our commitment to
                      delivering high-quality, impactful digital solutions 💻.
                    </p>
                  </div>
                </div>
              </div>
              {/*2*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/Trip.gif" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="https://youtu.be/IDJn5xkFY9g?si=b3fM81siOzL8zG9t">
                          Demo Video
                        </a>
                      </label>
                    </h5>
                    <img src="images/Trip Planner.png" alt="" />
                    <p>
                      Certainly! The Trip Navigator UI Kit is an extensive
                      toolkit designed for crafting innovative travel apps.
                      Inspired by the success of Trip Advisor, it offers 30+
                      screens. With this comprehensive UI Kit, users can
                      seamlessly plan and navigate their journeys, making travel
                      experiences smoother and more enjoyable. 🌍🛫🗺
                    </p>
                    <br />
                    <div className="card-certificet">
                      <h4>
                        <label>
                          <a className="acolor" href="images/Tech.jpg">
                            Certificate
                          </a>
                        </label>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*3*/}
              <div
                className="img-card-container card "
                data-name="UI/UX Design"
              >
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/back shoe.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="https://youtu.be/EyGEFq4zOgU?si=QJHApPOSpwC_EuN3">
                          Demo Video
                        </a>
                      </label>
                    </h5>
                    <img src="images/Cover.png" alt="" />
                    <p>
                      Designing a shoe application UI/UX in Figma is an exciting
                      way to showcase your design skills. 👟✨ Figma&apos;s
                      intuitive interface allows you to create interactive and
                      visually appealing designs. With features like
                      prototyping, you can simulate user journeys, ensuring a
                      seamless shopping experience. 🎨📱 Focus on clear
                      navigation, high-quality images, and easy-to-use filters
                      to enhance usability. 🛍️💡 This project not only
                      highlights your creativity but also your ability to think
                      from a user&apos;s perspective, essential for effective
                      UI/UX design. 🚀
                    </p>
                  </div>
                </div>
              </div>
              {/*4*/}
              <div className="img-card-container card" data-name="Websites">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Password Generator</span>
                  </div>
                  <img src="images/Pass.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>Website</h3>
                    <h5>
                      <label>
                        <a href="https://password-45868.web.app/">
                          Live Website
                        </a>
                      </label>
                    </h5>
                    <img src="images/Pass.png" alt="" />
                    <p>
                      🔒 Create your own secure password generator website! 💻
                      Using HTML, CSS, and JavaScript, you can build a stylish,
                      user-friendly interface that generates strong passwords to
                      keep your accounts safe. 🛡️ Enhance security and usability
                      with features like password length selection and special
                      character options. 💪🔐 #WebDevelopment #SecurePasswords
                    </p>
                    <br />
                    <div className="card-certificet">
                      <h4>
                        <label>
                          <a
                            className="acolor"
                            href="https://github.com/patelms35/Password_Generator.git"
                          >
                            Github
                          </a>
                        </label>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*5*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/1.1 front.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="404/404.html">Demo Video</a>
                      </label>
                    </h5>
                    <img src="images/1.1 back.png" alt="" />
                    <p>
                      Designing a shoe application UX in Figma is an exciting
                      endeavor. 👟✨ Figma&apos;s intuitive interface allows you
                      to create detailed, user-friendly designs, from product
                      listings to checkout flows. 🎨💻 You can easily
                      collaborate with your team and prototype interactions,
                      ensuring a seamless and engaging user experience. 🚀
                    </p>
                  </div>
                </div>
              </div>
              {/*6*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/Front car.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="https://www.youtube.com/watch?v=FL4lwNy_yOU&t=45s">
                          Demo Video
                        </a>
                      </label>
                    </h5>
                    <img src="images/Youtube.png" alt="" />
                    <p>
                      I Create UX Design For Car Dealer app or websites design
                      in figma with animation and Different types og pages check
                      out demo protoype on youtube video.
                    </p>
                  </div>
                </div>
              </div>
              {/*7*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/1 Front.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="https://www.youtube.com/watch?v=01Q0moeRUkc">
                          Demo Video
                        </a>
                      </label>
                    </h5>
                    <img src="images/1 back.png" alt="" />
                    <p>
                      I Create UX Design For Apple Watch and Airpods Max . This
                      UX design start to home . In this UX design customize
                      Apple Watch in 2 Size and also customize Watch case and
                      customize Watch Band . In AirPods Max i create new
                      Animated Design for user friendly.
                    </p>
                  </div>
                </div>
              </div>
              {/*8*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/2 front.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="404/404.html">Demo Video</a>
                      </label>
                    </h5>
                    <img src="images/2 back.png" alt="" />
                    <p>This UX design recreate from apple Website</p>
                  </div>
                </div>
              </div>
              {/*9*/}
              <div className="img-card-container card" data-name="UI/UX Design">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="images/watch front.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h5>
                      <label>
                        <a href="https://www.youtube.com/watch?v=XWZvcGvFyQ4">
                          Demo Video
                        </a>
                      </label>
                    </h5>
                    <img src="images/3 back.png" alt="" />
                    <p>This Animated UX design for Apple Watch Utlra</p>
                  </div>
                </div>
              </div>
              {/*10*/}
              <div className="img-card-container card" data-name="Websites">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>CountDown Timer Website</span>
                  </div>
                  <img src="images/4 All.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>Website</h3>
                    <h5>
                      <label>
                        <a href="404/404.html">Demo Video</a>
                      </label>
                    </h5>
                    <img src="images/4 All.png" alt="" />
                    <p />
                  </div>
                </div>
              </div>
              {/*11*/}
              <div className="img-card-container card" data-name="Websites">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Calculator Website</span>
                  </div>
                  <img src="images/5 all.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>Website</h3>
                    <h5>
                      <label>
                        <a href="https://calculator-6a652.web.app/">
                          Live Website
                        </a>
                      </label>
                    </h5>
                    <img src="images/5 all.png" alt="" />
                    <p>
                      Building a Calculator website with HTML, CSS, and
                      JavaScript is a great way to enhance your web development
                      skills. 🖥️ HTML provides the structure, allowing you to
                      create buttons and display areas, while CSS adds style to
                      make it visually appealing. 🎨 JavaScript brings the
                      calculator to life by enabling the functionality to
                      perform arithmetic operations like addition, subtraction,
                      multiplication, and division. ➕➖✖️➗ This project is
                      perfect for understanding the synergy between these core
                      web technologies! 🚀
                    </p>
                    <br />
                    <div className="card-certificet">
                      <h4>
                        <label>
                          <a
                            className="acolor"
                            href="https://github.com/patelms35/calculator.git"
                          >
                            Github
                          </a>
                        </label>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*12*/}
              <div className="img-card-container card" data-name="Websites">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Temperature-Converter website</span>
                  </div>
                  <img src="images/temp back.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>Website</h3>
                    <img src="images/temp back.png" alt="" />
                    <p>
                      Creating a temperature converter using HTML, CSS, and
                      JavaScript is a fun project for beginners. 🌡️ With HTML,
                      you can design the input and output fields, CSS can style
                      them beautifully, and JavaScript adds the logic to convert
                      between Celsius and Fahrenheit. 🔥❄️ It&apos;s an
                      interactive way to learn web development!
                    </p>
                    <br />
                    <div className="card-certificet">
                      <h4>
                        <label>
                          <a
                            className="acolor"
                            href="https://github.com/patelms35/Temperature-Converter.git"
                          >
                            Github
                          </a>
                        </label>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=======Footer=======*/}
      <footer>
        <div className="footer-container">
          <div className="about group">
            <h2>
              <li>
                <a href="#home">Mark</a>
              </li>
            </h2>
            <p>UI / UX Designer</p>
          </div>
          <div className="hr" />
          <div className="info group">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="hr" />
          <div className="follow group">
            <h3>Follow</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/patel.mark.52">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/patel_mark_7262?igshid=YmMyMTA2M2Y=">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PatelMark9">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://github.com/patelms35">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCTbJyXCrEsNSaubviNQC2tg">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/patelmark6172">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright group">
          <li>
            <a href="https://instagram.com/patel_mark_7262?igshid=YmMyMTA2M2Y=">
              <p>Made With ❤️ By Mark Patel Copyright © 2021-2024 .</p>
            </a>
          </li>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
