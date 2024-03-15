import AboutImg from "../media/about.webp";
import RoundedText from "../media/text2.svg";
import WorkingEmoji from "../media/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Hey !  👋😊
              </h4>
              <p>
                My name is Meral, and I'm a Jr. Frontend Developer and UI Designer. My passion
                is to create and develop a clean UI/UX for users.
                <br />
                <br />
                I love to create responsive, 
                interactive websites and make web applications easy to use. 
                I'm all about adapting, collaborating, and coming up with 
                fresh, practical ideas to make things work better, especially 
                when working in a team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
