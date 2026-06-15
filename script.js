const categories = ["s2"];

const files = {
  s2: ["GaiaDR3763275719257657088.pdf"]
};

categories.forEach(cat => {
  const container = document.getElementById(cat);

  files[cat].forEach(file => {
    const embed = document.createElement("embed");
    embed.src = `${cat}/${file}`;
    embed.type = "application/pdf";
    embed.width = "100%";
    embed.height = "800px";

    container.appendChild(embed);
  });
});
