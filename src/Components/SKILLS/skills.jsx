import SkillBox from "../../Helpers/SkillBox/skillbox";
import "./skills.css";

import {
  SiExpress,
  SiSequelize,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        {/* heading */}
        <div className="skills-heading">
          <h3 className="skills-title"> My Skills</h3>
          <span className="skills-divider" />
        </div>

        {/*content*/}
        <p data-aos="fade-up" className="skills-description">
          Here are my skills.
        </p>
        <div className="skills-content">
          <div className="skills-right">
            <div className="skills-first2">
              <SkillBox
                className="skills-skill-box"
                logo={<IoLogoNodejs />}
                skill={"Node Js"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiSequelize />}
                skill={"Sequelize"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiMongodb />}
                skill={"MongoDB"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiRedux />}
                skill={"Redux"}
              />
            </div>
            <div className="skills-last2">
              <SkillBox
                className="skills-skill-box"
                logo={<SiExpress />}
                skill={"Express Js"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiPostgresql />}
                skill={"Postgre SQL"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiTypescript />}
                skill={"Typescript"}
              />
              <SkillBox
                className="skills-skill-box"
                logo={<SiReact />}
                skill={"React"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
