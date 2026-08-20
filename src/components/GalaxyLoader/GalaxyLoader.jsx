import "./galaxy-loader.css";

function GalaxyLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-galaxy merix-galaxy-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-galaxy-core" />

      <div className="merix-galaxy-orbit merix-galaxy-orbit-one">
        <span />
        <span />
      </div>

      <div className="merix-galaxy-orbit merix-galaxy-orbit-two">
        <span />
        <span />
      </div>

      <div className="merix-galaxy-orbit merix-galaxy-orbit-three">
        <span />
      </div>
    </div>
  );
}

export default GalaxyLoader;
