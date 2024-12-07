export const ToDoItem = ({ todo: { id, text, completed }, onDelete, onToggle }) => {
    return (
      <div
        className={`flex items-center justify-between p-4 border rounded ${
          completed ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className={`${completed ? "line-through text-gray-500" : ""}`}>
          {text}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => onToggle(id)}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            {completed ? "Cancel" : "Complete"}
          </button>
          <button
            onClick={() => onDelete(id)}
            className="px-3 py-1 bg-red-200 text-yellow-700 rounded hover:bg-red-300 transition"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
