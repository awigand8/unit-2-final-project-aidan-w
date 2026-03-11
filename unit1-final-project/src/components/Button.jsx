function Button({ label, onClick, className }) {
  return (
    <button className={className || "button"} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;