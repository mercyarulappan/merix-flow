import "./meteor-loader.css";

function MeteorLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-meteor merix-meteor-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default MeteorLoader;
