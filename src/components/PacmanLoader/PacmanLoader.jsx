import "./pacman-loader.css";

function PacmanLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-pacman merix-pacman-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-pacman-character" />

      <div className="merix-pacman-dots">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default PacmanLoader;
