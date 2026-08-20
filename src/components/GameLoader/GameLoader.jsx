import "./game-loader.css";

function GameLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-game merix-game-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-game-controller">
        <div className="merix-game-dpad">
          <span className="dpad-horizontal" />
          <span className="dpad-vertical" />
        </div>

        <div className="merix-game-buttons">
          <span className="button-a">A</span>
          <span className="button-b">B</span>
        </div>

        <div className="merix-game-center">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default GameLoader;
