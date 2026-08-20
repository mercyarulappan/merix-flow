import "./flower-loader.css";

function FlowerLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-flower merix-flower-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-flower-petals">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="merix-flower-center" />
    </div>
  );
}

export default FlowerLoader;
