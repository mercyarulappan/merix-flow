import "./orbit-dots-loader.css";

function OrbitDotsLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-orbit-dots merix-orbit-dots-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default OrbitDotsLoader;
