const modal = document.getElementById("modal");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.getElementById("close");
const imgs = document.querySelectorAll(".gallery img");

imgs.forEach(img => {
  img.addEventListener("click", () => {
    fullImage.src = img.dataset.full;
    modal.classList.add("open");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  fullImage.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    fullImage.src = "";
  }
});