let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("The game was a draw.");
    msg.innerText = "It's a Draw!";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win! Congratulations!");
        msg.innerText = "You Win!";
    } else {
        console.log("You Lose!");
        msg.innerText = "You Lose!";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Determine the winner
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats Scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats Rock
        } else {
            userWin = compChoice === "paper"; // Scissors beats Paper
        }

        // Show winner
        showWinner(userWin);
    }
};

// Add event listeners to all choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
