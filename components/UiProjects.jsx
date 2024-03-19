import React from "react";
import medbuddy from '../media/medbuddy_thumbnail.png';
import shopping from '../media/shopping.png'

const UiProjects = () => {
  return (
    <>
      <section id="uiprojects" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>UI Projects</p>
              <h3>
                Each design is like a colorful picture of imagination and ideas
                🎨
              </h3>
            </div>
            <span class="spacer-line"></span>
           
            {/* Project 1 / A101*/}
            <div className="about-content">
              <div className="img-side">
                <a
                  href="https://a101-shopping-meralkk.vercel.app/"
                  target="_blank"
                >
                  <img src={shopping} alt="mee" className="img-side__main-img" />
                </a>
              </div>
              <div className="project-title">
                <h3>A101 Kapida Online Grocery 
                  <br /> Shopping App UX/UI CASE STUDY</h3>
                <div className="text-side">
                  <p>
                  A101 online shopping is an application that allows products such as food, beverage, cleaning products to be ordered online and delivered to the address.I prepared this study in line with Userspots' 6-week training. My role here is to prepare both UX and UI design.
                    <div className="project-text">
                      <br />
                      <p>
                      🛠️ Figma / Miro
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://a101-shopping-meralkk.vercel.app/"
                        >
                           See the project &rarr;
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <span class="spacer-line"></span>
            <hr />
            <span class="spacer-line"></span>

            {/* Project 2 / Medbuddy*/}
            <div className="about-content">
              <div className="img-side">
                <a
                  href="https://medbuddy-meralkk.vercel.app/"
                  target="_blank"
                >
                  <img src={medbuddy} alt="mee" className="img-side__main-img" />
                </a>
              </div>
              <div className="project-title">
                <h3>Medbuddy Take Medicine App
                  <br /> UI Design Project</h3>
                <div className="text-side">
                  <p>
                  Medbuddy application is used by caregivers and those who do not want to miss their medication hours. Medication hours are tracked with this application.
                    <div className="project-text">
                      <br />
                      <p>
                      🛠️ Figma / Illustrator
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://medbuddy-meralkk.vercel.app"
                        >
                           See the project &rarr;
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <span class="spacer-line"></span>

          </div>
        </div>
      </section>
    </>
  );
};

export default UiProjects;
