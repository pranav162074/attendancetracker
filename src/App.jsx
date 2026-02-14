// Calculate total missed classes
  const totalMissed = students.filter(s => s.present).length;

  return (
    <div className="container">
      <h1>Class Skip Tracker 🏃‍♂️</h1>
      <p>Total Classes Missed: <strong>{totalMissed}</strong></p>
      
      <div className="input-group">
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Math 101, Physics..." 
        />
        <button onClick={addStudent}>Add Subject</button>
      </div>

      <div className="list">
        {students.map(student => (
          <div key={student.id} className="student-item">
            <span className={student.present ? "missed" : "attended"}>
              {student.name}
            </span>
            <button onClick={() => toggleAttendance(student.id)}>
              {student.present ? "✅ I actually went" : "❌ I skipped this"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )