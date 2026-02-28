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

const searchInput = document.getElementById("searchInput");
const containers = document.querySelectorAll(
  `.arcana-card-container, 
      .cup-card-container, 
      .pentacles-card-container, 
      .sword-card-container, 
      .wand-card-container`,
);
const noResult = document.getElementById("noResult");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const title = card.dataset.title.toLowerCase();
      const meaning = card.dataset.meaning.toLowerCase();

      if (title.includes(searchValue) || meaning.includes(searchValue)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
    containers.forEach((container) => {
      const visibleCards = Array.from(
        container.querySelectorAll(".card-loop-cards"),
      ).filter((card) => card.style.display !== "none");
      if (visibleCards.length === 0) {
        container.style.display = "none";
      } else {
        container.style.display = "";
      }
    });

    const anyVisibleCard = Array.from(cards).some(
      (card) => card.style.display !== "none",
    );

    if (!anyVisibleCard) {
      noResult.style.display = "block";
    } else {
      noResult.style.display = "none";
    }
  });
}

//  upper part is for the search bar on the library page

// under part is for draw card page 







const proceedBtn = document.getElementById('proceedBtn');
const radioBtns = document.querySelectorAll('input[name="type-selection"]');
const selectionContainer = document.querySelector('.select-container');

const generalSection = document.querySelector('.general-section');
const loveSection = document.querySelector('.love-section');
const careerSection = document.querySelector('.career-section');
const schoolSection = document.querySelector('.school-section');
const financeSection = document.querySelector('.finance-section');
const yesNoSection = document.querySelector('.yes_no-section');




let selectedType = ''; // Default selection

function getSelectedType() {
    const selectedRadio = [...radioBtns].find(radio => radio.checked);

    if(selectedRadio) {
        selectedType = selectedRadio.value;

    }


};

proceedBtn.addEventListener('click' , ()=> {
     getSelectedType();
    selectionContainer.classList.add('hide');



      switch (true) {
    case selectedType === 'general':
      generalSection.classList.remove('hide');
      break;

    case selectedType === 'love':
    loveSection.classList.remove('hide');
    break;

    case selectedType === 'career':
    careerSection.classList.remove('hide');
    break;

    
    case selectedType === 'school':
    schoolSection.classList.remove('hide');
    break;

    case selectedType === 'finance':
      financeSection.classList.remove('hide');
      break;

      case selectedType === 'yes_no':
        yesNoSection.classList.remove('hide');
        break;


  }
})









    // if (selectedType === 'general') {
    //   generalSection.classList.remove('hide');
      
    // } else  if (selectedType === 'love') {
      
    //   loveSection.classList.remove('hide');
      
    // } else if (selectedType === 'career') {
      
    //   careerSection.classList.remove('hide');
      
    // } else if (selectedType === 'school') {
  
    //   schoolSection.classList.remove('hide');
      
    // } else if (selectedType === 'finance') {
      
    //   financeSection.classList.remove('hide');
     
    // } else if (selectedType === 'yes_no') {
    
    //   yesNoSection.classList.remove('hide');
    // }








document.addEventListener("DOMContentLoaded", () => {

  const cardElement = document.querySelectorAll(".card");
  const deck = document.querySelector('.deck-container');
  const resultSection = document.querySelector('.result-section');
  const drawBtn = document.getElementById('drawBtn');

  let currentCards = [];
  let selectedIndex = null;



  function shuffledDeck(deckData){
    return [...deckData].sort(() => Math.random() - 0.5);
  }


  function setUpSpreadCards(){

    const shuffledCard = shuffledDeck(fullDeck);
    currentCards = shuffledCard.slice(0, 5);

    cardElement.forEach((card, index) => {

      const img = card.querySelector('.tarot-card');
      img.src = currentCards[index].image;

      const isReversed = Math.random() > 0.5;
      currentCards[index].isReversed = isReversed;

    img.style.transform = isReversed ? "rotateY(180deg)" : "rotateY(-180deg)";
    });

  }

  // Call it once
  setUpSpreadCards();

  // Card selection
  cardElement.forEach((card , index) => {
    card.addEventListener('click' , () => {

      selectedIndex = index;

      cardElement.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

    });
  });

  // Draw button
  drawBtn.addEventListener('click' , () => {

    if (selectedIndex === null){
      alert('Please select a card first.');
      return;
    }

    const selectedCard = currentCards[selectedIndex];
    const data = selectedCard.isReversed
      ? selectedCard.reversed
      : selectedCard.meaning;

    resultSection.querySelector('img').src = selectedCard.image;
    resultSection.querySelector('h2').textContent =
      selectedCard.name + (selectedCard.isReversed ? ' (Reversed)' : '');

    document.getElementById('generalResult').textContent = data.general;
    document.getElementById('loveResult').textContent = data.love;
    document.getElementById('careerResult').textContent = data.career;
    document.getElementById('schoolResult').textContent = data.school;
    document.getElementById('financeResult').textContent = data.finance;
    document.getElementById('adviceResult').textContent = data.advice;
    document.getElementById('yes_noResult').textContent = data.yes_no;







    deck.classList.add('hide');
    resultSection.classList.remove('hide');


  });

});


 












