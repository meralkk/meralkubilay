import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Mrlsmdb from "../media/mrlsmdb.jpg";
import edusity from "../media/edusity.jpg";
import gemini from "../media/gemini_clone.jpg";
import amazon from "../media/amazon-clone.jpg";

function Projects() {
  return (
    <>
      <section id="projects" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>Projects</p>
              <h3>Every project is a unique development journey 🧩</h3>
            </div>
            <span class="spacer-line"></span>

            {/* Project 1 */}

            <div className="about-content">
              <div className="img-side">
                <a
                  href="https://gemini-clone-meralkk.vercel.app/"
                  target="_blank"
                >
                  <img src={gemini} alt="mee" className="img-side__main-img" />
                </a>
              </div>
              <div className="project-title">
                <h3>Gemini AI Clone 🤖</h3>
                <div className="text-side">
                  <p>
                    This website is a Gemini AI clone, where users can explore
                    the capabilities of artificial intelligence by searching for
                    information using the Gemini API. It offers functionalities
                    like real-time search results, a responsive design for
                    seamless navigation and infinite scrolling for continuous
                    exploration.
                    <div className="project-text">
                      <br />
                      <p>
                        React<span class="spacer"></span>CSS
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="github"
                          rel="noreferrer"
                          target="_blank"
                          href="https://github.com/meralkk/gemini-clone.git"
                        >
                          Code <IconBrandGithub />
                        </a>

                        <span class="spacer"></span>

                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://gemini-clone-meralkk.vercel.app/"
                        >
                          Live Demo <IconExternalLink />
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

            {/* Project 2 */}

            <div className="about-content">
              <div className="project-title">
                <h3>Edusity Education 🧑‍🎓</h3>
                <div className="text-side">
                  <p>
                    This website is designed to showcase educational programs
                    and campus life, offering users an intuitive navigation
                    experience to explore degrees, read testimonials, and view
                    gallery images. It utilizes modern web technologies for a
                    responsive, user-friendly interface, ensuring information on
                    educational paths and student experiences is easily
                    accessible.
                    <div className="project-text">
                      <br />
                      <p>
                        React<span class="spacer"></span>CSS
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="github"
                          rel="noreferrer"
                          target="_blank"
                          href="https://github.com/meralkk/edusity.git"
                        >
                          Code <IconBrandGithub />
                        </a>

                        <span class="spacer"></span>

                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://edusity-edu.vercel.app/"
                        >
                          Live Demo <IconExternalLink />
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <div className="img-side">
                <a href="https://edusity-edu.vercel.app/" target="_blank">
                  <img src={edusity} alt="mee" className="img-side__main-img" />
                </a>
              </div>
            </div>

            <span class="spacer-line"></span>

            <hr />
            <span class="spacer-line"></span>

            {/* Project 3 */}
            <div className="about-content">
              <div className="img-side">
                <a
                  href="https://amazon-clone-meralkk.vercel.app/"
                  target="_blank"
                >
                  <img src={amazon} alt="mee" className="img-side__main-img" />
                </a>
              </div>
              <div className="project-title">
                <h3>Amazon Clone 🛒</h3>
                <div className="text-side">
                  <p>
                  This website is a clone of Amazon based on its design. 
                  It offers a platform that allows users to discover products, 
                  read reviews and shop online. Developed using HTML, CSS and 
                  JavaScript.
                    <div className="project-text">
                      <br />
                      <p>
                        HTML<span class="spacer"></span> CSS
                        <span class="spacer"></span>Javascript
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="github"
                          rel="noreferrer"
                          target="_blank"
                          href="https://github.com/meralkk/amazon-clone"
                        >
                          Code <IconBrandGithub />
                        </a>

                        <span class="spacer"></span>

                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://amazon-clone-meralkk.vercel.app/"
                        >
                          Live Demo <IconExternalLink />
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

            {/* Project 4 */}

            <div className="about-content">
              <div className="project-title">
                <h3>Movie Database 🍿</h3>
                <div className="text-side">
                  <p>
                    This website is an online movie database where users can
                    find information about film ratings, descriptions, and
                    release dates. It's a straightforward resource for anyone
                    interested in exploring movie details and discovering new
                    favorites.
                    <div className="project-text">
                      <br />
                      <p>
                        React<span class="spacer"></span>SCSS
                      </p>
                    </div>
                    <div className="project-text">
                      <br />
                      <p>
                        <a
                          aria-label="github"
                          rel="noreferrer"
                          target="_blank"
                          href="https://github.com/meralkk/mrlsmdb.git"
                        >
                          Code <IconBrandGithub />
                        </a>

                        <span class="spacer"></span>

                        <a
                          aria-label="vercel"
                          rel="noreferrer"
                          target="_blank"
                          href="https://mrlsmdb.vercel.app/"
                        >
                          Live Demo <IconExternalLink />
                        </a>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <div className="img-side">
                <a href="https://mrlsmdb.vercel.app/" target="_blank">
                  <img src={Mrlsmdb} alt="mee" className="img-side__main-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
