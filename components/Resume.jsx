import React from "react";

const Resume = () => {
  return (
    <>
      <section id="resume" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>Resume</p>
              <h3>
                You can download my resume here.👇
                <br /> <br />
                <iframe src="/public/MeralKK_resume.pdf" width="100%" height="400px"></iframe>

              </h3>

            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
