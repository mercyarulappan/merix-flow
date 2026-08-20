import "./moon-loader.css";

function MoonLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-moon merix-moon-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-moon-shape" />

      <div className="merix-moon-stars">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default MoonLoader;
