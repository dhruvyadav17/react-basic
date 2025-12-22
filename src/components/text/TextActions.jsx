import Button from "../common/Button";

export default function TextActions({ text, setText, actions, undo, redo }) {
  return (
    <div className="mb-3 d-flex flex-wrap gap-2">
      {actions.map(({ label, action, variant }) => (
        <Button
          key={label}
          variant={variant}
          onClick={() => action(text, setText)}
          disabled={!text && !["Clear"].includes(label)}
        >
          {label}
        </Button>
      ))}
      <Button onClick={undo} variant="warning">Undo</Button>
      <Button onClick={redo} variant="info">Redo</Button>
    </div>
  );
}
