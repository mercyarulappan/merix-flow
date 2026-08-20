import "./loading-button.css";

function LoadingButton({
  children,
  loading = false,
  disabled = false,
  type = "button",
  color = "#6366f1",
  size = "medium",
  loadingText = "Loading...",
  onClick,
}) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type}
      className={`merix-button merix-button-${size}`}
      disabled={isDisabled}
      onClick={onClick}
      aria-busy={loading}
      style={{
        "--merix-button-color": color,
      }}
    >
      {loading ? (
        <>
          <span className="merix-button-spinner" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default LoadingButton;
