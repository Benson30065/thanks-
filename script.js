// Fade in page

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".container").classList.add("fade-in");

});

// Animated title

const title = document.getElementById("title");

let visible = true;

setInterval(() => {

    title.style.opacity = visible ? "0.85" : "1";

    visible = !visible;

}, 1200);

// Parallax background

document.addEventListener("mousemove", (e) => {

    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {

        const speed = (index + 1) * 0.01;

        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;

        circle.style.transform = `translate(${x}px, ${y}px)`;

    });

});
