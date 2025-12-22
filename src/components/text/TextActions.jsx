import Button from "../common/Button";

export default function TextActions({ text, setText, actions }) {
  return (
    <div className="mb-3">
      {actions.map(({ label, action, variant }) => (
        <Button
          key={label}
          variant={variant}
          onClick={() => action(text, setText)}
          disabled={!text}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
