const translations = {
  en: {
    welcome: "Welcome to My Website",
    home: "Home",
    about: "About",
    contact: "Contact",
    intro: "This is the home page of our website.",
    about_us: "About Us",
    about_text: "We are passionate about building websites.",
    contact_us: "Contact Us",
    contact_text: "You can reach us at contact@example.com."
  },
  hi: {
    welcome: "मेरी वेबसाइट में आपका स्वागत है",
    home: "होम",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    intro: "यह हमारी वेबसाइट का होम पेज है।",
    about_us: "हमारे बारे में",
    about_text: "हमें वेबसाइट बनाना बहुत पसंद है।",
    contact_us: "संपर्क करें",
    contact_text: "आप हमसे contact@example.com पर संपर्क कर सकते हैं।"
  },
  fr: {
    welcome: "Bienvenue sur mon site web",
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    intro: "Ceci est la page d'accueil de notre site web.",
    about_us: "À propos de nous",
    about_text: "Nous aimons créer des sites web.",
    contact_us: "Contactez-nous",
    contact_text: "Vous pouvez nous joindre à contact@example.com."
  }
};

// Update text based on selected language
function updateLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });
}

// Event listener for dropdown
const languageDropdown = document.getElementById("language");
if (languageDropdown) {
  languageDropdown.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    updateLanguage(lang);
  });

  // Load saved language
  const savedLang = localStorage.getItem("language") || "en";
  languageDropdown.value = savedLang;
  updateLanguage(savedLang);
}
