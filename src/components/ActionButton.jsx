const ActionButton = ({
  onClick,
  size = 24,
  disabled = false,
  type = "delete",
  text = null,
  className = "",
}) => {
  // Button styles based on type
  const buttonStyles = {
    delete: "bg-red-500 hover:bg-red-600",
    update: "bg-blue-500 hover:bg-blue-600",
  };

  // Icon selection based on type
  const renderIcon = () => {
    if (type === "delete") {
      return (
        <>
          {/* Trash can container */}
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z" />
          <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />

          {/* Delete lines */}
          <path
            d="M10 10v6M14 10v6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      );
    } else if (type === "update") {
      return (
        <>
          {/* Pencil/Edit icon */}
          <path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l13-13z" />
          <path
            d="M15 5L19 9"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      );
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${buttonStyles[type]} text-white p-2 rounded-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
      aria-label={type === "delete" ? "Delete" : "Update"}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="fill-current"
      >
        {renderIcon()}
      </svg>
      {text && <span className="ml-2">{text}</span>}
    </button>
  );
};

export default ActionButton;
