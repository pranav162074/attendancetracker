# 📊 Attendance Tracker System

A simple and interactive **attendance tracker web app** built using **HTML, CSS, and JavaScript**.  
It allows users to enter their complete timetable (subjects, timings, and holidays) and tracks **subject-wise and overall attendance percentages live**, based on whether the user attends or bunks a class.

This project is fully **frontend-only** and runs directly in the browser.

---

## 🚀 Features

- 📅 Add a complete weekly timetable with:
  - Subject names
  - Class timings
- 🏖️ Mark holidays / non-working days
- ✅ Mark daily attendance (Attended / Bunked)
- 📈 Live attendance calculation:
  - Subject-wise attendance percentage
  - Overall attendance percentage
- 🔄 Updates attendance instantly after every entry
- 💾 Data persistence using browser storage (LocalStorage)
- 🎯 Clean and easy-to-use interface

---

## 🛠️ Tech Stack

- **HTML** – Structure of the application  
- **CSS** – Styling and layout  
- **JavaScript** – Logic, calculations, and data handling  

No frameworks, no backend, no database.

---

## 📂 Project Structure

attendance-tracker/
│
├── index.html # Main UI
├── styles.css # Styling
├── script.js # Attendance logic
└── README.md # Project documentation

---

## ⚙️ How It Works

1. User enters their **timetable** with subject names and class timings.
2. Holidays are marked to avoid incorrect attendance calculations.
3. Each day, the user selects whether they:
   - Attended a class
   - Bunked a class
4. The app updates:
   - Total classes conducted
   - Classes attended
   - Attendance percentage (per subject & overall)
5. All data is stored locally in the browser, so it persists across sessions.

---

## 📈 Attendance Formula

Attendance Percentage = (Classes Attended / Total Classes) × 100

Calculated separately for each subject and then combined for overall attendance.

---

## 🧪 How to Run

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Start adding your timetable and tracking attendance

No installation required.

---

## 💡 Future Improvements

- 📊 Visual graphs for attendance trends
- ⏰ Automatic class detection based on time
- 📱 Mobile responsive design
- 📤 Export attendance report (PDF / CSV)
- 🌐 Backend support for multi-device sync

---

## 🤝 Contributing

Feel free to fork the project, suggest improvements, or add new features.

---

## 📜 License

This project is open-source and free to use for learning and personal purposes.

---

**Made with ❤️ using HTML, CSS, and JavaScript**