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
    "home.role": `Développeur front-end · Rouen`,
    "home.tagline": `De <em>l'imagination</em><br>à l'interaction.`,
    "home.lead": `Je transforme des idées créatives en expériences web soignées et responsives, entre design et code.`,
    "home.seeWork": `Découvrir mes projets <span aria-hidden="true">↓</span>`,
    "home.getInTouch": `Me contacter <span aria-hidden="true">→</span>`,
    "home.bannerAlt": `Illustration d'un développeur qui code sur un ordinateur portable`,
    "home.scroll": `Défiler`,
    "home.scrollLabel": `Aller à la section À propos`,

    "about.alt": `Illustration d'Eric, bras croisés, façon autocollant`,
    "about.noteIdeas": `idées`,
    "about.noteHand": `à la main`,
    "about.eyebrow": `01 — Qui je suis`,
    "about.title": `À propos de <em>moi</em>`,
    "about.p1": `Je suis Eric, développeur front-end en formation, basé à Rouen.`,
    "about.p2": `Mon intérêt pour le développement web est né de mon goût pour l'art et la création. Après avoir étudié l'art, j'ai été fasciné par l'idée de transformer des idées créatives en quelque chose d'interactif et de concret grâce au code, pour donner vie à des créations sur un écran.`,
    "about.p3": `Actuellement étudiant en développement web à Need for School, je développe mes compétences en HTML, CSS et JavaScript, en mettant l'accent sur le responsive design et l'expérience utilisateur.`,
    "about.p4": `J'aime expérimenter avec les mises en page, explorer des idées visuelles et trouver comment transformer des concepts en expériences numériques fonctionnelles. Je recherche actuellement un stage ou une alternance où je pourrai continuer à progresser, apporter mes idées et acquérir de l'expérience sur des projets concrets.`,
    "about.factBased": `Basé à`,
    "about.factLooking": `Je recherche`,
    "about.factLookingValue": `Une alternance ou un stage en front-end`,
    "about.factStart": `Date de début`,
    "about.factLanguages": `Langues`,
    "about.factLanguagesValue": `Anglais et swahili (courant), français (en apprentissage)`,

    "projects.eyebrow": `02 — Réalisations`,
    "projects.title": `Mes <span>projets</span>`,
    "projects.intro": `Ce que j'ai réalisé jusqu'ici, et ce qui arrive.`,
    "card.more": `Voir le projet <span aria-hidden="true">→</span>`,
    "card.velo.alt": `Page d'accueil du site Rouen à Vélo`,
    "card.velo.altDark": `Page d'accueil du site Rouen à Vélo, en mode sombre`,
    "card.velo.text": `Un site de cinq pages pour un atelier de location et de réparation de vélos&nbsp;: catalogue avec recherche, réservation avec prix en direct, mode sombre.`,
    "card.portfolio.alt": `Page d'accueil de ce portfolio`,
    "card.portfolio.altDark": `Page d'accueil de ce portfolio, en mode sombre`,
    "card.portfolio.title": `Ce portfolio`,
    "card.portfolio.text": `Un portfolio responsive et animé, écrit de A à Z, avec un thème clair et un thème sombre.`,
    "card.soon.label": `Bientôt`,
    "card.soon.title": `D'autres projets arrivent`,
    "card.soon.text": `De nouveaux projets sont en préparation. Cette section grandira au fil de mes apprentissages.`,

    "skills.eyebrow": `03 — Boîte à outils`,
    "skills.title": `Ce que <em>j'utilise</em>`,
    "skills.layout": `Mise en page`,
    "skills.tools": `Outils`,
    "next.title": `Prochaines étapes`,
    "next.js": `Approfondir JavaScript`,
    "next.react": `Apprendre React`,
    "next.php": `Apprendre PHP`,
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
    "form.subjectPh": `De quoi s'agit-il&nbsp;?`,
    "form.subjectError": `Indiquez un sujet.`,
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
    "facts.client": `Client`,
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
    "velo.lead": `Un site de cinq pages en français pour un atelier de réparation et de location de vélos à Rouen, codé de A à Z en HTML, CSS et JavaScript, et pensé pour les personnes sur téléphone.`,
    "velo.visit": `Voir le site <span aria-hidden="true">→</span>`,
    "velo.factType": `Projet de formation`,
    "velo.factClient": `Atelier de vélos, Rouen (fictif)`,
    "velo.shotHome": `Page d'accueil de Rouen à Vélo avec une vue illustrée de la Seine`,
    "velo.shotHomeDark": `Page d'accueil de Rouen à Vélo avec une vue illustrée de la Seine, en mode sombre`,
    "velo.briefEyebrow": `Le brief`,
    "velo.briefTitle": `Une cliente qui <em>perdait des clients</em>`,
    "velo.brief": `Camille répare et loue des vélos sur le quai de la Bourse, mais elle n’avait pas de site. Ses clients posaient sans cesse les mêmes questions&nbsp;: quels vélos sont libres, combien ils coûtent, combien coûtent les réparations et quand l’atelier est ouvert. Le site devait répondre à ces questions, bien fonctionner sur un petit écran et n’utiliser que HTML, CSS et JavaScript.`,
    "velo.builtTitle": `D'un fichier de données à une <em>réservation</em>`,
    "velo.catalogue": `Les 10 vélos sont créés à partir du fichier de données, avec une recherche qui ignore les accents, des filtres et un tri par prix.`,
    "velo.bookingName": `Réservation`,
    "velo.booking": `Une fenêtre avec une quantité en heures ou en jours, des options (casque, antivol, siège enfant) et un total en direct. Une réduction de 10&nbsp;% s’applique dès 3 jours, et jamais sur les options.`,
    "velo.darkName": `Mode sombre`,
    "velo.dark": `Un bouton qui mémorise votre choix, et qui s’active tout seul de 19&nbsp;h à 7&nbsp;h. Un petit script applique le thème avant l’affichage de la page, donc pas de flash blanc.`,
    "velo.mobile": `Un menu burger, deux cartes de vélos par ligne sur téléphone et des liens pour appeler d’un geste. Sans JavaScript, le menu reste simplement visible.`,
    "velo.contentName": `Contenu`,
    "velo.content": `Tarifs des réparations, l’équipe, une FAQ, six balades, les horaires, un formulaire de contact et un plan.`,
    "velo.shotCatalogue": `Catalogue de vélos avec recherche, filtres et tri`,
    "velo.shotCatalogueDark": `Catalogue de vélos avec recherche, filtres et tri, en mode sombre`,
    "velo.captionCatalogue": `Le catalogue&nbsp;: recherche, filtres et tri`,
    "velo.shotBooking": `Fenêtre de réservation avec les options et le prix total`,
    "velo.shotBookingDark": `Fenêtre de réservation avec les options et le prix total, en mode sombre`,
    "velo.captionBooking": `La fenêtre de réservation et son total en direct`,
    "velo.howEyebrow": `Comment c’est construit`,
    "velo.howTitle": `Simple <em>par choix</em>`,
    "velo.how": `Seule la page des vélos utilise des données. Toutes les autres pages sont en HTML simple, il n’y a donc presque rien à maintenir. Tout le site tient en cinq petits fichiers JavaScript&nbsp;: un pour le thème, un pour le menu et le bouton du mode sombre, et trois pour la page des vélos.`,
    "velo.phoneMenu": `Menu burger ouvert sur un téléphone`,
    "velo.phoneMenuDark": `Menu burger ouvert sur un téléphone, en mode sombre`,
    "velo.phoneBikes": `Catalogue de vélos sur un téléphone`,
    "velo.phoneBikesDark": `Catalogue de vélos sur un téléphone, en mode sombre`,
    "velo.captionPhones": `Accueil, menu et vélos sur téléphone`,

    /* ---------- portfolio project page ---------- */
    "folio.description": `Comment j'ai créé mon portfolio : un site responsive codé à la main en HTML, CSS et JavaScript, avec un thème clair et un thème sombre.`,
    "folio.eyebrow": `Projet personnel · 2026`,
    "folio.title1": `Mon`,
    "folio.lead": `Un espace personnel pour présenter mon travail, suivre ma progression et explorer le lien entre design et code. Construit de A à Z en HTML, CSS et JavaScript, avec une expérience responsive sur tous les écrans.`,
    "folio.factType": `Projet personnel`,
    "folio.factPages": `Accueil, contact, pages projets`,
    "folio.shotHome": `Page d'accueil du portfolio avec son en-tête vert et son illustration`,
    "folio.shotHomeDark": `Page d'accueil du portfolio avec son en-tête vert et son illustration, en mode sombre`,
    "folio.goalEyebrow": `L'objectif`,
    "folio.goalTitle": `Un espace qui <em>me ressemble</em>`,
    "folio.goal": `Je voulais créer un portfolio qui me ressemble, pas un simple modèle rempli de projets. Un espace où réunir mon travail, expérimenter le design et mettre en pratique mes compétences front-end. De la mise en page et l’identité visuelle jusqu’aux plus petites interactions, chaque partie du site a été une occasion d’apprendre, d’expérimenter et de construire quelque chose de A à Z.`,
    "folio.builtTitle": `Chaque détail <em>compte</em>`,
    "folio.themeName": `Clair et sombre`,
    "folio.theme": `Un bouton de thème avec une lune dessinée en CSS, mémorisé sur chaque page`,
    "folio.responsive": `Des mises en page Grid et Flexbox, du petit téléphone au grand écran, avec un menu plein écran sur mobile`,
    "folio.motionName": `Animation`,
    "folio.motion": `Des titres qui glissent, des sections qui apparaissent au défilement et des cartes qui s'inclinent vers la souris`,
    "folio.formName": `Formulaire`,
    "folio.form": `Chaque champ est vérifié en JavaScript, avec un message clair sur ce qu'il faut corriger`,
    "folio.langName": `Bilingue`,
    "folio.lang": `Anglais et français sur toutes les pages, selon la langue du navigateur ou au choix`,
    "folio.shotProjects": `Section projets avec trois cartes`,
    "folio.shotProjectsDark": `Section projets avec trois cartes, en mode sombre`,
    "folio.captionProjects": `La section projets`,
    "folio.shotContact": `Page de contact avec son formulaire`,
    "folio.shotContactDark": `Page de contact avec son formulaire, en mode sombre`,
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
