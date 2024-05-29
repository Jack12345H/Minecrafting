// Functionize Minecraft Fishing Start Code

//HTML variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let customValue = document.getElementById("numbertofish");
let inventory = document.getElementById("inv");
let button = document.getElementById("button1");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
customValue.addEventListener("change", changeToCustom);
button.addEventListener("click", sortFish);

function fishBtnClicked() {
  // Determine selected character
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "steve") {
    // Steve fishing Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      //Cod
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      inventory.innerHTML += "<img src='img/Raw-Cod.png'>";
      numCodSpan.innerHTML = numCod;
      //Salmon
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
      //Tropical
    } else if (randNum < 0.95) {
      resultImg.src = "<img/Tropical-Fish.png>";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
      // Puffer
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "alex") {
    // Alex fishing Simulator
    let randNum = Math.random();
    console.log(randNum);
    //Cod Alex
    if (randNum <= 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += "<img src='img/Raw-Cod.png'>";
      //Salmon Alex
    } else if (randNum <= 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
      //Tropical Alex
    } else if (randNum <= 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
      //Puffer Alex
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "villager") {
    // Villager fishing Simulator
    let randNum = Math.random();
    console.log(randNum);
    //Villager Cod
    if (randNum <= 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += "<img src='img/Raw-Cod.png'>";
      //Villager Salmon
    } else if (randNum <= 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
      //Villager Tropical
    } else if (randNum <= 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
      //Villager Puffer
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function changeToCustom() {
  let custom = customValue.value;
  for (let n = 1; n <= custom; n++) {
    fishBtnClicked();
  }
}

function sortFish() {
  inventory.innerHTML = "";

  for (let g = 1; g <= numCod; g++) {
    inventory.innerHTML += "<img src='img/Raw-Cod.png'>";
  }

  for (let v = 1; v <= numSalmon; v++) {
    inventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
  }

  for (let x = 1; x <= numTropical; x++) {
    inventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
  }

  for (let b = 1; b <= numPuffer; b++) {
    inventory.innerHTML += "<img src='img/Pufferfish.png'>";
  }
}
