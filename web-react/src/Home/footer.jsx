import React from "react";

const Footer = () => {
  return (
    <>
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
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
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
    </>
  );
};

export default Footer;
