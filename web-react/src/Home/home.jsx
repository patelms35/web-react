import React from "react";
import "./home.css";
import ScrollReveal from "scrollreveal";

// 1 .typing Animation baki
// 2. portfolio ma view more nu section baki
// 3. contact ma form submit karvanu je YT ma jovanu 6
// 4. phone ma menu button ma click karva ma problem 6

const Home = () => {
  function redirectToNextPage() {
    window.location.href = "https://patelmark.in/";
  }

  //Services section - Modal
  React.useEffect(() => {
    const serviceModals = document.querySelectorAll(".service-modal");
    const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
    const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

    var modal = function (modalClick) {
      serviceModals[modalClick].classList.add("active");
    };

    learnmoreBtns.forEach((learnmoreBtn, i) => {
      learnmoreBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalCloseBtns.forEach((modalCloseBtn) => {
      modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
          modalView.classList.remove("active");
        });
      });
    });

    return () => {
      learnmoreBtns.forEach((learnmoreBtn, i) => {
        learnmoreBtn.removeEventListener("click", () => {
          modal(i);
        });
      });

      modalCloseBtns.forEach((modalCloseBtn) => {
        modalCloseBtn.removeEventListener("click", () => {
          serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
          });
        });
      });
    };
  }, []);

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
              <div className="nav-close-btn"></div>
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
          <div className="nav-menu-btn"></div>
        </div>
      </header>
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

      {/*=======Skills section=======*/}
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

      {/*=======Services section=======*/}
      <section className="services section" id="services">
        <div className="container flex-center">
          <h1 className="section-title-01">Services</h1>
          <h2 className="section-title-02">Services</h2>
          <div className="content">
            <div className="services-description">
              <h3>What I provide</h3>
            </div>
            <ul className="service-list">
              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-pencil-ruler" />
                  <h3>UI/UX Design</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right" />
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn" />
                    <h3>UI/UX Design</h3>
                    <h4>What is UI/UX ?</h4>
                    <p>
                      UX stands for user experience, while UI is short for User
                      Interface. Both these aspects are intertwined to produce
                      the desired results. UI/UX Design is the process of
                      designing the interface, optimizing navigation, and
                      showing relevant features of a product or service.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" /> Estabilsh The
                        Right UX Processes
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Create Exceptional
                        User Experiences
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Discover New
                        Business opprtunities
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Wireframe design
                        for UX design
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-file-code" />
                  <h3>
                    Web <br />
                    Development
                  </h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right" />
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn" />
                    <h3>Web Development</h3>
                    <h4>What is Web Development ?</h4>
                    <p>
                    Web development is the creation and maintenance of websites and web applications, focusing on both visual design (frontend) and server-side functionality (backend). It includes coding in languages like HTML, CSS, and JavaScript, managing databases, and deploying sites on the web, creating everything from simple sites to complex applications.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" /> Web application
                        Design
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Front-End Development
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Testing
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-photo-video" />
                  <h3>PowerPoint Presentation</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right" />
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn" />
                    <h3>PowerPoint Presentation</h3>
                    <h4>What is a PowerPoint presentation or PPT?</h4>
                    <p>
                      {" "}
                      A combination of various slides depicting a graphical and
                      visual interpretation of data, to present information in a
                      more creative and interactive manner
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" /> Create
                        presentations from scratch or a template.
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Animated
                        PowerPoint presentation
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> 3D PowerPoint
                        presentation
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-align-left" />
                  <h3>Content Writing</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right" />
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn" />
                    <h3>Content Writing</h3>
                    <h4>What is Content Writing?</h4>
                    <p>
                      Content writing is the process of planning, writing and
                      editing web content, typically for digital marketing
                      purposes.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" /> Web content
                        writing
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Copywriting
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Blog writing for
                        websites
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Social media
                        content
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
        <button className="learn-more" onClick={redirectToNextPage}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">View more </span>
        </button>
      </section>

      {/*=======Contact section=======*/}
      <section className="contact section" id="contact">
        <div className="container flex-center">
          <h1 className="section-title-01">Contact Me</h1>
          <h2 className="section-title-02">Contact Me</h2>
          <div className="content">
            <div className="contact-left">
              <h2>Let&apos;s discuss your project</h2>
              <ul className="contact-list">
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-phone" /> Phone
                  </h3>
                  <span>+900-003-0004</span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-envelope" /> Email Address
                  </h3>
                  <span>
                    <a href="mailto:patelmark5330@gmail.com">
                      patelmark5330@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-map-marker-alt" /> Address
                  </h3>
                  <span>Vadodara,Gujarat,India</span>
                </li>
              </ul>
            </div>
            <div className="contact-right">
              <p>
                I&apos;m always open to discussing product
                <br />
                <span>design work or partnerships.</span>
              </p>
              <form
                onSubmit="sendEmail(); reset(); return false;"
                action=""
                className="contact-form"
              >
                <div className="first-row">
                  <input type="text" placeholder="Name" id="name" />
                </div>
                <div className="second-row">
                  <input type="email" placeholder="Email" id="email" />
                  <input type="text" placeholder="Subject" id="subject" />
                </div>
                <div className="third-row">
                  <textarea
                    name=""
                    id="message"
                    rows={7}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button className="btn" type="submit">
                  Send Message <i className="fas fa-paper-plane" />
                </button>
              </form>
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
                <a href="#Portfolio">Project</a>
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
              <li>
                {" "}
                <a href="https://www.figma.com/@patelmark">
                  <i className="fab fa-figma" />
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

      {/*=======Preloader=======*/}
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};

export default Home;
