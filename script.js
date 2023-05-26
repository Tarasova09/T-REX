const dino = document.getElementById("dino"),
  cactus = document.getElementById("cactus");
  ptyro = document.getElementById("ptyro");
document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function() {
    dino.classList.remove("jump")
  }, 300)
}

let isAlive = setInterval (function() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  let ptyroLeft = parseInt(window.getComputedStyle(ptyro).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 ||
        ptyroLeft < 50 && ptyroLeft > 0 && dinoTop <= 100) {
      alert("GAME OVER!");
    }
}, 10);
