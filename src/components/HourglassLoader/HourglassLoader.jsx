import "./hourglass-loader.css";

function HourglassLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-hourglass merix-hourglass-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-hourglass-frame">
        <div className="merix-hourglass-top">
          <span />
        </div>

        <div className="merix-hourglass-neck">
          <i />
        </div>

        <div className="merix-hourglass-bottom">
          <span />
        </div>
      </div>
    </div>
  );
}

export default HourglassLoader;
