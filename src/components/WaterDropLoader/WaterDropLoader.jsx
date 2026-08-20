import "./water-drop-loader.css";

function WaterDropLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-water-drop merix-water-drop-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-drop" />

      <div className="merix-ripple">
        <span />
      </div>
    </div>
  );
}

export default WaterDropLoader;
