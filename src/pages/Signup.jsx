import { useState } from "react";

const API_BASE_URL = "/api/v1"; 

export default function Signup(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const errorData = await res.json().catch(() => null);
          throw new Error((errorData && errorData.message) || `Signup failed (status ${res.status})`);
        }
        const text = await res.text().catch(() => '');
        throw new Error(text || `Signup failed (status ${res.status})`);
      }
      
      alert("Account created. Please check email and then login.");
      window.location.href = "/login";

    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card" style={{maxWidth:420, margin:"40px auto"}}>
        <h2>Create account</h2>
        <form onSubmit={handle} style={{marginTop:12}}>
          <input required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="card" style={{width:"100%", padding:10, marginBottom:10}} />
          <input required type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="card" style={{width:"100%", padding:10, marginBottom:12}} />
          <button className="btn" style={{width:"100%"}} disabled={loading}>{loading? "Creating..." : "Sign up"}</button>
        </form>
        <p className="small" style={{marginTop:12}}>Already have account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}