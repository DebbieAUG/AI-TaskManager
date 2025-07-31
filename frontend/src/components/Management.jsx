export const StudentManagement = () => {
  return (
    <div className="stud-wrapper bg-white p-5 rounded shadow-md w-2/5 mt-10">
      <h2 className="text-2xl text-center font-semibold mb-2">Add Student</h2>

      <div className="input-group mb-3">
        <label className="block text-center">Enter Student ID</label>
        <input 
          type="text"
          placeholder="Student ID"
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="input-group mb-3">
        <label className="block text-center">Enter Student Name</label>
        <input 
          type="text"
          placeholder="Student Name"
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="input-group mb-3">
        <label className="block text-center">Enter Student Skills</label>
        <input 
          type="text"
          placeholder="Student Skills"
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="btn-group text-center mt-5">
        <button className="w-2/3 bg-green-300 text-white py-3 rounded hover:bg-purple-600 transition duration-200">
            Add New Student
        </button>
      </div>

    </div>
  )
}