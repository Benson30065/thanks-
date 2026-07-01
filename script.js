const card = document.querySelector(".card");
const logo = document.querySelector(".logo");
const petalsContainer = document.querySelector(".petals");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = (window.innerWidth / 2 - e.clientX) / 70;
  targetY = (window.innerHeight / 2 - e.clientY) / 70;
});

function animateCard() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;

  card.style.transform = `
    perspective(1000px)
    rotateY(${currentX / 3}deg)
    rotateX(${-currentY / 3}deg)
    translate(${currentX}px, ${currentY}px)
  `;

  requestAnimationFrame(animateCard);
}

animateCard();

logo.addEventListener("mouseenter", () => {
  logo.style.transform = "translateX(-50%) scale(1.08)";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transform = "translateX(-50%) scale(1)";
});

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  const petals = ["🌸", "🤍", "🌺", "✨"];
  petal.textContent = petals[Math.floor(Math.random() * petals.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 4 + 5 + "s";
  petal.style.opacity = Math.random() * 0.6 + 0.35;
  petal.style.fontSize = Math.random() * 14 + 14 + "px";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 9000);
}

for (let i = 0; i < 28; i++) {
  setTimeout(createPetal, i * 130);
}

setInterval(createPetal, 700);
