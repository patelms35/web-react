import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import About from "./about";
import Skill from "./skill";
import Service from "./service";
import Contact from "./contact";
import Footer from "./Footer";

const Home = () => {
  const myStyle = {
    backgroundImage: "url('./close-btn.png')",
  };
  const back = {
    backgroundImage: "url('./menu-btn.png')",
  };
  // typing
  React.useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "UI/UX Designer",
        "Active Learner",
        "Frontend Developer",
        "YouTuber",
        "Web Designer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  //Website dark/light theme
  React.useEffect(() => {
    const themeBtn = document.querySelector(".theme-btn");

    const getCurrentTheme = () =>
      document.body.classList.contains("dark-theme") ? "dark" : "light";
    const getCurrentIcon = () =>
      themeBtn.classList.contains("sun") ? "sun" : "moon";

    const savedTheme = localStorage.getItem("saved-theme");
    const savedIcon = localStorage.getItem("saved-icon");

    if (savedTheme) {
      document.body.classList[savedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    }

    const handleThemeToggle = () => {
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
    };

    themeBtn.addEventListener("click", handleThemeToggle);

    return () => {
      themeBtn.removeEventListener("click", handleThemeToggle);
    };
  }, []);

  //Scroll to top button
  React.useEffect(() => {
    const scrollTopBtn = document.querySelector(".scrollToTop-btn");

    const handleScroll = () => {
      scrollTopBtn.classList.toggle("active", window.scrollY > 500);
    };

    const handleScrollToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", handleScroll);
    scrollTopBtn.addEventListener("click", handleScrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollTopBtn.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  //Navigation menu items active on page scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-items a[href*=" + id + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav-items a[href*=" + id + "]")
          .classList.remove("active");
      }
    });
  });

  //Responsive navigation menu toggle
  React.useEffect(() => {
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");

    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
      });
    });
  }, []);

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

  // const redirectToNextPage = () => {
  //   window.location.href = "/projects";
  // };

  //Scroll reveal animations
  React.useEffect(() => {
    //Common reveal options to create reveal animations
    ScrollReveal({
      //reset: true,
      distance: "60px",
      duration: 2500,
      delay: 100,
    });

    //Target elements, and specify options to create reveal animations
    ScrollReveal().reveal(
      ".home .info h2, .section-title-01, .section-title-02",
      { delay: 500, origin: "left" }
    );
    ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
      delay: 600,
      origin: "right",
    });
    ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
    ScrollReveal().reveal(".media-icons i, .contact-left li", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
    ScrollReveal().reveal(".home-img, .about-img", {
      delay: 500,
      origin: "bottom",
    });
    ScrollReveal().reveal(".about .description, .contact-right", {
      delay: 600,
      origin: "right",
    });
    ScrollReveal().reveal(".about .professional-list li", {
      delay: 500,
      origin: "right",
      interval: 200,
    });
    ScrollReveal().reveal(
      ".skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2",
      { delay: 700, origin: "left" }
    );
    ScrollReveal().reveal(
      ".experience-card, .service-card, .education, .portfolio .img-card",
      { delay: 800, origin: "bottom", interval: 200 }
    );
    ScrollReveal().reveal("footer .group", {
      delay: 500,
      origin: "top",
      interval: 200,
    });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      {/*=======Scroll to top button=======*/}
      <div className="scrollToTop-btn flex-center">
        <i className="fas fa-arrow-up" />
      </div>
      {/*=======Light/Dark theme button=======*/}
      <div className="theme-btn flex-center">
        <i className="fas fa-moon" />
        <i className="fas fa-sun" />
      </div>
      {/*====notification Button====*/}
      <div className="notification">
        <p> Welcome 👋👋👋</p>
        <span className="notification_progress" />
      </div>
      <header>
        <div className="nav-bar">
          <a href="#" className="logo">
            Mark
          </a>
          <div className="navigation">
            <div className="nav-items">
              <div className="nav-close-btn" style={myStyle}></div>
              <a className="active" href="#home">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="nav-menu-btn" style={back}></div>
        </div>
      </header>

      {/*=======Home section=======*/}
      <section className="home flex-center" id="home">
        <div className="home-container">
          <div className="media-icons">
            <a href="https://www.facebook.com/patel.mark.52">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://instagram.com/patel_mark_7262?igshid=YmMyMTA2M2Y=">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://github.com/patelms35">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.youtube.com/channel/UCTbJyXCrEsNSaubviNQC2tg">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.linkedin.com/in/patelmark6172">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.figma.com/@patelmark">
              <i className="fab fa-figma" />
            </a>
          </div>
          <div className="info">
            <h2>Hi, I am Mark</h2>
            <h3>
              <span className="auto-type" />
            </h3>
            <p>I Create Stunning Website , In Web Design and Development</p>
            <a href="#contact" className="btn">
              Contact Me <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
          <div className="home-img">
            <img src="/mainpick.png" alt="" />
          </div>
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down <i className="fas fa-arrow-down" />
        </a>
      </section>

      {/*=======About Us section=======*/}

      <About />

      {/*=======Skills section=======*/}

      <Skill />

      {/*=======Services section=======*/}

      <Service />

      {/*=======Portfolio section=======*/}

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
        <button className="learn-more">
          <Link to="/projects">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <span className="button-text">View more </span>
          </Link>
        </button>
      </section>

      {/*=======Contact section=======*/}

      <Contact />

      {/*=======Footer=======*/}

      
        {/* Your component JSX */}
        <Footer />

      {/*=======Preloader=======*/}
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};

export default Home;
