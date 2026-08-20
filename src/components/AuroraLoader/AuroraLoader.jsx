import "./aurora-loader.css";

function AuroraLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-aurora merix-aurora-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-aurora-glow merix-aurora-glow-one" />
      <div className="merix-aurora-glow merix-aurora-glow-two" />
      <div className="merix-aurora-glow merix-aurora-glow-three" />

      <div className="merix-aurora-core" />
    </div>
  );
}

export default AuroraLoader;
