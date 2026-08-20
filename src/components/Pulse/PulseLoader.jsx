import "./pulse-loader.css";
import { getSafeSize, getLoaderStyle } from "../../utils/loaderUtils";

function PulseLoader({
  size = "medium",
  color = "#6366f1",
  label = "Loading",
}) {
  const safeSize = getSafeSize(size);

  return (
    <div
      className={`merix-pulse merix-pulse-${safeSize}`}
      role="status"
      aria-label={label}
      style={getLoaderStyle(color)}
    >
      <span />
    </div>
  );
}

export default PulseLoader;
