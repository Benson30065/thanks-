const card = document.querySelector(".thank-card");
const badge = document.querySelector(".church-icon");
const scripture = document.querySelector(".scripture-card");
const petalsContainer = document.querySelector(".petals");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
  document.addEventListener("mousemove", (event) => {
    targetX = (window.innerWidth / 2 - event.clientX) / 72;
    targetY = (window.innerHeight / 2 - event.clientY) / 72;
  });

  function animateCard() {
    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;

    card.style.transform = `
      perspective(1200px)
      rotateY(${currentX / 3.4}deg)
      rotateX(${-currentY / 3.4}deg)
      translate(${currentX}px, ${currentY}px)
    `;

    requestAnimationFrame(animateCard);
  }

  animateCard();
}

badge.addEventListener("mouseenter", () => {
  badge.style.transform = "scale(1.08)";
  badge.style.boxShadow =
    "0 20px 42px rgba(0,0,0,.48), 0 0 40px rgba(255, 214, 118, .62)";
});

badge.addEventListener("mouseleave", () => {
  badge.style.transform = "scale(1)";
  badge.style.boxShadow = "";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scripture.classList.add("visible");
    }
  });
}, {
  threshold: 0.25
});

observer.observe(scripture);

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  const shapes = ["❦", "✦", "✧", "♡", "✿"];
  petal.textContent = shapes[Math.floor(Math.random() * shapes.length)];

  const colors = ["#ffe7a3", "#f6c96f", "#fff6d4", "#f2b6c4"];
  petal.style.color = colors[Math.floor(Math.random() * colors.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 13 + 13 + "px";
  petal.style.animationDuration = Math.random() * 5 + 6 + "s";

  petal.style.setProperty("--drift", (Math.random() * 220 - 110) + "px");
  petal.style.setProperty("--spin", (Math.random() * 700 - 350) + "deg");
  petal.style.setProperty("--petal-opacity", Math.random() * 0.55 + 0.35);

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

for (let i = 0; i < 35; i++) {
  setTimeout(createPetal, i * 110);
}

setInterval(createPetal, 620);
