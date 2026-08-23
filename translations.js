const translations = {
    en: {
        navHome: "Home",
        navBlog: "Blog",
        navTutoring: "Tutoring",

        homeTitle: "Welcome",
        homeSubtitle: "Welcome to my website.",
        blogTitle: "Blog",

        tutoringPageTitle: "Private Tutoring — Csenge Veronika Szabó-Komoróczki",
        tutoringTitle: "Private Tutoring",
        tutoringIntro:
            "I offer private tutoring in mathematics and physics, drawing on my own experience as a student, competitor, and researcher in both fields. Lessons are tailored to each student's level and goals — whether that means catching up in school, preparing for exams, or getting ready for competitions.",

        tutoringAboutTitle: "About my tutoring",
        tutoringAboutText:
            "I've been tutoring maths and physics for several years, including through the Taléta educational program, and I care most about helping students build real understanding rather than memorising formulas. My own path — national science competitions, research projects, and the Reach Cambridge Physics & Astronomy programme — shapes how I teach: patiently, practically, and with a focus on genuine curiosity.",

        tutoringSubjectsTitle: "Subjects & levels",
        tutoringSubjectsText:
            "Mathematics and physics for upper-primary and secondary school students, plus focused preparation for competitions such as Zrínyi, Kalmár, Varga Tamás, and Dürer. Lessons can be about closing gaps, preparing for exams, or going deeper for students aiming at olympiads and admissions.",

        tutoringApproachTitle: "How lessons work",
        tutoringApproachText:
            "Lessons are one-on-one, in person in Budapest or online, and adapted to how you learn best. We start from where you are, build a plan around your goals, and spend most of the time working through problems together rather than just going over theory.",

        tutoringContactTitle: "Get in touch",
        tutoringContactText:
            "Interested in lessons, or have a question about a specific subject or level? Send me a message and let's find a time that works.",
        tutoringContactBtn: "Email me",

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

        tutoringPageTitle: "Magántanítás — Szabó-Komoróczki Csenge Veronika",
        tutoringTitle: "Magántanítás",
        tutoringIntro:
            "Matematikából és fizikából tartok magánórákat, saját diákként, versenyzőként és kutatóként szerzett tapasztalatomra építve mindkét területen. Az órákat a diák szintjéhez és céljaihoz igazítom — legyen szó felzárkózásról, érettségi felkészülésről vagy versenyfelkészítésről.",

        tutoringAboutTitle: "Az óráimról",
        tutoringAboutText:
            "Több éve tanítok matematikát és fizikát, többek között a Taléta oktatási programon keresztül, és számomra a legfontosabb, hogy a diákok valódi megértésre tegyenek szert, ne csak bemagolják a képleteket. A saját utam — az országos versenyek, kutatási projektek és a Reach Cambridge Fizika és Csillagászat programja — meghatározza, ahogyan tanítok: türelmesen, gyakorlatiasan, a valódi kíváncsiságra fókuszálva.",

        tutoringSubjectsTitle: "Tantárgyak és szintek",
        tutoringSubjectsText:
            "Matematika és fizika felső tagozatos és középiskolás diákoknak, valamint célzott versenyfelkészítés (pl. Zrínyi, Kalmár, Varga Tamás, Dürer). Az órák szólhatnak felzárkózásról, érettségi felkészülésről, vagy elmélyülésről azoknak, akik versenyekre vagy felvételire készülnek.",

        tutoringApproachTitle: "Hogyan zajlanak az órák",
        tutoringApproachText:
            "Az órák egyéni foglalkozások, személyesen Budapesten vagy online, a diák tanulási stílusához igazítva. Onnan indulunk, ahol most tartasz, közösen kialakítjuk a célokhoz vezető tervet, és az idő nagy részében közösen dolgozunk a feladatokon, nem csak elméletet ismétlünk.",

        tutoringContactTitle: "Vedd fel velem a kapcsolatot",
        tutoringContactText:
            "Érdekelnek az órák, vagy kérdésed van egy adott tantárgyról vagy szintről? Írj bátran, és megbeszéljük az időpontot.",
        tutoringContactBtn: "Írj emailt",

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
