const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

// Load initial likes from localStorage
let likes = localStorage.getItem("totalLikes")
  ? parseInt(localStorage.getItem("totalLikes"))
  : 0;
likeCount.textContent = likes;

likeBtn.addEventListener("click", () => {
  likes++;
  localStorage.setItem("totalLikes", likes); // Save to local storage
  likeCount.textContent = likes;
});

// function resetCounter() {
// //     // 1. Find the element tracking the number
// const counterDisplay = document.getElementById("display-number");

// //     // 2. Clear its value back to 0
// counterDisplay.textContent = "0";
