import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Validate state
  if (!state)
    return (
      <div className="container">
        <h2>No Results Found</h2>
        <button className="btn" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );

  const analysis = state.analysis;
  if (!analysis) return <p>Loading results...</p>;

  console.log("🔹 Backend analysis object:", analysis);

  // Normalize metrics from backend
  const normalizedMetrics = {
    seo: analysis.metrics.seo,
    reliability: analysis.metrics.human,
    serp: analysis.metrics.aeo,
    readability: analysis.metrics.readability,
    structure: analysis.metrics.structure,
  };

  const keywords = analysis.keywords?.keywords || [];
  const length = analysis.length || 0;
  const timestamp = analysis.timestamp || "";

  return (
    <div className="container">
      <h2 className="title">Audit Results</h2>

      {/* Keywords */}
      {keywords.length > 0 && (
        <div className="card">
          <h3>Target Keywords</h3>
          <ul className="list">
            {keywords.map((kw, idx) => (
              <li key={idx}>{kw}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="metrics-grid-row">
        {Object.entries(normalizedMetrics).map(([metricName, metricData]) => (
          <div key={metricName} className="card score-card">
            <h3 className="score-title">{metricName.toUpperCase()}</h3>
            <p className="score-value">{metricData?.score ?? "N/A"}</p>

            <h4 style={{ marginTop: "12px" }}>Major Issues</h4>
            {metricData?.issues?.length ? (
              <ul className="list">
                {metricData.issues.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}

            <h4 style={{ marginTop: "12px" }}>Top Recommendations</h4>
            {metricData?.recommendations?.length ? (
              <ul className="list">
                {metricData.recommendations.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div>
        ))}
      </div>

      {/* Metadata */}
      <p style={{ marginTop: 20, fontSize: "0.9em", color: "#555" }}>
        Content Length: {length} | Timestamp: {timestamp}
      </p>

      {/* Go Back Button */}
      <button className="btn" style={{ marginTop: 20 }} onClick={() => navigate("/")}>
        Run Another Audit
      </button>
    </div>
  );
}




