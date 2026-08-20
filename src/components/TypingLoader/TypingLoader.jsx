import "./typing-loader.css";

function TypingLoader({ text = "Loading", size = "medium" }) {
  return (
    <div
      className={`merix-typing merix-typing-${size}`}
      role="status"
      aria-label={`${text}, loading`}
    >
      <span>{text}</span>
      <span className="merix-typing-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="merix-typing-cursor" />
    </div>
  );
}

export default TypingLoader;
