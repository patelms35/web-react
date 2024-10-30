import React from "react";

const Contact = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
