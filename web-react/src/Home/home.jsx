import React from "react";
import "./home.css";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import About from "./about";
import Skill from "./skill";
import Service from "./service";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

// 1. contact ma form submit karvanu je YT ma jovanu 6

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
          <div className="nav-menu-btn"  style={back}></div>
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

      <Portfolio />

      {/*=======Contact section=======*/}

      <Contact />

      {/*=======Footer=======*/}

      <Footer />

      {/*=======Preloader=======*/}
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};

export default Home;
