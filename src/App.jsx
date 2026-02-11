import React from 'react'

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-r from-blue-500 to-white-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-130">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Todo App
        </h1>
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
            >
              <span>{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App