const card = document.querySelector(".card");
const logo = document.querySelector(".logo");
const heart = document.querySelector(".heart");

window.addEventListener("load", () => {
    card.style.opacity = "1";
});

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;

    card.style.transform = `translate(${x}px, ${y}px)`;
});

logo.addEventListener("mouseenter", () => {
    logo.style.transform = "translateX(-50%) scale(1.1)";
});

logo.addEventListener("mouseleave", () => {
    logo.style.transform = "translateX(-50%) scale(1)";
});

setInterval(() => {
    heart.style.transform = "scale(1.15)";
    setTimeout(() => {
        heart.style.transform = "scale(1)";
    }, 400);
}, 1600);
