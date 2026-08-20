import "./spinner.css";
import { getSafeSize, getLoaderStyle } from "../../utils/loaderUtils";


function Spinner({
  size = "medium",
  variant = "default",
  speed = "normal",
  color = "#6366f1",
  label = "Loading",
}) {
  const safeSize = getSafeSize(size);

  return (
    <div
      className={`merix-spinner merix-spinner-${safeSize} merix-spinner-${variant} merix-spinner-${speed}`}
      role="status"
      aria-label={label}
      style={getLoaderStyle(color)}
    >
      <span className="merix-spinner-circle" />
    </div>
  );
}

export default Spinner;