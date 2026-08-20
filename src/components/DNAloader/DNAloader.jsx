import "./dna-loader.css";

function DNAloader({ size = "medium" }) {
  return (
    <div
      className={`merix-dna merix-dna-${size}`}
      role="status"
      aria-label="Loading"
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          className="merix-dna-step"
          key={index}
          style={{
            "--delay": `${index * 0.12}s`,
          }}
        >
          <span className="merix-dna-left" />
          <span className="merix-dna-bar" />
          <span className="merix-dna-right" />
        </div>
      ))}
    </div>
  );
}

export default DNAloader;
