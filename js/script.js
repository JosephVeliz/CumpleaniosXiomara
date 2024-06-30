document.addEventListener("DOMContentLoaded", function() {
  const flowerBackground = document.getElementById("flowerBackground");

  function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 200}vw`;
    flower.style.animationDuration = `${Math.random() * 7 + 6}s`;
    flowerBackground.appendChild(flower);

    flower.addEventListener("animationend", function() {
      flower.remove();
    });
  }

  setInterval(createFlower, 1000);
});
