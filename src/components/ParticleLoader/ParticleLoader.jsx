import "./particle-loader.css";

function ParticleLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-particle merix-particle-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-particle-core" />

      <div className="merix-particle-field">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default ParticleLoader;
