const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;
likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});
