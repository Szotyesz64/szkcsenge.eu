const translations = {
    en: {
        // Nav
        brandName: "Csenge Veronika Szabó-Komoróczki",
        navHome: "Home",
        navAbout: "About",
        navResearch: "Research",
        navAchievements: "Achievements",
        navLeadership: "Leadership",
        navExperience: "Experience",
        navBlog: "Blog",
        navTutoring: "Tutoring",
        navContact: "Contact",

        // Hero
        heroBadge: "Available for research & collaboration",
        heroRole: "Physics · Astrophysics · Space Technology · Data Science",
        heroTagline: "Hungarian student exploring how the universe works — and how technology can help us explore it.",
        heroCtaPrimary: "Get in touch",
        heroCtaSecondary: "View my work",

        // About
        aboutHeading: "About Me",
        aboutP1: "Hello! I'm Csenge, a Hungarian student passionate about understanding how the universe works and how technology can help us explore it.",
        aboutP2: "My academic interests focus on physics, astrophysics, astronomy, mathematics, and computer science. I particularly enjoy projects that combine scientific research with engineering, whether that means programming simulations, analyzing data, building autonomous vehicles, designing satellites, or contributing to rocket development.",
        aboutP3: "Beyond technical work, I am actively involved in science communication, student leadership, and educational initiatives. I believe that scientific knowledge becomes most valuable when it is shared, and I enjoy helping younger students discover mathematics and science.",
        aboutTagsLabel: "Areas of interest",
        tagPhysics: "Physics",
        tagAstrophysics: "Astrophysics",
        tagAstronomy: "Astronomy",
        tagMath: "Mathematics",
        tagCS: "Computer Science",
        tagDataScience: "Data Science",
        tagSpaceTech: "Space Technology",

        // Research
        researchHeading: "Research & Engineering",
        researchIntro: "Hands-on work across satellite engineering, propulsion, autonomous systems, and scientific research.",

        research1Title: "CanSat Hungary Team Leader",
        research1Subtitle: "Candide CanSat Team · Satellite Engineering",
        research1Pt1: "Led the Candide CanSat team designing, building, and launching a custom satellite for the CanSat Hungary competition.",
        research1Pt2: "Mentored by industry and space-science professionals including István Marosi (Semilab) and Örs Detre (JWST MIRI instrument team).",
        research1Pt3: "Reached the national finals in the 2025–26 competition season.",

        research2Title: "Rocket Development",
        research2Subtitle: "Arcturus Rocket Team · ASSDS Liquid Engine Team",
        research2Pt1: "Contributed to the Arcturus Rocket Team, which developed one of Hungary's fastest and highest-flying amateur rockets, completing a successful flight campaign.",
        research2Pt2: "Since September 2025, a member of the ASSDS liquid rocket engine development team working on next-generation propulsion technologies.",

        research3Title: "Autonomous Systems & Robotics",
        research3Subtitle: "WRO Future Engineers",
        research3Pt1: "3rd place at the Hungarian National Finals of WRO Future Engineers (2025).",
        research3Pt2: "7th place internationally at the WRO Open Championship Europe in Ljubljana.",
        research3Pt3: "Designed, manufactured, and programmed an autonomous self-driving vehicle as a two-person team.",

        research4Title: "Lunar Geology Research",
        research4Subtitle: "with Dr. Ákos Kereszturi",
        research4Pt1: "Worked with Dr. Ákos Kereszturi, President of the Hungarian Astronomical Association, investigating lunar surface formations.",
        research4Pt2: "Focused on mapping and analyzing lunar ligament structures.",

        research5Title: "Laser–Material Interaction Research",
        research5Subtitle: "HUN-REN Wigner Research Centre for Physics",
        research5Pt1: "Project: \"Morphology studies on craters created by femtosecond laser irradiation in UDMA polymer targets embedded with plasmonic gold nanorods.\"",
        research5Pt2: "Developing simulations and computational tools to support experimental analysis.",

        research6Title: "Spectroscopic Simulations",
        research6Subtitle: "University of Groningen · from 2026",
        research6Pt1: "Joining a student research project focused on spectroscopic simulations, filter adaptation methods, and astrophysical data analysis.",

        // Achievements
        achievementsHeading: "Selected Achievements",

        ach1Title: "Mathematics",
        ach1Pt1: "Selected for Maths Beyond Limits 2025, an international camp admitting only ~60 students worldwide.",
        ach1Pt2: "17th place internationally in the 2024 KöMaL Problem Solving Competition.",
        ach1Pt3: "Competitor in numerous national competitions: Kalmár, Varga Tamás, Kürschák, Dürer, and Surányi.",

        ach2Title: "Science Competitions",
        ach2Pt1: "4th place — National Dürer Physics Team Competition (2026).",
        ach2Pt2: "4th place internationally — Jakucs László Geography Competition (2024).",
        ach2Pt3: "1st place nationally — Bolyai Natural Sciences Team Competition (2023).",
        ach2Pt4: "2nd place — Szántay Csaba Chemistry Competition (2023).",

        ach3Title: "Scholarships & Recognition",
        ach3Pt1: "STEM Sisters Program mentee (2025) — developed an AI-powered data processing application.",
        ach3Pt2: "Sigma Technology Hungary Special Award at NASA Space Apps Challenge Hungary for a Minecraft-based space education platform.",
        ach3Pt3: "MOL New Europe Foundation support to attend the Reach Cambridge Physics & Astronomy Programme at the University of Cambridge (2026).",
        ach3Pt4: "Applicant under international review for the Global Talent Mentoring Program in astrophysics research.",

        // Leadership
        leadershipHeading: "Leadership & Community",

        lead1Title: "Science Outreach",
        lead1Pt1: "Passionate about making science accessible and engaging for younger generations.",
        lead1Pt2: "Working with István Marosi and Ákos Kereszturi to develop a platform for young planetary observers — supporting collaboration, observation partner matching, and science communication.",

        lead2Title: "Student Leadership",
        lead2Pt1: "Student Communications Officer, Fazekas Student Government.",
        lead2Pt2: "Organizer of the Fazekas+ Festival in two consecutive academic years.",
        lead2Pt3: "Co-founder and contributor to student initiatives promoting community engagement.",

        lead3Title: "Volunteering",
        lead3Pt1: "Astronomy outreach volunteer and student assistant at the Svábhegy Observatory.",
        lead3Pt2: "Mathematics and physics tutor through the Taléta educational program.",

        // Experience
        experienceHeading: "Experience",

        exp1Title: "University Research Assistant",
        exp1Subtitle: "HUN-REN Wigner Research Centre for Physics",
        exp1Pt1: "Assisted in scientific publications and technical reports.",
        exp1Pt2: "Conducted interferometer-based laboratory experiments.",
        exp1Pt3: "Performed wave propagation simulations using MEEP.",
        exp1Pt4: "Analyzed complex scientific datasets.",

        exp2Title: "Data Scientist Intern",
        exp2Subtitle: "Semilab Semiconductor Physics Laboratory",
        exp2Pt1: "Produced weekly production data analyses.",
        exp2Pt2: "Developed and debugged software tools.",
        exp2Pt3: "Contributed to process optimization and product development.",

        exp3Title: "Astronomy Educator",
        exp3Subtitle: "Konkoly Thege Miklós Institute of Astronomy",
        exp3Pt1: "Delivered astronomy and astrophysics presentations.",
        exp3Pt2: "Prepared educational materials.",
        exp3Pt3: "Operated telescopes and guided public observing sessions.",

        // Contact
        contactHeading: "Let's connect",
        contactText: "Always interested in research collaborations, engineering projects, science outreach, and opportunities in astrophysics, space technology, and data science.",
        contactMeta: "📍 Budapest, Hungary",

        // Footer
        footerText: "© 2026 Csenge Veronika Szabó-Komoróczki · Built with curiosity in Budapest, Hungary",

        // Tutoring page
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

        languageLabel: "Language"
    },
    hu: {
        // Nav
        brandName: "Szabó-Komoróczki Csenge Veronika",
        navHome: "Főoldal",
        navAbout: "Rólam",
        navResearch: "Kutatás",
        navAchievements: "Eredmények",
        navLeadership: "Vezetés",
        navExperience: "Tapasztalat",
        navBlog: "Blog",
        navTutoring: "Magántanítás",
        navContact: "Kapcsolat",

        // Hero
        heroBadge: "Nyitott vagyok kutatási együttműködésekre",
        heroRole: "Fizika · Asztrofizika · Űrtechnológia · Adattudomány",
        heroTagline: "Magyar diák, aki azt kutatja, hogyan működik a világegyetem — és hogyan segíthet ebben a technológia.",
        heroCtaPrimary: "Vedd fel velem a kapcsolatot",
        heroCtaSecondary: "Nézd meg a munkáimat",

        // About
        aboutHeading: "Rólam",
        aboutP1: "Szia! Csenge vagyok, magyar diák, akit lelkesít, hogy megértsem, hogyan működik a világegyetem, és hogyan segíthet ebben a technológia.",
        aboutP2: "Elsősorban a fizika, az asztrofizika, a csillagászat, a matematika és az informatika érdekel. Különösen szeretem azokat a projekteket, amelyek a tudományos kutatást a mérnöki munkával ötvözik — legyen szó szimulációk programozásáról, adatelemzésről, önvezető járművek építéséről, műholdak tervezéséről vagy rakétafejlesztésben való részvételről.",
        aboutP3: "A technikai munka mellett aktívan részt veszek tudománykommunikációs, diákvezetői és oktatási kezdeményezésekben is. Úgy gondolom, a tudás akkor válik igazán értékessé, ha megosztjuk másokkal, ezért szívesen segítek fiatalabb diákoknak felfedezni a matematikát és a természettudományokat.",
        aboutTagsLabel: "Érdeklődési területek",
        tagPhysics: "Fizika",
        tagAstrophysics: "Asztrofizika",
        tagAstronomy: "Csillagászat",
        tagMath: "Matematika",
        tagCS: "Informatika",
        tagDataScience: "Adattudomány",
        tagSpaceTech: "Űrtechnológia",

        // Research
        researchHeading: "Kutatás és mérnöki munka",
        researchIntro: "Gyakorlati munka műholdtechnikában, hajtóműfejlesztésben, önvezető rendszerekben és tudományos kutatásban.",

        research1Title: "CanSat Hungary csapatvezető",
        research1Subtitle: "Candide CanSat csapat · Műholdtechnika",
        research1Pt1: "A Candide CanSat csapat vezetőjeként egyedi műhold tervezését, megépítését és kilövését irányítottam a CanSat Hungary versenyre.",
        research1Pt2: "Iparági és űrkutatási szakemberek mentorálták a munkánkat, köztük Marosi István (Semilab) és Detre Örs (JWST MIRI műszercsapat).",
        research1Pt3: "Bejutottunk az országos döntőbe a 2025–26-os versenyszezonban.",

        research2Title: "Rakétafejlesztés",
        research2Subtitle: "Arcturus Rakéta Csapat · ASSDS folyékonyhajtóanyagú hajtómű csapat",
        research2Pt1: "Részt vettem az Arcturus Rakéta Csapat munkájában, amely Magyarország egyik leggyorsabb és legmagasabbra jutó amatőr rakétáját fejlesztette, sikeres repülési kampányt zárva.",
        research2Pt2: "2025 szeptembere óta tagja vagyok az ASSDS folyékonyhajtóanyagú rakétamotor-fejlesztő csapatának, amely a következő generációs hajtástechnológiákon dolgozik.",

        research3Title: "Önvezető rendszerek és robotika",
        research3Subtitle: "WRO Future Engineers",
        research3Pt1: "3. helyezés a WRO Future Engineers magyarországi országos döntőjén (2025).",
        research3Pt2: "7. helyezés nemzetközi szinten a WRO Open Championship Europe versenyen, Ljubljanában.",
        research3Pt3: "Kétfős csapatban terveztem, építettem és programoztam egy önvezető járművet.",

        research4Title: "Holdgeológiai kutatás",
        research4Subtitle: "Dr. Kereszturi Ákossal",
        research4Pt1: "Dr. Kereszturi Ákossal, a Magyar Csillagászati Egyesület elnökével dolgoztam együtt a Hold felszíni formációinak vizsgálatában.",
        research4Pt2: "A munkám a holdi ligamentum-szerkezetek térképezésére és elemzésére fókuszált.",

        research5Title: "Lézer–anyag kölcsönhatás kutatása",
        research5Subtitle: "HUN-REN Wigner Fizikai Kutatóközpont",
        research5Pt1: "Projekt: „Femtoszekundumos lézerbesugárzással létrehozott kráterek morfológiai vizsgálata plazmonikus arany nanorudakkal dúsított UDMA polimer céltárgyakban.”",
        research5Pt2: "Szimulációk és számítási eszközök fejlesztése a kísérleti elemzés támogatására.",

        research6Title: "Spektroszkópiai szimulációk",
        research6Subtitle: "Groningeni Egyetem · 2026-tól",
        research6Pt1: "Csatlakozom egy hallgatói kutatási projekthez, amely spektroszkópiai szimulációkkal, szűrőadaptációs módszerekkel és asztrofizikai adatelemzéssel foglalkozik.",

        // Achievements
        achievementsHeading: "Válogatott eredmények",

        ach1Title: "Matematika",
        ach1Pt1: "Bekerültem a Maths Beyond Limits 2025 nemzetközi táborba, amely világszerte mindössze kb. 60 diákot fogad.",
        ach1Pt2: "17. helyezés nemzetközi szinten a 2024-es KöMaL feladatmegoldó versenyen.",
        ach1Pt3: "Számos hazai versenyen indultam: Kalmár, Varga Tamás, Kürschák, Dürer és Surányi.",

        ach2Title: "Természettudományos versenyek",
        ach2Pt1: "4. helyezés — Országos Dürer Fizika Csapatverseny (2026).",
        ach2Pt2: "4. helyezés nemzetközi szinten — Jakucs László Földrajzverseny (2024).",
        ach2Pt3: "1. helyezés országosan — Bolyai Természettudományi Csapatverseny (2023).",
        ach2Pt4: "2. helyezés — Szántay Csaba Kémiaverseny (2023).",

        ach3Title: "Ösztöndíjak és elismerések",
        ach3Pt1: "STEM Sisters Program mentoráltja (2025) — AI-alapú adatfeldolgozó alkalmazást fejlesztettem.",
        ach3Pt2: "Sigma Technology Hungary különdíj a NASA Space Apps Challenge Hungary versenyen egy Minecraft-alapú űroktatási platformért.",
        ach3Pt3: "A MOL Új Európa Alapítvány támogatásával vehettem részt a Reach Cambridge Fizika és Csillagászat programon a Cambridge-i Egyetemen (2026).",
        ach3Pt4: "Jelentkezőként nemzetközi elbírálás alatt állok a Global Talent Mentoring Program asztrofizikai kutatói programjában.",

        // Leadership
        leadershipHeading: "Vezetés és közösség",

        lead1Title: "Tudománynépszerűsítés",
        lead1Pt1: "Fontosnak tartom, hogy a tudomány elérhető és izgalmas legyen a fiatalabb generációk számára.",
        lead1Pt2: "Marosi Istvánnal és Kereszturi Ákossal együtt egy platformot fejlesztek fiatal bolygómegfigyelők számára — támogatva az együttműködést, a megfigyelőtársak összepárosítását és a tudománykommunikációt.",

        lead2Title: "Diákvezetés",
        lead2Pt1: "Kommunikációs felelős, Fazekas Diákönkormányzat.",
        lead2Pt2: "A Fazekas+ Fesztivál szervezője két egymást követő tanévben.",
        lead2Pt3: "Társalapítóként és közreműködőként veszek részt közösségépítő diákkezdeményezésekben.",

        lead3Title: "Önkéntesség",
        lead3Pt1: "Csillagászati ismeretterjesztő önkéntes és diákasszisztens a Svábhegyi Csillagvizsgálóban.",
        lead3Pt2: "Matematika- és fizikatanár a Taléta oktatási programon keresztül.",

        // Experience
        experienceHeading: "Szakmai tapasztalat",

        exp1Title: "Egyetemi kutatási asszisztens",
        exp1Subtitle: "HUN-REN Wigner Fizikai Kutatóközpont",
        exp1Pt1: "Közreműködtem tudományos publikációk és műszaki jelentések elkészítésében.",
        exp1Pt2: "Interferométeres laboratóriumi kísérleteket végeztem.",
        exp1Pt3: "Hullámterjedési szimulációkat futtattam a MEEP szoftverrel.",
        exp1Pt4: "Összetett tudományos adathalmazokat elemeztem.",

        exp2Title: "Adattudós gyakornok",
        exp2Subtitle: "Semilab Félvezető Fizikai Laboratórium",
        exp2Pt1: "Heti gyártási adatelemzéseket készítettem.",
        exp2Pt2: "Szoftvereszközöket fejlesztettem és hibakerestem.",
        exp2Pt3: "Hozzájárultam a folyamatoptimalizáláshoz és a termékfejlesztéshez.",

        exp3Title: "Csillagászati oktató",
        exp3Subtitle: "Konkoly Thege Miklós Csillagászati Intézet",
        exp3Pt1: "Csillagászati és asztrofizikai előadásokat tartottam.",
        exp3Pt2: "Oktatási anyagokat készítettem.",
        exp3Pt3: "Távcsöveket kezeltem, és nyilvános megfigyelési alkalmakat vezettem.",

        // Contact
        contactHeading: "Lépjünk kapcsolatba",
        contactText: "Mindig nyitott vagyok kutatási együttműködésekre, mérnöki projektekre, tudománynépszerűsítésre, valamint asztrofizikai, űrtechnológiai és adattudományi lehetőségekre.",
        contactMeta: "📍 Budapest, Magyarország",

        // Footer
        footerText: "© 2026 Szabó-Komoróczki Csenge Veronika · Kíváncsisággal építve, Budapesten",

        // Tutoring page
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
        if (translations[language][key] !== undefined) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        if (translations[language][key] !== undefined) {
            element.setAttribute("aria-label", translations[language][key]);
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

    const menuToggle = document.querySelector(".menu-toggle");
    const menuPanel = document.getElementById("site-navigation");
    const menuClose = document.querySelector(".menu-close");
    const menuOverlay = document.querySelector(".nav-overlay");

    if (!menuToggle || !menuPanel || !menuClose || !menuOverlay) return;

    menuPanel.setAttribute("aria-hidden", "true");
    let closeTimer;

    const closeMenu = () => {
        window.clearTimeout(closeTimer);
        menuPanel.classList.remove("is-open");
        menuOverlay.classList.remove("is-visible");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuPanel.setAttribute("aria-hidden", "true");
        menuOverlay.setAttribute("aria-hidden", "true");
        closeTimer = window.setTimeout(() => {
            menuPanel.classList.remove("is-visible");
        }, 240);
        menuToggle.focus();
    };

    const openMenu = () => {
        window.clearTimeout(closeTimer);
        menuPanel.classList.add("is-visible");
        window.requestAnimationFrame(() => {
            if (menuPanel.classList.contains("is-visible")) {
                menuPanel.classList.add("is-open");
            }
        });
        menuOverlay.classList.add("is-visible");
        document.body.classList.add("menu-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuPanel.setAttribute("aria-hidden", "false");
        menuOverlay.setAttribute("aria-hidden", "false");
        menuClose.focus();
    };

    menuToggle.addEventListener("click", () => {
        if (menuPanel.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    menuPanel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuPanel.classList.contains("is-open")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 900px)").matches && menuPanel.classList.contains("is-open")) {
            closeMenu();
        }
    });
});
