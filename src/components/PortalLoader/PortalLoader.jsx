import "./portal-loader.css";

function PortalLoader({ size = "medium" }) {
  return (
    <div
      className={`merix-portal merix-portal-${size}`}
      role="status"
      aria-label="Loading"
    >
      <div className="merix-portal-ring ring-one" />
      <div className="merix-portal-ring ring-two" />
      <div className="merix-portal-ring ring-three" />

      <div className="merix-portal-core" />

      <div className="merix-portal-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default PortalLoader;
