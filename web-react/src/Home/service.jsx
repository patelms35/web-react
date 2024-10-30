import React from "react";

const Service = () => {
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

  return (
    <>
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
                      Web development is the creation and maintenance of
                      websites and web applications, focusing on both visual
                      design (frontend) and server-side functionality (backend).
                      It includes coding in languages like HTML, CSS, and
                      JavaScript, managing databases, and deploying sites on the
                      web, creating everything from simple sites to complex
                      applications.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" /> Web application
                        Design
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> Front-End
                        Development
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
    </>
  );
};

export default Service;
