/**
 * LANG.JS
 * Multi-language support (English / French)
 */

// ============================================
// TRANSLATIONS
// ============================================

const translations = {
    en: {
        // Navbar
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.tagline": "Turning raw data into strategic decisions.",
        "hero.btn.projects": "View Projects",
        "hero.btn.cv": "Download CV",

        // Typing texts
        "typing.texts": ["BI Developer", "Data Analyst", "Power BI Expert", "ETL Engineer"],

        // About
        "about.title": "About Me",
        "about.bio": "I'm a passionate BI & Data Analyst based in Nabeul, Tunisia, specializing in transforming complex data into actionable insights. With expertise in Power BI, ETL pipelines, and data engineering, I help businesses make data-driven decisions through interactive dashboards and automated analytics solutions.",
        "about.location": "Nabeul, Tunisia",
        "about.status": "Open to opportunities",
        "about.stat.internships": "Internships",
        "about.stat.projects": "Projects",
        "about.stat.tools": "BI Tools",
        "about.stat.languages": "Languages",

        // Skills
        "skills.title": "Technical Skills",
        "skills.bi": "Business Intelligence",
        "skills.etl": "Data Engineering & ETL",
        "skills.dev": "Development",
        "skills.ai": "AI & LLM",
        "skills.db": "Databases",
        "skills.modeling": "Data Modeling",
        "skills.tools": "Tools & Methods",

        // Experience
        "exp.title": "Experience",
        "exp.1.date": "02/2026 – 06/2026",
        "exp.1.role": "BI & AI Developer Intern",
        "exp.1.company": "B2M-IT",
        "exp.1.desc1": "Built a BI chatbot for natural language data analysis",
        "exp.1.desc2": "Used AI models to automate analytical queries",
        "exp.1.desc3": "Created Power BI dashboards with multiple business KPIs",
        "exp.1.desc4": "Built a FastAPI backend with Streamlit + Power Apps interface",
        "exp.2.date": "07/2025 – 08/2025",
        "exp.2.role": "Data Engineering Intern",
        "exp.2.company": "B2M IT",
        "exp.2.desc1": "Designed ETL pipelines with SSIS and SQL Server",
        "exp.2.desc2": "Processed data from multiple sources",
        "exp.2.desc3": "Structured data for business intelligence use",
        "exp.2.desc4": "Automated analytical data flows",

        // Projects
        "projects.title": "Projects",
        "projects.1.title": "Enterprise Data Warehouse for BBT",
        "projects.1.desc": "Built a Big Data warehouse using PySpark, Hadoop, SQL Server. Visualized insights via interactive Power BI dashboards.",
        "projects.2.title": "NYC Yellow Taxi Trips Analysis",
        "projects.2.desc": "Full BI solution on NYC taxi dataset. ETL with Talend Open Studio, star schema modeling. Power BI dashboards: peak hours, revenue, zones, payment methods.",
        "projects.3.title": "Sales ETL Pipeline & Analysis",
        "projects.3.desc": "Automated Python ETL pipeline for commercial data. KPIs: basket value, conversion rate, repurchase rate. Interactive visuals feeding an analytics dashboard.",
        "projects.btn": "View Details",

        // Education
        "edu.title": "Education",
        "edu.1.degree": "Master's - Information Systems & Knowledge Engineering",
        "edu.1.school": "Faculté des Sciences Économiques et de Gestion de Nabeul",
        "edu.1.date": "09/2024 – 10/2026",
        "edu.2.degree": "Bachelor in IT / DSI",
        "edu.2.school": "Institut Supérieur des Études Technologiques de Kelibia",
        "edu.2.date": "09/2021 – 07/2024",

        // Contact
        "contact.title": "Get In Touch",
        "contact.info.title": "Contact Information",
        "contact.form.title": "Send a Message",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.btn": "Send Message",

        // Footer
        "footer.text": "© 2026 Mohamed Wassim Garali — Built with passion & data"
    },

    fr: {
        // Navbar
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "nav.experience": "Expérience",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        // Hero
        "hero.tagline": "Transformer les données brutes en décisions stratégiques.",
        "hero.btn.projects": "Voir Projets",
        "hero.btn.cv": "Télécharger CV",

        // Typing texts
        "typing.texts": ["Développeur BI", "Analyste de Données", "Expert Power BI", "Ingénieur ETL"],

        // About
        "about.title": "À propos de moi",
        "about.bio": "Je suis un analyste BI & Data passionné basé à Nabeul, Tunisie, spécialisé dans la transformation de données complexes en informations exploitables. Avec une expertise en Power BI, pipelines ETL et ingénierie des données, j'aide les entreprises à prendre des décisions basées sur les données grâce à des tableaux de bord interactifs et des solutions analytiques automatisées.",
        "about.location": "Nabeul, Tunisie",
        "about.status": "Ouvert aux opportunités",
        "about.stat.internships": "Stages",
        "about.stat.projects": "Projets",
        "about.stat.tools": "Outils BI",
        "about.stat.languages": "Langues",

        // Skills
        "skills.title": "Compétences Techniques",
        "skills.bi": "Intelligence d'Affaires",
        "skills.etl": "Ingénierie des Données & ETL",
        "skills.dev": "Développement",
        "skills.ai": "IA & LLM",
        "skills.db": "Bases de Données",
        "skills.modeling": "Modélisation des Données",
        "skills.tools": "Outils & Méthodes",

        // Experience
        "exp.title": "Expérience",
        "exp.1.date": "02/2026 – 06/2026",
        "exp.1.role": "Stagiaire Développeur BI & IA",
        "exp.1.company": "B2M-IT",
        "exp.1.desc1": "Développement d'un chatbot BI pour l'analyse de données en langage naturel",
        "exp.1.desc2": "Utilisation de modèles IA pour automatiser les requêtes analytiques",
        "exp.1.desc3": "Création de tableaux de bord Power BI avec plusieurs KPIs métiers",
        "exp.1.desc4": "Développement d'un backend FastAPI avec interface Streamlit + Power Apps",
        "exp.2.date": "07/2025 – 08/2025",
        "exp.2.role": "Stagiaire Ingénierie des Données",
        "exp.2.company": "B2M IT",
        "exp.2.desc1": "Conception de pipelines ETL avec SSIS et SQL Server",
        "exp.2.desc2": "Traitement de données provenant de multiples sources",
        "exp.2.desc3": "Structuration des données pour l'utilisation en BI",
        "exp.2.desc4": "Automatisation des flux de données analytiques",

        // Projects
        "projects.title": "Projets",
        "projects.1.title": "Entrepôt de Données Entreprise pour BBT",
        "projects.1.desc": "Construction d'un entrepôt Big Data avec PySpark, Hadoop, SQL Server. Visualisation des insights via des tableaux de bord Power BI interactifs.",
        "projects.2.title": "Analyse des Trajets Taxi NYC",
        "projects.2.desc": "Solution BI complète sur le dataset taxi NYC. ETL avec Talend Open Studio, modélisation en étoile. Tableaux de bord Power BI : heures de pointe, revenus, zones, modes de paiement.",
        "projects.3.title": "Pipeline ETL & Analyse des Ventes",
        "projects.3.desc": "Pipeline ETL Python automatisé pour données commerciales. KPIs : panier moyen, taux de conversion, taux de rachat. Visuels interactifs alimentant un tableau de bord analytique.",
        "projects.btn": "Voir Détails",

        // Education
        "edu.title": "Formation",
        "edu.1.degree": "Master - Systèmes d'Information & Ingénierie des Connaissances",
        "edu.1.school": "Faculté des Sciences Économiques et de Gestion de Nabeul",
        "edu.1.date": "09/2024 – 10/2026",
        "edu.2.degree": "Licence en Informatique / DSI",
        "edu.2.school": "Institut Supérieur des Études Technologiques de Kelibia",
        "edu.2.date": "09/2021 – 07/2024",

        // Contact
        "contact.title": "Me Contacter",
        "contact.info.title": "Informations de Contact",
        "contact.form.title": "Envoyer un Message",
        "contact.form.name": "Nom",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.btn": "Envoyer",

        // Footer
        "footer.text": "© 2026 Mohamed Wassim Garali — Construit avec passion & données"
    }
};

// ============================================
// STATE
// ============================================

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// ============================================
// FUNCTIONS
// ============================================

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[lang][key];
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update typing animation texts
    if (window.TypingUtils && translations[lang]["typing.texts"]) {
        window.TypingUtils.setTexts(translations[lang]["typing.texts"]);
    }
}

/**
 * Toggle between English and French
 */
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations(currentLang);
    updateLangButton();
}

/**
 * Update the language toggle button text
 */
function updateLangButton() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
        langBtn.setAttribute('title', currentLang === 'en' ? 'Passer en Français' : 'Switch to English');
    }
}

// ============================================
// INITIALIZATION
// ============================================

function initLang() {
    applyTranslations(currentLang);
    updateLangButton();

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    console.log('Lang.js initialized - Current language:', currentLang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
} else {
    initLang();
}
