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

    document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme") || "light"
    );

    learnMoreBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    const particles = document.getElementById("particles");

    for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 10 + 6}s`;
    p.style.animationDelay = `-${Math.random() * 10}s`;

    particles.appendChild(p);
}for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 10 + 6}s`;
    p.style.animationDelay = `-${Math.random() * 10}s`;

    particles.appendChild(p);
}for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 10 + 6}s`;
    p.style.animationDelay = `-${Math.random() * 10}s`;

    particles.appendChild(p);
}
    }

});
