const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const restartButton = document.getElementById("restart");

let isGameOver = false;

// Função para pular
const jump = () => {
  if (isGameOver) return; // Evita pulo após o jogo acabar

  if (!mario.classList.contains("jump")) {
    mario.classList.add("jump");

    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

// Loop principal do jogo
const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    isGameOver = true;

    // Parar animações
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    // Alterar sprite do Mario para Game Over
    mario.src = "./Images/game-over.png";
    mario.style.width = "70px";
    mario.style.marginLeft = "50px";

    // Exibir botão de reinício
    restartButton.classList.remove("hidden");

    clearInterval(gameLoop);
  }
}, 10);

// Função para reiniciar o jogo
restartButton.addEventListener("click", () => {
  location.reload();
});

// Eventos de tecla e toque para pular
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
