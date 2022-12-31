const translations = {
  en: {
    articles: `Articles`,
    gallery: `Gallery`,
    features: `Features`,
    products: `Products`,
    about: `About`,
  },
  ar: {
    articles: `المقالات`,
    gallery: `الصور`,
    features: `السمات`,
    products: `المنتجات`,
    about: `حول`,
  },
};

const languageSelector = document.querySelector(".text-primary");

languageSelector.addEventListener("click", (event) => {
  if (languageSelector.textContent === "EN") {
    languageSelector.textContent = "AR";
    languageSelector.value = "en";
  } else {
    languageSelector.textContent = "EN";
    languageSelector.value = "ar";
  }
  setLanguage(event.target.value);
  localStorage.setItem(`lang`, event.target.value);
});

document.addEventListener(`DOMContentLoaded`, () => {
  const language = localStorage.getItem(`lang`);
  setLanguage(language);
  if (language === "ar") {
    languageSelector.textContent = "EN";
    languageSelector.value = "ar";
  } else {
    languageSelector.textContent = "AR";
    languageSelector.value = "en";
  }
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll(`[data-i18n]`);
  elements.forEach((element) => {
    const translationKey = element.getAttribute(`data-i18n`);
    element.textContent = translations[language][translationKey];
  });
  if (language === `ar`) {
    document.dir = `rtl`;
  } else {
    document.dir = `ltr`;
  }
};
