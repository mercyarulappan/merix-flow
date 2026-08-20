import "./sun-loader.css";

function SunLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-sun merix-sun-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-sun-rays">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="merix-sun-core" />
    </div>
  );
}

export default SunLoader;
