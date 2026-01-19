import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Upload() {
  const [content, setContent] = useState(""); 
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value ?? "");
  };

  const start = async () => {
    if (!content.trim()) return alert("Please enter text content or a URL to audit.");

    setLoading(true);

    try {
      const isUrl = content.startsWith('http://') || content.startsWith('https://');
      
      const payload = isUrl 
        ? JSON.stringify({ url: content })
        : JSON.stringify({ text: content });

      const res = await fetch("http://localhost:3005/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: payload,
      });

      if (!res.ok) throw new Error(`Analysis failed (${res.status})`);

      const analysis = await res.json();

      console.log("analysis from server", analysis);
      navigate("/results", { state: { analysis } });

    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Audit Content</h2>
      <p className="small" style={{marginBottom: '20px'}}>
        Paste text content or enter a website URL below for auditing.
      </p>

      <div className="card">
        {/* Text area */}
        <textarea 
          value={content}
          onChange={handleContentChange}
          placeholder="Paste content or enter URL here (e.g., https://example.com/article)"
          rows={10}
          style={{
            width: "100%", 
            padding: "10px", 
            marginBottom: "15px", 
            border: "1px solid #e6e9ee", 
            borderRadius: "8px",
            resize: "vertical",
            fontFamily: "inherit"
          }}
        />

        <div style={{ marginTop: 12 }}>
          <button className="btn" onClick={start} disabled={loading}>
            {loading ? "Processing..." : "Start Audit"}
          </button>
        </div>
      </div>

      {loading && <Loader />}
    </div>
  );
}