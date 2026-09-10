const form = document.getElementById("config-form");

const mainBlock = document.querySelector("#main-block");
mainBlock.style.display = "none";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pseudo = form.pseudo.value;

  const mode = form.mode.value;

  const difficulty = Number(form.difficulty.value);

  const duration = form.duration.value;

  //   console.log(pseudo);

  //   console.log(mode);

  //   console.log(difficulty, typeof difficulty);

  //   console.log(duration);

  document.querySelector(".config").style.display = "none";


  createBoxes(difficulty);
  
  mainBlock.style.display = "flex";
  
  choseRandomBox();
 

  //   console.log(mainBlock);
});

function createBoxes(size) {
  mainBlock.innerHTML = "";

  const containerSize = 500 - 8;

  const numberOfBoxes = Math.floor((containerSize + 4) / (size + 4));

  // Create boxes

  for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
    const box = document.createElement("div");

    box.classList.add("fils-block");

    box.id = i + 1;

    box.style.width = size + "px";

    box.style.height = size + "px";

    mainBlock.appendChild(box);
  }
}

function choseRandomBox() {
  let random_values = [];

  const filsBlocks = mainBlock.getElementsByClassName("fils-block");
  for (let i = 1; i < filsBlocks.length + 1; i++) {
    random_values.push(i);
  }
  //   console.log(random_values);
  const random_box_id =
    random_values[Math.floor(Math.random() * random_values.length)];

  const random_box = document.getElementById(`${random_box_id}`);
  console.log(random_box_id);

  random_box.style.background = "black";
//   const fils_box = document.querySelectorAll(".fils-block");
//   console.log(fils_box);
}



