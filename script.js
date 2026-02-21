const cards = document.querySelectorAll(".card-loop-cards");
const modal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeaning = document.getElementById("modalMeaning");
const closeModal = document.getElementById("closeModal");

let currentUpright = "";
let currentReverse = "";

if (modal && closeModal && modalImage) {
  modalImage.addEventListener("click", () => {
    modalImage.classList.toggle("reverse");

    if (modalImage.classList.contains("reverse")) {
      modalMeaning.textContent = currentReverse;
    } else {
      modalMeaning.textContent = currentUpright;
    }
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const title = card.dataset.title;
      currentUpright = card.dataset.meaning;
      currentReverse = card.dataset.reversed;

      modalImage.src = img;
      modalImage.classList.remove("reverse");
      modalTitle.textContent = title;
      modalMeaning.textContent = currentUpright;

      modal.classList.add("active");
    });
  });

  // ===== close the pop up =====

  const handleClose = () => {
    modal.classList.remove("active");
    modalImage.classList.remove("reverse");
  };

  closeModal.addEventListener("click", handleClose);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      handleClose();
    }
  });
}

// ==== upper is library page ====

const menuIcon = document.getElementById("menuIcon");
const sideContainer = document.querySelector(".side-container");
// sideContainer is background when click the icon

if (menuIcon && sideContainer) {
  menuIcon.addEventListener("click", () => {
    sideContainer.classList.toggle("active");
  });

  sideContainer.addEventListener("click", (e) => {
    if (e.target === sideContainer) {
      sideContainer.classList.remove("active");
    }
  });
}


// ==== upper is menu toggle ====








