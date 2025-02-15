document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.querySelector(".puzzle-overlay");
    const clickSound = document.getElementById("clickSound");

    for (let i = 1; i <= 9; i++) {
        let piece = document.createElement("img");
        piece.src = `piece${i}.png`; // Now directly in the main folder
        piece.classList.add("puzzle-piece");
        piece.dataset.index = i;

        piece.addEventListener("click", function () {
            piece.classList.add("hidden");
            clickSound.play();
        });

        puzzleContainer.appendChild(piece);
    }
});
