/*
  LANGUAGE SWITCH — English / French
  ----------------------------------
  The English text is written directly in the HTML.
  Every element with a data-i18n="key" attribute gets its French text
  from the FRENCH list below, using that key.

  Attributes work the same way, with one data attribute each:
    data-i18n-alt="key"         the text of an image (alt)
    data-i18n-placeholder="key" the grey hint inside a form field
    data-i18n-aria-label="key"  the name read out by screen readers
    data-i18n-content="key"     the page description (<meta>)

  The visitor's choice is saved. On a first visit, the site follows
  the language of the browser.
*/

const FRENCH = {
    /* ---------- on every page: header, menu, footer ---------- */
    "a11y.theme": `Basculer entre le thème clair et le thème sombre`,
    "a11y.navLeft": `Navigation principale, gauche`,
    "a11y.navRight": `Navigation principale, droite`,
    "a11y.navMobile": `Menu mobile`,
    "a11y.top": `Retour en haut`,
    "nav.home": `Accueil`,
    "nav.about": `À propos`,
    "nav.projects": `Projets`,
    "nav.toolkit": `Outils`,
    "btn.contact": `Me contacter <span aria-hidden="true">→</span>`,
    "btn.cv": `Mon CV (PDF) <span aria-hidden="true">↗</span>`,
    "footer.made": `Codé à la main en HTML, CSS et JS`,

    /* ---------- home page ---------- */
    "home.title": `Eric J. Kimbembe — Développeur front-end`,
    "home.description": `Portfolio d'Eric J. Kimbembe, futur développeur front-end. Codé à la main en HTML, CSS et JavaScript.`,
    "home.hello": `Salut&nbsp;! Je suis`,
    "home.role": `Développeur <em>front-end</em> en devenir`,
    "home.lead": `Je crée à la main des pages web claires et responsives, en soignant les petits détails qui leur donnent vie.`,
    "home.seeWork": `Voir mes projets <span aria-hidden="true">↓</span>`,
    "home.bannerAlt": `Illustration d'un développeur qui code sur un ordinateur portable`,
    "home.scroll": `Défiler`,
    "home.scrollLabel": `Aller à la section À propos`,

    "about.alt": `Illustration d'Eric`,
    "about.eyebrow": `01 — À propos`,
    "about.title": `La partie du web <em>que l'on voit</em> est ma préférée.`,
    "about.p1": `Je suis Eric, étudiant en première année de développement web à Need for School, à Rouen. Je suis venu au code par le graphisme&nbsp;: l'apparence d'une page et ce qu'on ressent en la parcourant comptent autant pour moi que la façon dont elle est construite.`,
    "about.p2": `Je construis des sites responsives à la main, en HTML, CSS et JavaScript, sans framework. Je parle couramment anglais et swahili, et j'apprends le français. Je recherche une alternance ou un stage en développement front-end.`,
    "about.v1text": `Un HTML sémantique et lisible`,
    "about.v2": `Mise en page`,
    "about.v2text": `Flexbox et Grid, adaptés à tous les écrans`,
    "about.v3": `Mouvement`,
    "about.v3text": `De petites animations, toujours utiles`,

    "projects.eyebrow": `02 — Réalisations`,
    "projects.title": `Mes <span>projets</span>`,
    "projects.intro": `Ce que j'ai réalisé jusqu'ici, en code comme en design.`,
    "card.more": `Voir le projet <span aria-hidden="true">→</span>`,
    "card.velo.alt": `Page d'accueil du site Rouen à Vélo`,
    "card.velo.altDark": `Page d'accueil du site Rouen à Vélo, en mode sombre`,
    "card.velo.text": `Un site de cinq pages pour un atelier de location et de réparation de vélos&nbsp;: catalogue avec recherche, réservation avec prix en direct, mode sombre.`,
    "card.portfolio.alt": `Page d'accueil de ce portfolio`,
    "card.portfolio.altDark": `Page d'accueil de ce portfolio, en mode sombre`,
    "card.portfolio.title": `Ce portfolio`,
    "card.portfolio.text": `Un portfolio responsive et animé, écrit de A à Z, avec un thème clair et un thème sombre.`,
    "card.design.label": `Graphisme`,
    "card.design.title": `Visuels pour un client`,
    "card.design.text": `Visuels pour les réseaux sociaux et affiches, réalisés sur commande pour un client.`,

    "skills.eyebrow": `03 — Boîte à outils`,
    "skills.title": `Ce que <em>j'utilise</em>`,
    "skills.html": `Structure sémantique, formulaires, bases de l'accessibilité`,
    "skills.css": `Variables CSS, transitions, animations`,
    "skills.flexbox": `Alignement et mises en page sur un axe`,
    "skills.grid": `Mises en page responsives en deux dimensions`,
    "skills.js": `DOM, événements et interactions comme celles de cette page`,
    "skills.designName": `Graphisme`,
    "skills.design": `Photoshop, Illustrator et Canva pour les visuels et les affiches`,
    "next.title": `Prochaines étapes`,
    "next.js": `Approfondir JavaScript`,
    "next.git": `Git et GitHub`,
    "next.online": `Mettre un site en ligne`,
    "next.note": `Toujours en apprentissage <span aria-hidden="true">✦</span>`,
    "cta.question": `Un projet, un stage ou une question&nbsp;?`,
    "cta.talk": `Parlons-<em>en</em> <span aria-hidden="true">→</span>`,

    /* ---------- contact page ---------- */
    "contact.description": `Contactez Eric J. Kimbembe, futur développeur front-end.`,
    "contact.title1": `J'ai hâte de`,
    "contact.title2": `<em>vous</em> lire`,
    "contact.lead": `Une école, un stage, un projet ou juste un bonjour&nbsp;: ma boîte mail est ouverte.`,
    "contact.formTitle": `Me contacter`,
    "form.name": `Nom complet`,
    "form.namePh": `Votre nom complet`,
    "form.nameError": `Indiquez votre nom.`,
    "form.email": `E-mail`,
    "form.emailPh": `Votre adresse e-mail`,
    "form.emailError": `Saisissez une adresse e-mail valide.`,
    "form.subject": `Sujet`,
    "form.subjectChoose": `Choisissez un sujet`,
    "form.subjectInternship": `Stage / alternance`,
    "form.subjectSchool": `École`,
    "form.subjectProject": `Projet`,
    "form.subjectHi": `Juste un bonjour`,
    "form.subjectError": `Choisissez un sujet.`,
    "form.messagePh": `Votre message`,
    "form.messageError": `Écrivez un petit message.`,
    "form.consent": `J'accepte que mes données soient utilisées pour me répondre.`,
    "form.send": `Envoyer le message <span aria-hidden="true">→</span>`,

    /* ---------- both project pages ---------- */
    "project.back": `<span aria-hidden="true">←</span> Tous les projets`,
    "project.backToProjects": `<span aria-hidden="true">←</span> Retour aux projets`,
    "project.builtEyebrow": `Ce que j'ai réalisé`,
    "facts.stack": `Technologies`,
    "facts.stackValue": `HTML, CSS, JavaScript — sans framework`,
    "facts.language": `Langue`,
    "facts.hosting": `Hébergement`,
    "shots.label": `Thème des captures d'écran`,
    "shots.title": `Captures`,
    "shots.light": `Clair`,
    "shots.dark": `Sombre`,
    "phone.home": `Page d'accueil sur un téléphone`,
    "phone.homeDark": `Page d'accueil sur un téléphone, en mode sombre`,
    "phone.contact": `Page de contact sur un téléphone`,
    "phone.contactDark": `Page de contact sur un téléphone, en mode sombre`,

    /* ---------- Rouen à Vélo project page ---------- */
    "velo.description": `Rouen à Vélo : un site de cinq pages pour un atelier de location et de réparation de vélos, réalisé en HTML, CSS et JavaScript.`,
    "velo.eyebrow": `Projet de formation · 2026`,
    "velo.lead": `Un site de cinq pages pour un atelier de location et de réparation de vélos sur les quais de Seine, pensé pour les visiteurs sur mobile.`,
    "velo.visit": `Voir le site <span aria-hidden="true">→</span>`,
    "velo.factType": `Projet de formation, Need for School`,
    "velo.factPages": `Accueil, vélos, atelier, balades, contact`,
    "velo.factLanguage": `Français`,
    "velo.shotHome": `Page d'accueil de Rouen à Vélo avec une vue illustrée de la Seine`,
    "velo.shotHomeDark": `Page d'accueil de Rouen à Vélo avec une vue illustrée de la Seine, en mode sombre`,
    "velo.briefEyebrow": `Le brief`,
    "velo.briefTitle": `Une cliente qui <em>perdait des clients</em>`,
    "velo.brief1": `La cliente (fictive) tient un petit atelier de vélos à Rouen et n'avait pas de site. Ses clients, des touristes et des Rouennais qui cherchent sur leur téléphone, lui posaient sans cesse les deux mêmes questions&nbsp;: ce vélo est-il disponible, et combien va-t-il coûter&nbsp;?`,
    "velo.brief2": `Le site devait répondre aux deux avant leur venue, présenter l'atelier et ses tarifs, et rester agréable sur un petit écran. La règle&nbsp;: uniquement HTML, CSS et JavaScript, sans bibliothèque ni framework.`,
    "velo.builtTitle": `D'un fichier de données à une <em>réservation</em>`,
    "velo.catalogue": `Les dix vélos sont générés à partir d'un fichier de données JavaScript, avec recherche, filtres par catégorie et tri par prix`,
    "velo.bookingName": `Réservation`,
    "velo.booking": `Une fenêtre calcule le prix exact en direct&nbsp;: durée, casque, antivol ou siège enfant, et 10&nbsp;% de réduction dès trois jours`,
    "velo.darkName": `Mode sombre`,
    "velo.dark": `Un bouton qui mémorise le choix, et qui passe en sombre tout seul le soir`,
    "velo.mobile": `Mise en page responsive avec un menu burger qui fonctionne même sans JavaScript`,
    "velo.contentName": `Contenu`,
    "velo.content": `Tarifs des réparations, équipe, FAQ, six balades, horaires, formulaire de contact et plan`,
    "velo.shotCatalogue": `Catalogue de vélos avec recherche, filtres et tri`,
    "velo.shotCatalogueDark": `Catalogue de vélos avec recherche, filtres et tri, en mode sombre`,
    "velo.captionCatalogue": `Le catalogue&nbsp;: recherche, filtres et tri`,
    "velo.shotBooking": `Fenêtre de réservation avec les options et le prix total`,
    "velo.shotBookingDark": `Fenêtre de réservation avec les options et le prix total, en mode sombre`,
    "velo.captionBooking": `La fenêtre de réservation et son total en direct`,
    "velo.phoneBikes": `Catalogue de vélos sur un téléphone`,
    "velo.phoneBikesDark": `Catalogue de vélos sur un téléphone, en mode sombre`,
    "velo.captionPhones": `Accueil, vélos et contact sur téléphone`,

    /* ---------- portfolio project page ---------- */
    "folio.description": `Comment j'ai créé mon portfolio : un site responsive codé à la main en HTML, CSS et JavaScript, avec un thème clair et un thème sombre.`,
    "folio.eyebrow": `Projet personnel · 2026`,
    "folio.title1": `Mon`,
    "folio.lead": `Le site sur lequel vous êtes&nbsp;: un endroit pour montrer mon travail et mon parcours vers le développement front-end, codé à la main et pensé pour tous les écrans.`,
    "folio.factType": `Projet personnel`,
    "folio.factPages": `Accueil, contact, pages projets`,
    "folio.shotHome": `Page d'accueil du portfolio avec son en-tête vert et son illustration`,
    "folio.shotHomeDark": `Page d'accueil du portfolio avec son en-tête vert et son illustration, en mode sombre`,
    "folio.goalEyebrow": `L'objectif`,
    "folio.goalTitle": `Un CV <em>interactif</em>`,
    "folio.goal1": `Je recherche une alternance ou un stage en développement front-end. Un CV peut citer HTML, CSS et JavaScript&nbsp;; un portfolio peut les montrer. Le site lui-même devait donc servir de preuve&nbsp;: clair, rapide à lire sur un téléphone et soigné dans les détails.`,
    "folio.goal2": `Il repose sur ma propre identité visuelle&nbsp;: la palette verte, le logo EJK suspendu sous l'en-tête et les illustrations. La règle&nbsp;: du HTML, du CSS et du JavaScript, sans framework ni modèle.`,
    "folio.builtTitle": `Chaque détail <em>compte</em>`,
    "folio.themeName": `Clair et sombre`,
    "folio.theme": `Un bouton de thème avec une lune dessinée en CSS, mémorisé sur chaque page`,
    "folio.responsive": `Des mises en page Grid et Flexbox, du petit téléphone au grand écran, avec un menu plein écran sur mobile`,
    "folio.motionName": `Animation`,
    "folio.motion": `Des titres qui glissent, des sections qui apparaissent au défilement et des cartes qui s'inclinent vers la souris`,
    "folio.formName": `Formulaire`,
    "folio.form": `Chaque champ est vérifié en JavaScript, avec un message clair sur ce qu'il faut corriger`,
    "folio.a11yName": `Accessibilité`,
    "folio.a11y": `HTML sémantique, focus clavier visible, contrastes lisibles et une version plus calme pour qui préfère moins d'animations`,
    "folio.langName": `Bilingue`,
    "folio.lang": `Anglais et français sur toutes les pages, selon la langue du navigateur ou au choix`,
    "folio.shotProjects": `Section projets avec trois cartes`,
    "folio.shotProjectsDark": `Section projets avec trois cartes, en mode sombre`,
    "folio.captionProjects": `La section projets`,
    "folio.shotContact": `Page de contact avec réseaux sociaux et formulaire`,
    "folio.shotContactDark": `Page de contact avec réseaux sociaux et formulaire, en mode sombre`,
    "folio.captionContact": `La page de contact et son formulaire`,
    "folio.phoneMenu": `Menu plein écran sur un téléphone`,
    "folio.phoneMenuDark": `Menu plein écran sur un téléphone, en mode sombre`,
    "folio.captionPhones": `Accueil, menu et contact sur téléphone`,
};

