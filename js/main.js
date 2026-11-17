/*
  PORTFOLIO — interactions
  Plain JavaScript, no library. Each numbered block is independent:
  you can delete one without breaking the others.
*/

/* Put your email here to make the contact form open the visitor's
   mail app with the message ready to send (no server needed).
   Example: const CONTACT_EMAIL = "hello@example.com"; */
const CONTACT_EMAIL = "";

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- 1. Light / dark theme ----------
   The "dark" class on <html> switches the colours (see :root.dark in the CSS).
   The choice is saved, and js/theme.js reads it back on every page. */
const toggle = document.querySelector(".theme-toggle");
toggle.addEventListener("click", () => {
    const dark = root.classList.toggle("dark");
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch (e) { /* storage blocked */ }
});

/* ---------- 2. Logo: full spin when clicked ---------- */
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    if (reduceMotion) return;
    logo.firstElementChild.animate({ transform: "rotate(360deg)" }, { duration: 800, easing: "ease-out" });
});

/* ---------- 3. Mobile menu ---------- */
const burger = document.querySelector(".burger");
function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.querySelector(".mobile-menu").addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* ---------- 4. Scroll: progress bar, header shadow, to-top button ---------- */
const progress = document.querySelector(".progress");
const toTop = document.querySelector(".to-top"); // not on the contact page
function onScroll() {
    const max = root.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    document.body.classList.toggle("scrolled", window.scrollY > 20);
    // shown after scrolling a bit; hidden again at the very bottom so it never covers the footer text
    if (toTop) toTop.classList.toggle("show", window.scrollY > 500 && window.scrollY < max - 60);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- 5. Reveal elements when they enter the screen ---------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
    });
}, { threshold: 0.15 });

document.querySelectorAll("[data-reveal]").forEach((el) => {
    // siblings appear one after the other
    const index = [...el.parentElement.children].indexOf(el);
    el.style.animationDelay = Math.min(index * 80, 400) + "ms";
    observer.observe(el);
});

/* ---------- 6. Mouse effects (computers only) ---------- */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    /* hero illustration follows the mouse a little (home page only) */
    const layers = document.querySelectorAll("[data-depth]");
    if (layers.length) {
        window.addEventListener("mousemove", (e) => {
            const dx = e.clientX / window.innerWidth - 0.5;
            const dy = e.clientY / window.innerHeight - 0.5;
            layers.forEach((layer) => {
                layer.style.setProperty("--px", dx * layer.dataset.depth + "px");
                layer.style.setProperty("--py", dy * layer.dataset.depth + "px");
            });
        });
    }

    /* cards tilt towards the mouse */
    document.querySelectorAll("[data-tilt]").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 8 + "deg");
            card.style.setProperty("--rx", ((e.clientY - r.top) / r.height - 0.5) * -8 + "deg");
        });
        card.addEventListener("mouseleave", () => {
            card.style.removeProperty("--ry");
            card.style.removeProperty("--rx");
        });
    });

    /* buttons are slightly attracted by the mouse */
    document.querySelectorAll(".magnetic").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) * 0.2;
            const y = (e.clientY - r.top - r.height / 2) * 0.3;
            btn.style.transform = "translate(" + x + "px," + y + "px)";
        });
        btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
}

/* ---------- 7. Project page: choose light or dark screenshots ----------
   By default the screenshots follow the site theme (done in CSS).
   The Light / Dark buttons override it; changing the site theme resets it. */
const shotButtons = document.querySelectorAll(".shot-switch button");
if (shotButtons.length) {
    const page = document.querySelector(".project");
    const refresh = () => {
        const shown = page.dataset.shots || (root.classList.contains("dark") ? "dark" : "light");
        shotButtons.forEach((b) => b.setAttribute("aria-pressed", b.dataset.shots === shown));
    };
    shotButtons.forEach((b) => b.addEventListener("click", () => {
        page.dataset.shots = b.dataset.shots;
        refresh();
    }));
    toggle.addEventListener("click", () => {
        delete page.dataset.shots;
        refresh();
    });
    refresh();
}

/* ---------- 8. Contact form (validation, no server) ---------- */
const form = document.querySelector("#contact-form");
if (form) {
    const note = form.querySelector(".form-note");
    const fields = form.querySelectorAll("input:not([type=checkbox]), select, textarea");

    // shows or hides the red message under a field
    const check = (field) => {
        const ok = field.checkValidity();
        field.closest("label").classList.toggle("invalid", !ok);
        return ok;
    };
    fields.forEach((field) => field.addEventListener("blur", () => check(field)));

    const fail = (message) => {
        note.textContent = message;
        note.className = "form-note full is-error";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const valid = [...fields].map(check).every(Boolean);
        if (!valid) return fail("Please fix the fields in red.");
        if (!form.consent.checked) return fail("Please tick the box so I can reply to you.");

        const name = form.name.value.trim();
        if (CONTACT_EMAIL) {
            const subject = encodeURIComponent("[Portfolio] " + form.subject.value + " — " + name);
            const body = encodeURIComponent(form.message.value + "\n\n" + name + "\n" + form.email.value);
            window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
            note.textContent = "Thanks, " + name + "! Your mail app is opening with the message ready to send.";
        } else {
            note.textContent = "Thanks, " + name + "! (Demo: this form is not connected to a mailbox yet.)";
        }
        note.className = "form-note full is-ok";
        form.reset();
    });
}
