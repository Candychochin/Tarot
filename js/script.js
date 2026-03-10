let currentLanguage = localStorage.getItem("lang") || "en";

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

const langBtn = document.querySelectorAll(".langToggle");

function updateLanguage() {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");

    if (languageData[currentLanguage] && languageData[currentLanguage][key]) {
      element.innerHTML = languageData[currentLanguage][key];
    }
  });

  const selectContent = document.querySelector(".select-content");
  if (selectContent) {
    currentLanguage === "en"
      ? selectContent.classList.add("addPad")
      : selectContent.classList.remove("addPad");
  }

  langBtn.forEach((btn) => {
    btn.textContent = currentLanguage === "en" ? "EN | MM" : "MM | EN";
  });
}

updateLanguage();

langBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "mm" : "en";

    localStorage.setItem("lang", currentLanguage);

    langBtn.forEach((b) => {
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

document.addEventListener("DOMContentLoaded", updateLanguage);
