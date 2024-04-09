import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./hero.css";
import Resume from "../../Extras/cv.pdf";
import Lauty from "../../Extras/LautyIMG.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-container">
        <div className="left" data-aos="fade-up">
          <h2>Hello, I am Lautaro Bascoy</h2>

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Therapeutic Aide",
              2000,
              "Full Stack",
              2000,
              "",
            ]}
            speed={30}
            wrapper="h1"
            repeat={Infinity}
            className="Text"
          />

          <p data-aos="fade-up" className="description">
            I&apos;m a Junior FullStack Developer, graduated from &quot;Soy
            Henry&quot;
          </p>

          <div data-aos="fade-up" className="buttons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/lautaro-bascoy-34586126a/"
            >
              <span> Hire Me</span>
            </a>
            <a href={Resume} download>
              <div>
                Resume <FiDownload />
              </div>
            </a>
          </div>

          <div className="icons flex mt-5">
            <ul data-aos="fade-up" data-aos-duration="1500">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Lauty892"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/lautaro-bascoy-34586126a/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img
              data-aos="fade-up"
              src={Lauty}
              alt="me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
