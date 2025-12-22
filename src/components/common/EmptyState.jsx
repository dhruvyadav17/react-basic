export default function EmptyState({
  message = "No data available",
  icon = "📭",
}) {
  return (
    <div className="text-center text-muted py-4">
      <div style={{ fontSize: "2rem" }}>{icon}</div>
      <p className="mt-2 mb-0">{message}</p>
    </div>
  );
}
