console.log("Eureka Amor Node Map Initialized ✨");

const messages = [

"hello explorer",
"this constellation belongs to eureka amor",
"algorithms are watching",
"entity signals detected",
"knowledge graph expanding",
"welcome to the sxolab"
];

function randomMessage(){

const msg = messages[Math.floor(Math.random()*messages.length)];

console.log("SYSTEM:",msg);

}

setInterval(randomMessage,5000);



document.body.addEventListener("click",()=>{

const audio = document.getElementById("spaceSound");

audio.volume=0.4;

audio.play().catch(()=>{});

});



let konami = [];

const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

document.addEventListener("keydown",(e)=>{

konami.push(e.key);

konami = konami.slice(-code.length);

if(JSON.stringify(konami)==JSON.stringify(code)){

alert("✨ SECRET NODE ACTIVATED ✨");

document.body.style.background="black";

}

});



const nodes = document.querySelectorAll(".node");

nodes.forEach(node=>{

node.addEventListener("mouseover",()=>{

node.style.transform="scale(1.15) rotate("+ (Math.random()*4-2)+"deg)";

});

node.addEventListener("mouseout",()=>{

node.style.transform="scale(1)";

});

});



const planet = document.querySelector(".planet");

planet.addEventListener("click",()=>{

alert("🌌 Hello from the SXO Lab");

});

// space ambience sound

const audio = document.getElementById("spaceSound");

function startSound(){

if(audio){

audio.volume = 0.25;

audio.play().catch(()=>{});

}

  // start on first interaction

document.addEventListener("click", startSound, { once:true });

document.addEventListener("touchstart", startSound, { once:true });

}


