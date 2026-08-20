import "./matrix-loader.css";

function MatrixLoader({ size = "medium" }) {
  const columns = [
    ["1", "0", "1", "1"],
    ["0", "1", "0", "1"],
    ["1", "1", "0", "0"],
    ["0", "1", "1", "0"],
    ["1", "0", "1", "0"],
  ];

  return (
    <div
      className={`merix-matrix merix-matrix-${size}`}
      role="status"
      aria-label="Loading"
    >
      {columns.map((column, index) => (
        <div
          className="merix-matrix-column"
          key={index}
          style={{
            "--delay": `${index * 0.18}s`,
          }}
        >
          {column.map((char, charIndex) => (
            <span key={charIndex}>{char}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MatrixLoader;
