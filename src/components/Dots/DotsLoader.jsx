import "./dots-loader.css";
import { getSafeSize, getLoaderStyle } from "../../utils/loaderUtils";

function DotsLoader({ size = "medium", color = "#6366f1", label = "Loading" }) {
  const safeSize = getSafeSize(size);

  return (
    <div
      className={`merix-dots merix-dots-${safeSize}`}
      role="status"
      aria-label={label}
      style={getLoaderStyle(color)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default DotsLoader;
