import "./neon-loader.css";

function NeonLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-neon merix-neon-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-neon-track">
        <div className="merix-neon-glow" />
      </div>
    </div>
  );
}

export default NeonLoader;
