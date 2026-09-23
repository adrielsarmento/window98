const aba = document.getElementById("aba");

let arrastando = false;
let offsetX = 0;
let offsetY = 0;

// 1. Quando o usuário clica na aba
aba.addEventListener("mousedown", (e) => {
  arrastando = true;

  // Descobre a posição real atual do elemento na tela (independente do CSS)
  const rect = aba.getBoundingClientRect();

  // Calcula a distância entre o clique do mouse e a borda superior esquerda da aba
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  // Remove temporariamente o efeito de centralização do CSS para não interferir no cálculo
  aba.style.transform = "none";

  // Fixa o elemento na posição exata em que ele já estava antes do movimento começar
  aba.style.left = rect.left + "px";
  aba.style.top = rect.top + "px";
});

// 2. Quando o usuário move o mouse pela tela
document.addEventListener("mousemove", (e) => {
  if (!arrastando) return;

  // Define a nova posição baseada na posição do mouse menos o local onde ele clicou por dentro da aba
  aba.style.left = (e.clientX - offsetX) + "px";
  aba.style.top = (e.clientY - offsetY) + "px";
});

// 3. Quando o usuário solta o botão do mouse
document.addEventListener("mouseup", () => {
  arrastando = false;
});