const cards = document.querySelectorAll(".card-loop-cards");
const modal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeaning = document.getElementById("modalMeaning");
const closeModal = document.getElementById("closeModal");

if (modal && closeModal) {
  cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.dataset.title;
    const meaning = card.dataset.meaning;

    modalImage.src = img;
    modalTitle.textContent = title;
    modalMeaning.textContent = meaning;

    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
}

// ==== upper is library page ====


const menuIcon = document.getElementById("menuIcon");
const sideContainer = document.querySelector(".side-container");
// sideContainer is background when click the icon

if(menuIcon && sideContainer){
  

menuIcon.addEventListener("click", () => {



  sideContainer.classList.toggle('active');

});

sideContainer.addEventListener('click', (e) => {
  if(e.target === sideContainer){
    sideContainer.classList.remove('active');
  }
})
}