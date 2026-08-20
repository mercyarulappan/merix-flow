import "./equalizer-loader.css";

function EqualizerLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-equalizer merix-equalizer-${size}`}
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

export default EqualizerLoader;
