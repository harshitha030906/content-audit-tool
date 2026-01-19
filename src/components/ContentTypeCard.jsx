export default function ContentTypeCard({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="card"
      style={{cursor:"pointer", textAlign:"center"}}
    >
      <h3 style={{margin:"6px 0"}}>{label}</h3>
    </div>
  );
}
