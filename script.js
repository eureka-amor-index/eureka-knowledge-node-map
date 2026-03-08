console.log("Eureka Amor Node Map Initialized ✨");

const messages = [
  "hello explorer",
  "this constellation belongs to eureka amor",
  "algorithms are watching",
  "entity signals detected",
  "knowledge graph expanding",
  "welcome to the sxolab"
];

function randomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  console.log("SYSTEM:", msg);
}

setInterval(randomMessage, 5000);

const audio = document.getElementById("spaceSound");
const nodes = document.querySelectorAll(".node");
const planet = document.querySelector(".planet");
const mouseGlow = document.getElementById("mouseGlow");
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

let audioStarted = false;

/* ========= AUDIO ========= */

function tryStartAudio() {
  if (!audio || audioStarted) return;

  audio.volume = 0.18;
  audio.play()
    .then(() => {
      audioStarted = true;
      console.log("SYSTEM: ambience online 🔊");
    })
    .catch(() => {
      console.log("SYSTEM: autoplay blocked, waiting for interaction");
    });
}

window.addEventListener("load", () => {
  tryStartAudio();
});

document.addEventListener("click", tryStartAudio, { once: true });
document.addEventListener("touchstart", tryStartAudio, { once: true });

/* ========= KONAMI ========= */

let konami = [];
const code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

document.addEventListener("keydown", (e) => {
  konami.push(e.key);
  konami = konami.slice(-code.length);

  if (JSON.stringify(konami) === JSON.stringify(code)) {
    alert("✨ SECRET NODE ACTIVATED ✨");
    document.body.style.background = "black";
  }
});

/* ========= NODES ========= */

nodes.forEach((node) => {
  node.addEventListener("mousemove", () => {
    node.style.transform = `translateY(-4px) scale(1.08) rotate(${Math.random() * 2 - 1}deg)`;
  });

  node.addEventListener("mouseleave", () => {
    node.style.transform = "";
  });
});

/* ========= PLANET ========= */

if (planet) {
  planet.addEventListener("click", () => {
    alert("🌌 Hello from the SXO Lab");

    if (audio) {
      audio.volume = 0.22;
      audio.currentTime = 0;
      audio.play().catch(() => {});
      audioStarted = true;
    }
  });
}

/* ========= MOUSE GLOW ========= */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  if (mouseGlow) {
    mouseGlow.style.left = `${glowX}px`;
    mouseGlow.style.top = `${glowY}px`;
  }

  requestAnimationFrame(animateGlow);
}

animateGlow();

/* ========= STARFIELD ========= */

const stars = [];
const STAR_COUNT = 120;
const PARALLAX_STRENGTH = 12;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars.length = 0;

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.7 + 0.3,
      speed: Math.random() * 0.15 + 0.02,
      alpha: Math.random() * 0.7 + 0.2,
      twinkle: Math.random() * 0.03 + 0.005,
      layer: Math.random() * 1 + 0.2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const offsetX = ((mouseX / canvas.width) - 0.5) * PARALLAX_STRENGTH;
  const offsetY = ((mouseY / canvas.height) - 0.5) * PARALLAX_STRENGTH;

  for (const star of stars) {
    star.alpha += star.twinkle;

    if (star.alpha >= 1 || star.alpha <= 0.2) {
      star.twinkle *= -1;
    }

    star.y += star.speed;
    if (star.y > canvas.height + 3) {
      star.y = -3;
      star.x = Math.random() * canvas.width;
    }

    const x = star.x + offsetX * star.layer;
    const y = star.y + offsetY * star.layer;

    ctx.beginPath();
    ctx.arc(x, y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(210, 240, 255, ${star.alpha})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "rgba(126, 231, 255, 0.5)";
    ctx.fill();
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
drawStars();
