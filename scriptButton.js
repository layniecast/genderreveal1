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
