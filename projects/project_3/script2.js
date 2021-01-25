/* 
Guess a number between 1 and 100.

The program will generate a secret number which will be hidden. Players need to guess the number by typing the number 
into a box (input element).

Initial score is 0. High Score is 0.

1. When there is no input, and user press check button, there is message showing no input.

2. When user put a wrong number, and user press check button, message shows it is too low or too high. 
There is a score starting from 10 and will be decreasing by 1 every time when user guessing a wrong number.

3. When user put a correct number, background color changes, the secret number shows, background with of 
secret number changes, and high score will be updated or remained the same.

Implement a game rest functionality, so that the player can make a new guess!

1. Select the element with the 'Play' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

3. When user put a correct number, background color changes, the secret number shows,
 background with of secret number changes, and high score will be updated or remained the same.

Implement a game rest functionality, so that the player can make a new guess!

1. Select the element with the 'Play' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input fields

4. Also restore the original background color and number background width
*/

//The below section is to initialize value when the page loads

let number = generateNumber(); // The number generated will be assigned to number and will stay unchaged until the game is reset.

let msgAndScore = ["", 10]; // This array will hold the messages and the default score (10).

let highscore = 0, value = 0; // The high score when the page is opened.

const defaultTextScoreContent = document.querySelector(".score").textContent; // We keep the original content of the element for further use.

const defaultHighscoreContent = document.querySelector(".highscore").textContent; // We keep the original content of the element for further use.

const defaultGuessIndicatorContent = document.querySelector(".guess-indicator").textContent; // We keep the original content of the element for further use.

document.querySelector(".score").textContent = `${defaultTextScoreContent} ${msgAndScore[1]}`; // We set up a default display with the value next to it. we (I) don't want to do extra work for now :( 

document.querySelector(".highscore").textContent = `${defaultHighscoreContent} ${highscore}`; // Same as the above instruction.

document.getElementById("input-number").value = 0;

// The below section are function used to run the games

function guessGameDefault(value, number, score) { // The default range is from 0 -> 100
    console.log(`Value: ${value} - Number: ${number} - Score: ${score}`); // all console.log you will see are just to have a visual on the data

    if (value > number) // if the user input is too high then return an array with the message and the score decreasing
        return ["📈Too high!", score -= 1];
    else if (value < number) // if the user input is too low then return an array with the message and the score decreasing
        return ["📉Too low!", score -= 1];
    else // if guessed right then return the message with the most recent score.
        return ["🎉You found my number!😎", score];
}

function generateNumber() { // This method will generate the number to guess.
    return Math.trunc(Math.random() * 100);
}

function getHighscore(score) { // This method will check if the highscore is still greater than the score at the end of the game.
    return score > highscore ? score : highscore;
}


function defautlInput() {
    document.querySelector("#input-number").value = 0; // reset the input value to zero
}

function disableCheckButton(isDisabled, backgroundColor, border, color) {
    document.getElementById("check-button").disabled = isDisabled;
    document.getElementById("check-button").style.backgroundColor = backgroundColor;
    document.getElementById("check-button").style.border = border;
    document.getElementById("check-button").style.color = color;
}

function effectOnPage(displayBoxColor, bodyBackground, bodyColor) {
    document.querySelector("#display-box").style.backgroundColor = displayBoxColor;
    document.querySelector("body").style.background = bodyBackground;
    document.querySelector("body").style.color = bodyColor;
}

function resetPageStyle() {
    number = generateNumber();
    defautlInput();
    msgAndScore = ["", 10];
    effectOnPage("white", "linear-gradient(to right top,#e588f7, #f7c3ad)", "white");
    disableCheckButton(false, "lightblue", "2px solid yellow", "white");
    document.querySelector(".guess-indicator").textContent = defaultGuessIndicatorContent;
    document.querySelector("#display-box-text").textContent = "?";
    document.querySelector(".score").textContent = `${defaultTextScoreContent} ${msgAndScore[1]}`; // We set up a default display with the value next to it. we (I) don't want to do extra work for now :( 
}


// This section below are Actions.

document.getElementById("play-button").addEventListener("click", function resetPage() {
    resetPageStyle();
});

document.querySelector("#check-button").addEventListener("click", function getInput() { // Though not need I preffered naming the function.
    value = Number(document.querySelector("#input-number").value); // Get the value from the user

    if (value < 0 || value > 100) { // If the value is not in the range then display the message "Out of range"
        document.querySelector(".guess-indicator").textContent = "Out of range!";
    } else {
        msgAndScore = guessGameDefault(value, number, msgAndScore[1]); // the method return an array that contains the message and the score.

        console.log(msgAndScore[1]); // displaying the currect score

        document.querySelector(".guess-indicator").textContent = msgAndScore[0]; // Replace the current guess indicator textContent with the message we got from the method guessGameDefault()

        document.querySelector(".score").textContent = `${defaultTextScoreContent} ${msgAndScore[1]}`; // Update the previous score with the new score got from the guessGameDefault()

        if (value === number) {
            highscore = getHighscore(`${msgAndScore[1]}`); // In case the number is guessed right then we update the highscore.
            document.querySelector("#display-box-text").textContent = `${number}`;
            effectOnPage("#20FFEB", "linear-gradient(to right top, #88f797, #f7f6ad)", "#000"); // set the function effectOnPage() just not to oveload the this getInput() function
            disableCheckButton(true, "rgb(148, 148, 148)", "none", "rgb(100, 100, 100)"); //Same as above
            // defautlInput(); // At the end of the game we could reset the input value to zero.
        }

        if (msgAndScore[1] === 0) {
            document.querySelector(".guess-indicator").textContent = "💥You've lost😥";
            document.querySelector("#display-box-text").textContent = `${number}`;
            effectOnPage("#FF77F3", "linear-gradient(to right top, #FFDF0F, #FF09CC)", "#fff");
            disableCheckButton(true, "rgb(148, 148, 148)", "none", "rgb(100, 100, 100)");
            // defautlInput(); // At the end of the game we could reset the input value to zero.
        }

        document.querySelector(".highscore").textContent = `${defaultHighscoreContent} ${highscore}`; // Replace the current highscore textContent with the new highscore.
    }

    /* The next step is to add the "Game lost!" and play again without changing the highscore unless the page 
    ** is refreshed. We need to use a method to reinitalize the targeted variables*/


    // Also improving the UI.

});












