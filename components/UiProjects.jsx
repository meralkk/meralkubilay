import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import shopping from '../media/shopping.png';

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
           
            {/* Project 1 */}

            {/* Project 1 */}

            <div className="about-content">
              <div className="img-side">
                <a
                  href="https://gemini-clone-meralkk.vercel.app/"
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
                          href="a101-shopping-meralkk.vercel.app"
                        >
                           See more &rarr;
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


            <span class="spacer-line"></span>

          </div>
        </div>
      </section>
    </>
  );
};

export default UiProjects;
