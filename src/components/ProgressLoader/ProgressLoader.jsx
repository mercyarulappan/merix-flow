import "./progress-loader.css";

function ProgressLoader({
  value = 0,
  max = 100,
  size = "medium",
  color = "#6366f1",
  showLabel = false,
  label,
}) {
  const safeMax = max > 0 ? max : 100;

  const safeValue = Math.min(Math.max(value, 0), safeMax);

  const percentage = (safeValue / safeMax) * 100;

  return (
    <div
      className={`merix-progress merix-progress-${size}`}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin="0"
      aria-valuemax={safeMax}
      aria-label={label || "Loading progress"}
    >
      <div className="merix-progress-track">
        <div
          className="merix-progress-bar"
          style={{
            width: `${percentage}%`,
            "--merix-progress-color": color,
          }}
        />
      </div>

      {showLabel && (
        <span className="merix-progress-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
}

export default ProgressLoader;
