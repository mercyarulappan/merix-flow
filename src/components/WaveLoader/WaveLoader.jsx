import "./wave-loader.css";

function WaveLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-wave merix-wave-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default WaveLoader;
