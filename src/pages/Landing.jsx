import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Landing(){
  return (
    <>
      <Header />
      <div className="container">
        <div className="card" style={{textAlign:"center"}}>
          <h2>Hello Creator! 👋</h2>
          <p className="small">Audit your content quickly — written, visual, audio or interactive.</p>
          <div style={{marginTop:18}}>
            <Link to="/login" className="btn">Get started</Link>
          </div>
        </div>
      </div>
    </>
  );
}