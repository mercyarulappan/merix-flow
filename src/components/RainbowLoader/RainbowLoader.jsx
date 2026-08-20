import "./rainbow-loader.css";

function RainbowLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-rainbow merix-rainbow-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-rainbow-ring" />
    </div>
  );
}

export default RainbowLoader;
