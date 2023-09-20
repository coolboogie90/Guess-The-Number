/*----- Declaration of variables -----*/

let maxNumber;
let randomNumber;
let guess;
let attempts = 0;
let isValid = false;

/*----- First loop 
An infinite while loop till the user enter a valid maximum number before proceding with the rest of the game logic.
-----*/

while (!isValid) {
    maxNumber = prompt("Enter a max number to start the game:");

    if (!isNaN(maxNumber)) { //The isNaN function is used to check if the user's input is not a number. Here it returns false, meaning the user entered a valid max number
        maxNumber = Number(maxNumber); //When the input is a valid number (string), Number() converts it into an int...
        break; //...Then we break the loop
    }

    alert("Invalid input :S. Please enter a number:"); //This alert keeps popping till the input is a valid number.
}

/*----- Random Number Generator 
-----*/

randomNumber = Math.floor(Math.random() * maxNumber) + 1;


/*----- Second loop 
An infinite while loop till the user guess the right number.
-----*/

while (!isValid) {
    guess = prompt("Guess the number ^^:");

    if (!isNaN(guess)) { //We check if the user enters a valid number, else we keep sending an alert till he does 
        guess = Number(guess);
        attempts++; //We increment the number of attempts by 1 everytime the guess is incorrect

        if (guess === randomNumber) {
            alert(`Congratulations!!! You guessed the number ${randomNumber} in ${attempts} attempts! Try to break your record :D.`); //We break the loop when the user guess the randomNumber correctly
            break;
        } else if (guess < randomNumber) { //The loop continues
            alert("Nope!. The number is higher.");
        } else {
            alert("Nah, try again! The number is lower.");
        }
    } else {
        alert("Invalid input :S. Please enter a number:");
    }
}
