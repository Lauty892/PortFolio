import "./works.css";
import WorkCards from "../../Helpers/WorkCards/workcards";

const Works = () => {
  return (
    <div id="works" className="works">
      <div className="works-container">
        {/* heading */}
        <div className="works-heading">
          <h3 className="works-title"> Works</h3>
          <span className="works-divider" />
        </div>

        {/*content*/}
        <p data-aos="fade-up" className="works-description">
          Here are some of my works.
        </p>
        <div className="works-content">
          <WorkCards />
        </div>
      </div>
    </div>
  );
};

export default Works;
