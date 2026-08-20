import "./loading-card.css";

function LoadingCard({
  loading = false,
  children,
  width = "320px",
  height = "180px",
  borderRadius = "12px",
}) {
  return (
    <div
      className="merix-loading-card"
      style={{
        width,
        borderRadius,
      }}
    >
      {loading ? (
        <div className="merix-loading-card-skeleton">
          <div
            className="merix-loading-card-image"
            style={{
              height,
              borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            }}
          />

          <div className="merix-loading-card-content">
            <div className="merix-loading-card-line merix-loading-card-title" />
            <div className="merix-loading-card-line" />
            <div className="merix-loading-card-line merix-loading-card-short" />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default LoadingCard;
