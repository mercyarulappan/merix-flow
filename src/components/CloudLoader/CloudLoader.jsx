import "./cloud-loader.css";

function CloudLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-cloud merix-cloud-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-cloud-shape">
        <span className="cloud-part one" />
        <span className="cloud-part two" />
        <span className="cloud-part three" />
      </div>

      <div className="merix-cloud-rain">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default CloudLoader;
