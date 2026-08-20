import "./fire-loader.css";

function FireLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-fire merix-fire-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default FireLoader;
