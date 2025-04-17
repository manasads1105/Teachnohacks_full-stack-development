import React, { useState } from "react";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position) return;

    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = formData;
      setEmployees(updated);
      setEditIndex(null);
    } else {
      setEmployees([...employees, formData]);
    }

    setFormData({ name: "", email: "", position: "" });
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-indigo-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-600">
          👨‍💼 Employee CRUD Application
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Position</label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Manager"
            />
          </div>

          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              {editIndex !== null ? "✅ Update Employee" : "➕ Add Employee"}
            </button>
          </div>
        </form>

        {employees.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-indigo-200 text-indigo-800">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Position</th>
                  <th className="p-3 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, i) => (
                  <tr
                    key={i}
                    className="bg-white hover:bg-indigo-50 transition"
                  >
                    <td className="p-3 border">{emp.name}</td>
                    <td className="p-3 border">{emp.email}</td>
                    <td className="p-3 border">{emp.position}</td>
                    <td className="p-3 border text-center space-x-2">
                      <button
                        onClick={() => handleEdit(i)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded shadow"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(i)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No employees added yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
