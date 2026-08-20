import Loader from "../Loader/Loader";

import "./loading-state.css";

function LoadingState({
  loading = false,
  error = null,
  children,
  variant = "spinner",
  loadingText = "Loading...",
  errorMessage = "Something went wrong.",
  onRetry,
}) {
  if (loading) {
    return (
      <div className="merix-loading-state">
        <Loader variant={variant} />

        {loadingText && (
          <p className="merix-loading-state-text">{loadingText}</p>
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="merix-loading-state merix-loading-state-error"
        role="alert"
      >
        <p className="merix-loading-state-error-message">{errorMessage}</p>

        {onRetry && (
          <button
            className="merix-loading-state-retry"
            onClick={onRetry}
            type="button"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  return children;
}

export default LoadingState;
