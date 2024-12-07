import { useState } from "react"

export const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [error, setError] = useState(null)

  const handleSave = () => {
    if (!text.trim()) {
      return setError("Please fill all the fields.")
    }
    onAdd(text)
    setText("")
    setError(null)
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {error && <p className="bg-yellow-100 text-yellow-800 p-2 my-2 rounded">{error}</p>}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 transition"
      >
        Save
      </button>
    </div>
  )
}
