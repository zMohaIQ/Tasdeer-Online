const translations = {
  en: {
    home: `Home`,
    gallery: `Gallery`,
    products: `Products`,
    about: `About us`,
    contact: `Contact Us`,
    quote_welcome: `Welcome to,`,
    quote_p: `Arabian Rubber Company and learn how to request your order of rubber tiles and Reclaimed rubber from recycled tires. Reclaimed rubber is manufactured with unprecedented quality, opening up a whole new world of interesting application prospects.`,
    logo: `RUBBER FLOORING TILES`,
  },
  ar: {
    home: `الصفحة الرئسية`,
    gallery: `الصور`,
    products: `المنتجات`,
    about: `حول`,
    contact: `تواصل معنا`,
    quote_welcome: `مرحبا بكم`,
    quote_p: `الشركة العربية للمطاط وتعلم كيفية طلب طلبك من البلاط المطاطي والمطاط المستصلح من الإطارات المعاد تدويرها. يتم تصنيع المطاط المستصلح بجودة غير مسبوقة ، مما يفتح عالما جديدا تماما من آفاق التطبيق المثيرة للاهتمام.`,
    logo: `الأرضيات المطاطية`,
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
