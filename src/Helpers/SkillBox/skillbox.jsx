import "./skillbox.css";

const SkillBox = ({ logo, skill }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="skill-box">
      <div className="logo-box">{logo}</div>
      <p className="skill-text">{skill}</p>
    </div>
  );
};

export default SkillBox;
