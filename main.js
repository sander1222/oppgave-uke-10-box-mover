const box = document.getElementById("box");

let xPos = 50;
let yPos = 50;

// window.addEventListener("click", e);

function updatePosition() {
  box.style.left = xPos + "px";
  box.style.top = yPos + "px";
}

window.addEventListener("keydown", (e) => {
  const step = 10;
  if (e.key === "ArrowUp" || e.key === "W" || e.key === "w") {
    yPos -= step;
  }
  if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
    xPos -= step;
  }
  if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
    yPos += step;
  }
  if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
    xPos += step;
  }
  updatePosition();
});

updatePosition();

// får bevegelse i boksen med left click
window.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
  xPos = e.clientX;
  yPos = e.clientY;

  updatePosition();
});

updatePosition();

// mvh Benjamin
document.addEventListener("keydown", () => {
  const audio = new Audio("dognoise.mp3");
  audio.play();
});
