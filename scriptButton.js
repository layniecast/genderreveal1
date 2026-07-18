const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

likeBtn.addEventListener('click', () => likeCount.innerHTML++);
