import "./loading-overlay.css";

function LoadingOverlay({
  visible = true,
  text = "Loading...",
  color = "#6366f1",
  blur = true,
}) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`merix-overlay ${blur ? "merix-overlay-blur" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="merix-overlay-content">
        <div
          className="merix-overlay-spinner"
          style={{
            "--merix-loader-color": color,
          }}
        />

        {text && <span className="merix-overlay-text">{text}</span>}
      </div>
    </div>
  );
}

export default LoadingOverlay;
