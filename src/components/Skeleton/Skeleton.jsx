import "./skeleton.css";

function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "6px",
  animation = "pulse",
}) {
  return (
    <span
      className={`merix-skeleton merix-skeleton-${animation}`}
      style={{
        width,
        height,
        borderRadius,
      }}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
