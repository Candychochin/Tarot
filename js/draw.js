const proceedBtn = document.getElementById("proceedBtn");
const radioBtns = document.querySelectorAll('input[name="type-selection"]');
const selectionContainer = document.querySelector(".select-container");
const selectContent = document.querySelector(".select-content");
const generalSection = document.querySelector(".general-section");
const loveSection = document.querySelector(".love-section");
const careerSection = document.querySelector(".career-section");
const schoolSection = document.querySelector(".school-section");
const financeSection = document.querySelector(".finance-section");
const yesNoSection = document.querySelector(".yes_no-section");

let selectedType = ""; // Default selection

function getSelectedType() {
  const selectedRadio = [...radioBtns].find((radio) => radio.checked);

  if (selectedRadio) {
    selectedType = selectedRadio.value;
  }
}

if (proceedBtn) {
  proceedBtn.addEventListener("click", () => {
    getSelectedType();
    selectionContainer.classList.add("hide");

    switch (true) {
      case selectedType === "general":
        generalSection.classList.remove("hide");
        break;

      case selectedType === "love":
        loveSection.classList.remove("hide");
        break;

      case selectedType === "career":
        careerSection.classList.remove("hide");
        break;

      case selectedType === "school":
        schoolSection.classList.remove("hide");
        break;

      case selectedType === "finance":
        financeSection.classList.remove("hide");
        break;

      case selectedType === "yes_no":
        yesNoSection.classList.remove("hide");
        break;
    }
  });
}

// under part is for drawing card and shuffle

document.addEventListener("DOMContentLoaded", () => {
  if (currentLanguage === "en") {
    selectContent.classList.add("addPad");
  }
  if (currentLanguage === "mm") {
    selectContent.classList.remove("addPad");
  }

  updateLanguage();

  const cardElement = document.querySelectorAll(".card");
  const deck = document.querySelector(".deck-container");
  const resultSection = document.querySelector(".result-section");
  const drawBtn = document.getElementById("drawBtn");

  let currentCards = [];
  let selectedIndex = null;

  function shuffledDeck(deckData) {
    return [...deckData].sort(() => Math.random() - 0.5);
  }

  function setUpSpreadCards() {
    const shuffledCard = shuffledDeck(fullDeck);
    currentCards = shuffledCard.slice(0, 5);

    cardElement.forEach((card, index) => {
      const img = card.querySelector(".tarot-card");
      img.src = currentCards[index].image;

      const isReversed = Math.random() > 0.5;
      currentCards[index].isReversed = isReversed;

      img.style.transform = isReversed ? "rotateY(180deg)" : "rotateY(-180deg)";
    });
  }

  // Call it once
  setUpSpreadCards();

  // Card selection
  cardElement.forEach((card, index) => {
    card.addEventListener("click", () => {
      selectedIndex = index;

      cardElement.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
    });
  });

  // Draw button
  drawBtn.addEventListener("click", () => {
    if (selectedIndex === null) {
      alert("Please select a card first.");
      return;
    }

    renderResult();

    deck.classList.add("hide");
    resultSection.classList.remove("hide");
  });

  function renderResult() {
    if (selectedIndex === null) return;

    const selectedCard = currentCards[selectedIndex];

    const data = selectedCard.isReversed
      ? selectedCard.reversed[currentLanguage]
      : selectedCard.meaning[currentLanguage];

    resultSection.querySelector("img").src = selectedCard.image;

    resultSection.querySelector("h2").textContent =
      selectedCard.name + (selectedCard.isReversed ? " (Reversed)" : "");

    document.getElementById("generalResult").textContent = data.general;
    document.getElementById("loveResult").textContent = data.love;
    document.getElementById("careerResult").textContent = data.career;
    document.getElementById("schoolResult").textContent = data.school;
    document.getElementById("financeResult").textContent = data.finance;
    document.getElementById("adviceResult").textContent = data.advice;
    document.getElementById("yes_noResult").textContent = data.yes_no;
  }

  const drawLangBtn = document.querySelectorAll(".langToggle_draw");

  drawLangBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "mm" : "en";

      localStorage.setItem("lang", currentLanguage);

      drawLangBtn.forEach((b) => {
        b.textContent = currentLanguage === "en" ? "EN | MM" : "MM | EN";
      });

      updateLanguage();

      if (typeof renderResult === "function") {
        renderResult();
      }
      if (currentLanguage === "en") {
        selectContent.classList.add("addPad");
      }
      if (currentLanguage === "mm") {
        selectContent.classList.remove("addPad");
      }
    });
  });
});
