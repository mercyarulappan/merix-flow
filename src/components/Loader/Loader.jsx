import Spinner from "../Spinner/Spinner";
import DotsLoader from "../Dots/DotsLoader";
import PulseLoader from "../Pulse/PulseLoader";

import "./loader.css";

function Loader({
  variant = "spinner",
  size = "medium",
  color = "#6366f1",
  label,
}) {
  switch (variant) {
    case "dots":
      return <DotsLoader size={size} color={color} label={label} />;

    case "pulse":
      return <PulseLoader size={size} color={color} label={label} />;

    case "spinner":
    default:
      return <Spinner size={size} color={color} label={label} />;
  }
}

export default Loader;
