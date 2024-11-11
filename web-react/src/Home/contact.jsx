import React from "react";
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7a0f3de7-62e8-4426-a00a-e5c609fbba9d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
    }
  };

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
              <form action="" className="contact-form" onSubmit={onSubmit}>
                <div className="first-row">
                  <input type="text" placeholder="Name" name="Name" required />
                </div>
                <div className="second-row">
                  <input type="email" placeholder="Email" name="Email" required />
                  <input type="text" placeholder="Subject" name="Subject" required />
                </div>
                <div className="third-row">
                  <textarea
                    name="Message"
                    id=""
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
