export function Submit({ type, children }) {
  return (
    <button type={type} style={{ "background-color": "blue", color: "white" }}>
      <b>{children}</b>
    </button>
  );
}
