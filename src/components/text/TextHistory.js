import Button from "../common/Button";

export default function TextHistory({ history, restore }) {
  if (!history.length) return null;

  return (
    <div className="mb-3 border p-2 rounded">
      <h6>History</h6>
      <ul className="list-unstyled mb-0">
        {history.map((item, idx) => (
          <li key={idx} className="mb-1 d-flex justify-content-between">
            <span className="text-truncate" style={{ maxWidth: "70%" }}>
              {item.slice(0, 50)}
              {item.length > 50 ? "..." : ""}
            </span>
            <Button size="sm" variant="secondary" onClick={() => restore(idx)}>
              Restore
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
