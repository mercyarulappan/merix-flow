import "./orbit-loader.css";

function OrbitLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-orbit merix-orbit-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-orbit-center" />

      <div className="merix-orbit-ring">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default OrbitLoader;
