import "./bubbles-loader.css";

function BubblesLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-bubbles merix-bubbles-${size}`}
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

export default BubblesLoader;
