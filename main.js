// main.js
console.log("Frontend loaded successfully");

// Use your Render backend URL
const backendUrl = "https://sdev255-backend.onrender.com/courses";

// Function to fetch courses from backend and display them
async function fetchCourses() {
  try {
    const response = await fetch(backendUrl);
    const courses = await response.json();

    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    courses.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.className = "card mb-3";
      courseCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${course.courseName}</h5>
          <p class="card-text">${course.description}</p>
          <p class="card-text"><strong>Subject:</strong> ${course.subject}</p>
          <p class="card-text"><strong>Credits:</strong> ${course.credits}</p>
        </div>
      `;
      courseList.appendChild(courseCard);
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

// Call the function when page loads
fetchCourses();
