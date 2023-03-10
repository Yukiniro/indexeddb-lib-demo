function Button(props) {
  const { onClick, children } = props;
  return (
    <button
      className="cursor-pointer text-6 px-6 py-2 rounded-4 border-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
