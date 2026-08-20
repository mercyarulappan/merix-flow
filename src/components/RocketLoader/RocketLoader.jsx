import "./rocket-loader.css";

function RocketLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-rocket merix-rocket-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-rocket-body">
        <div className="merix-rocket-window" />
        <div className="merix-rocket-fin left" />
        <div className="merix-rocket-fin right" />

        <div className="merix-rocket-flame">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default RocketLoader;
