import "./progressbar.css";

const ProgressBar = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="progress-container">
      <div className="progress-header">
        <p className="progress-text">
          {logo}
          {name}
        </p>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{
              width: `${value}%`,
              animation: `progress-animation ${duration}s linear`,
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
