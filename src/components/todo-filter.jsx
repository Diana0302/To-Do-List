export const ToDoFilter = ({ currentFilter, onFilterChange }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button
          onClick={() => onFilterChange("all")}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: currentFilter === "all" ? '#2563eb' : '#e5e7eb',
            color: currentFilter === "all" ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: currentFilter === "active" ? '#2563eb' : '#e5e7eb',
            color: currentFilter === "active" ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: currentFilter === "completed" ? '#2563eb' : '#e5e7eb',
            color: currentFilter === "completed" ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Completed
        </button>
      </div>
    )
  }
