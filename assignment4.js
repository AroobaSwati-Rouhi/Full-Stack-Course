const users = [
{ name: "Alice", courses: 
    ["Math", "Science", "English"] },

{ name: "Bob", courses: 
    ["Math", "Art"] },

{ name: "Charlie", courses: 
    ["Science", "Math", "History"] },

{ name: "David", courses: 
    ["Math", "English"] },

{ name: "Eve", courses: 
    ["Art", "Science"] }
];

let courseCounts = {};

for (let i = 0; i < users.length; i++) {
  let userCourses = users[i].courses;

  for (let j = 0; j < userCourses.length; j++) {
    let courseName = userCourses[j];

    if (courseCounts[courseName]) {
      courseCounts[courseName] = courseCounts[courseName] + 1;
    } else {
      courseCounts[courseName] = 1;
    }
  }
}


for (let course in courseCounts) {
  let count = courseCounts[course];

  if (count === 1) {
    console.log(course + ": " + count + " student");
  } else {
    console.log(course + ": " + count + " students");
  }
}

let mostPopularCourse = "";
let maxCount = 0;

for (let course in courseCounts) {
  if (courseCounts[course] > maxCount) {
    maxCount = courseCounts[course];
    mostPopularCourse = course;
  }
}

console.log("Most popular course: " + mostPopularCourse + " with " + maxCount + " students");