const ATTRIBUTES = ["alt", "placeholder", "aria-label", "content"];
const langToggle = document.querySelector(".lang-toggle");

function setLanguage(lang) {
    const french = lang === "fr";
    document.documentElement.lang = lang;

    // 1. Text inside elements. The English is kept in data-en the first time.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
        el.innerHTML = french ? FRENCH[el.dataset.i18n] ?? el.dataset.en : el.dataset.en;
    });

    // 2. Attributes (alt, placeholder, aria-label, content), kept in data-en-alt etc.
    ATTRIBUTES.forEach((attr) => {
        document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
            const saved = `data-en-${attr}`;
            if (!el.hasAttribute(saved)) el.setAttribute(saved, el.getAttribute(attr));
            const key = el.getAttribute(`data-i18n-${attr}`);
            el.setAttribute(attr, french ? FRENCH[key] ?? el.getAttribute(saved) : el.getAttribute(saved));
        });
    });

    // 3. The button always offers the other language.
    langToggle.textContent = french ? "EN" : "FR";
    langToggle.lang = french ? "en" : "fr";
    langToggle.setAttribute("aria-label", french ? "English version" : "Version française");
}

langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "fr" ? "en" : "fr";
    setLanguage(next);
    try { localStorage.setItem("portfolio-lang", next); } catch (e) { /* storage blocked */ }
});

// On load: the saved choice, otherwise the browser's language.
let savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) { /* storage blocked */ }
if ((savedLang || navigator.language).startsWith("fr")) setLanguage("fr");
