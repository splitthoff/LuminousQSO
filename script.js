const categories = ["gold", "silver", "discarded"];

const files = {
  gold: ["1.png", "2.png"],
  silver: ["3.png"],
  discarded: ["4.png"]
};

categories.forEach(cat => {
  const container = document.getElementById(cat);

  files[cat].forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${cat}/${file}`;
    container.appendChild(img);
  });
});
