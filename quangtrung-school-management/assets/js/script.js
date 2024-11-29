// Mảng confession thủ công
const confessions = [
  {
    text: "Tôi rất yêu thích môn Toán nhưng không tự tin khi giải bài tập.",
    time: "2024-11-29 10:30",
  },
  {
    text: "Mỗi ngày tôi luôn mong muốn có thêm thời gian học tập và chơi thể thao.",
    time: "2024-11-29 11:00",
  },
  {
    text: "Thật sự tôi không biết cách chia sẻ cảm xúc của mình với mọi người.",
    time: "2024-11-29 11:30",
  },
];

// Hiển thị danh sách confession
function displayConfessions() {
  const confessionList = document.getElementById("confession-list");
  confessionList.innerHTML = ""; // Xóa danh sách confession cũ

  // Lặp qua mảng confession và tạo phần tử HTML để hiển thị
  confessions.forEach((confession) => {
    const confessionElement = document.createElement("div");
    confessionElement.classList.add("confession");
    confessionElement.innerHTML = `
            <p>${confession.text}</p>
            <small>Thời gian: ${confession.time}</small>
        `;
    confessionList.appendChild(confessionElement);
  });
}

// Gọi hàm khi trang tải xong
window.onload = function () {
  displayConfessions();
};

// Hiển thị lớp và học sinh
function showClass(classNumber) {
  const classList = {
    6: ["6A1", "6A2", "6A3"],
    7: ["7A1", "7A2", "7A3"],
    8: ["8A1", "8A2", "8A3"],
    9: ["9A1", "9A2", "9A3"],
  };

  let classListHtml = "<h3>Danh sách lớp Khối " + classNumber + "</h3>";
  classList[classNumber].forEach((className) => {
    classListHtml += `<p><a href="#" onclick="showStudent('${className}')">${className}</a></p>`;
  });

  document.getElementById("classList").innerHTML = classListHtml;
}

function showStudent(className) {
  const students = {
    "6A1": ["Nguyễn Văn A", "Lê Thị B"],
    "7A1": ["Trần Văn C", "Phạm Thị D"],
    // Add more student names for each class
  };

  let studentListHtml = `<h3>Danh sách học sinh lớp ${className}</h3>`;
  students[className].forEach((student) => {
    studentListHtml += `<p><a href="#" onclick="showStudentProfile('${student}')">${student}</a></p>`;
  });

  document.getElementById("classList").innerHTML = studentListHtml;
}

function showStudentProfile(studentName) {
  const studentProfiles = {
    "Nguyễn Văn A": {
      avatar: "assets/images/avatar1.jpg",
      hobbies: "Đọc sách",
      fb: "https://facebook.com/nguyenvana",
    },
    "Lê Thị B": {
      avatar: "assets/images/avatar2.jpg",
      hobbies: "Chơi thể thao",
      fb: "https://facebook.com/lethib",
    },
    // Add more student profiles here
  };

  const profile = studentProfiles[studentName];
  let profileHtml = `
        <h3>Hồ sơ học sinh: ${studentName}</h3>
        <img src="${profile.avatar}" alt="${studentName}" style="width: 200px; border-radius: 50%;">
        <p><strong>Sở thích:</strong> ${profile.hobbies}</p>
        <p><strong>Facebook:</strong> <a href="${profile.fb}" target="_blank">Xem Profile</a></p>
    `;

  document.getElementById("classList").innerHTML = profileHtml;
}
