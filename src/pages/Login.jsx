import { useState } from "react";

const API_BASE_URL = "/api/v1"; 

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const errorData = await res.json().catch(() => null);
          throw new Error((errorData && errorData.message) || `Login failed (status ${res.status})`);
        }
        const text = await res.text().catch(() => '');
        throw new Error(text || `Login failed (status ${res.status})`);
      }

      window.location.href = "/upload";

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card" style={{maxWidth:420, margin:"40px auto"}}>
        <h2>Welcome back</h2>
        <p className="small">Login to manage your audits</p>

        <form onSubmit={handleSubmit} style={{marginTop:12}}>
          <input required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="card" style={{width:"100%", padding:10, marginBottom:10}} />
          <input required type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="card" style={{width:"100%", padding:10, marginBottom:12}} />
          <button type="submit" className="btn" style={{width:"100%"}} disabled={loading}>{loading? "Signing in..." : "Login"}</button>
        </form>

        {error && <p style={{color:"red", marginTop:10}}>{error}</p>}

        <p className="small" style={{marginTop:12}}>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}