import React from "react";

const Portfolio = () => {
  //Portfolio section - Modal
  React.useEffect(() => {
    const portfolioModals = document.querySelectorAll(".porfolio-model");
    const imgCards = document.querySelectorAll(".img-card");
    const portfolioCloseBtns = document.querySelectorAll(
      ".portfolio-close-btn"
    );

    var portfolioModal = function (modalClick) {
      portfolioModals[modalClick].classList.add("active");
    };

    imgCards.forEach((imgCard, i) => {
      imgCard.addEventListener("click", () => {
        portfolioModal(i);
      });
    });

    portfolioCloseBtns.forEach((portfolioCloseBtn) => {
      portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
          portfolioModalView.classList.remove("active");
        });
      });
    });

    return () => {
      imgCards.forEach((imgCard, i) => {
        imgCard.removeEventListener("click", () => {
          portfolioModal(i);
        });
      });

      portfolioCloseBtns.forEach((portfolioCloseBtn) => {
        portfolioCloseBtn.removeEventListener("click", () => {
          portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
          });
        });
      });
    };
  }, []);

  function redirectToNextPage() {
    window.location.href = "./portfolio";
  }
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="container flex-center">
          <h1 className="section-title-01">Portfolio</h1>
          <h2 className="section-title-02">Portfolio</h2>
          <div className="content">
            <div className="portfolio-list">
              {/*1*/}
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design &amp; Website</h3>
                    <span>Figma &amp; React.js</span>
                  </div>
                  <img src="./ICMR-cover.png" alt="" />
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
                    <img src="./ICMR-back.png" alt="" />
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
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design &amp; Development</h3>
                    <span>Figma &amp; React.js</span>
                  </div>
                  <img src="./ar-cover.jpeg" alt="" />
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
                    <img src="./ar-back.png" alt="" />
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
              {/*3*/}
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>UI/UX Design</h3>
                    <span>Figma</span>
                  </div>
                  <img src="./Trip.gif" alt="" />
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
                    <img src="./Trip Planner.png" alt="" />
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
              {/*4*/}
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Password Generator</span>
                  </div>
                  <img src="./Pass.png" alt="" />
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
                    <img src="./Pass.png" alt="" />
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
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Calculator Website</span>
                  </div>
                  <img src="./5 all.png" alt="" />
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
                    <img src="./5 all.png" alt="" />
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
              {/*6*/}
              <div className="img-card-container">
                <div className="img-card">
                  <div className="overlay" />
                  <div className="info">
                    <h3>Website</h3>
                    <span>Temperature-Converter website</span>
                  </div>
                  <img src="./temp back.png" alt="" />
                </div>
                <div className="porfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" />
                    <h3>Website</h3>
                    <img src="./temp back.png" alt="" />
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
        <button className="learn-more" onClick={redirectToNextPage}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">View more </span>
        </button>
      </section>
    </>
  );
};

export default Portfolio;
