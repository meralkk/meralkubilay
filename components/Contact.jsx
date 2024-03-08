import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Let's connect! Reach out anytime. 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Berlin, Germany</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:stefan.topallovic@gmail.com">
                    meralkeskinn@gmail.com
                  </a>
                  
                </div>
                <br />
                  <br />
                  <br />
                  <br />
                  <br />

              </div>
              <br />
                  <br />
                  <br />
                  <br />
                  <br />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
