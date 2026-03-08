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

function startSound() {
  if (audio) {
    audio.volume = 0.25;
    audio.play().catch(() => {});
  }
}

document.addEventListener("click", startSound, { once: true });
document.addEventListener("touchstart", startSound, { once: true });

document.body.addEventListener("click", () => {
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
});

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

nodes.forEach((node) => {
  node.addEventListener("mouseover", () => {
    node.style.transform = "scale(1.15) rotate(" + (Math.random() * 4 - 2) + "deg)";
  });

  node.addEventListener("mouseout", () => {
    node.style.transform = "scale(1)";
  });
});

if (planet) {
  planet.addEventListener("click", () => {
    alert("🌌 Hello from the SXO Lab");

    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.25;
      audio.play().catch(() => {});
    }
  });
}
