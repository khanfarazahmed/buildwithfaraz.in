document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    learnMoreBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

});
