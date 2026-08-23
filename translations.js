const translations = {
    en: {
        navHome: "Home",
        navBlog: "Blog",
        navTutoring: "Tutoring",

        homeTitle: "Welcome",
        homeSubtitle: "Welcome to my website.",

        blogTitle: "Blog",

        tutoringTitle: "Private Tutoring",
        tutoringIntro:
            "This is an example introduction for the private tutoring page.",
        tutoringSectionTitle: "Example section",
        tutoringSectionText:
            "This text is only a placeholder. It can be replaced with a proper introduction, information about subjects, experience, lessons, or contact details later.",
        tutoringCta: "More information coming soon",

        languageLabel: "Language"
    },

    hu: {
        navHome: "Főoldal",
        navBlog: "Blog",
        navTutoring: "Magántanítás",

        homeTitle: "Üdvözöllek",
        homeSubtitle: "Üdvözöllek a weboldalamon.",

        blogTitle: "Blog",

        tutoringTitle: "Magántanítás",
        tutoringIntro:
            "Ez egy példa bemutatkozó szöveg a magántanításról szóló oldalhoz.",
        tutoringSectionTitle: "Példa szekció",
        tutoringSectionText:
            "Ez a szöveg jelenleg csak helykitöltő. Később ide kerülhet a részletes bemutatkozás, a tanított tantárgyak, a tapasztalatok, az órák menete vagy az elérhetőségek.",
        tutoringCta: "További információ hamarosan",

        languageLabel: "Nyelv"
    }
};


function getCurrentLanguage() {
    return localStorage.getItem("language") || "en";
}


function setLanguage(language) {
    if (!translations[language]) return;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = getCurrentLanguage();

    setLanguage(currentLanguage);

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.language);
        });
    });
});
