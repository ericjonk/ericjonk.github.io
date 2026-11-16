/*
  Loaded in the <head>, so it runs before the page is drawn:
  no flash of the wrong theme when you arrive on a page.
*/
document.documentElement.classList.add("js"); // tells the CSS that JavaScript works

try {
    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.documentElement.classList.add("dark");
    }
} catch (e) {
    // storage is blocked (private window…): the site simply stays light
}
