import "./radar-loader.css";

function RadarLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-radar merix-radar-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-radar-grid">
        <span className="merix-radar-ring ring-one" />
        <span className="merix-radar-ring ring-two" />
        <span className="merix-radar-ring ring-three" />

        <span className="merix-radar-line" />

        <span className="merix-radar-dot dot-one" />
        <span className="merix-radar-dot dot-two" />
        <span className="merix-radar-dot dot-three" />

        <span className="merix-radar-center" />
      </div>
    </div>
  );
}

export default RadarLoader;
