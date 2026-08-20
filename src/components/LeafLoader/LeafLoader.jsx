import "./leaf-loader.css";

function LeafLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-leaf merix-leaf-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default LeafLoader;
