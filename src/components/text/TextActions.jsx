// src/components/text/TextActions.jsx
import Button from "../common/Button";

export default function TextActions({ text, setText, actions, layout = "row", justify = "start" }) {
  return (
    <div className={`d-flex flex-${layout} justify-content-${justify} flex-wrap mb-3`}>
      {actions.map(({ label, action, variant }) => (
        <Button key={label} variant={variant} onClick={() => action(text, setText)}>
          {label}
        </Button>
      ))}
    </div>
  );
}
