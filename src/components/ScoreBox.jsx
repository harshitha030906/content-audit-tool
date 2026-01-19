export default function ScoreBox({score}) {
  return (
    <div className="card" style={{textAlign:"center"}}>
      <div style={{fontSize:28,fontWeight:700}}>{score}/100</div>
      <div className="small">Final Score</div>
    </div>
  );
}
