import "./heart-loader.css";

function HeartLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-heart merix-heart-${size}`}
      role="status"
      aria-label="Loading"
    >
      <span className="merix-heart-shape">♥</span>
    </div>
  );
}

export default HeartLoader;
