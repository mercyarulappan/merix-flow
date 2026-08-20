import "./morph-loader.css";

function MorphLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-morph merix-morph-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-morph-blob" />

      <div className="merix-morph-dot dot-one" />
      <div className="merix-morph-dot dot-two" />
      <div className="merix-morph-dot dot-three" />
    </div>
  );
}

export default MorphLoader;
