import "./magic-loader.css";

function MagicLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-magic merix-magic-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-magic-ring">
        <span />
        <span />
        <span />
      </div>

      <div className="merix-magic-core" />

      <div className="merix-magic-sparks">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export default MagicLoader;
