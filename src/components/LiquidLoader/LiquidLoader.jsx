import "./liquid-loader.css";

function LiquidLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-liquid merix-liquid-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-liquid-blob" />
    </div>
  );
}

export default LiquidLoader;
