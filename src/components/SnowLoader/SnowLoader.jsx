import "./snow-loader.css";

function SnowLoader({ size = "medium" }) {
  const flakes = Array.from({ length: 9 });

  return (
    <div
      className={`merix-snow merix-snow-${size}`}
      role="status"
      aria-label="Loading"
    >
      {flakes.map((_, index) => (
        <span
          key={index}
          style={{
            "--left": `${5 + index * 11}%`,
            "--delay": `${index * 0.18}s`,
            "--duration": `${1.4 + (index % 3) * 0.3}s`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

export default SnowLoader;
