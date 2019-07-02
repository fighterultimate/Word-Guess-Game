// Array of words

var words = ["", "Harry Potter", "Hermione Granger", "Ron Weasly", "Albus Dumbledore", "Severus Snape", "Draco Malfoy", "Rubeus Hagrid", "Tom Riddle", "Neville Longbottom", "Serious Black"];
var randomNumber = "";
var wordlength = "";
var underscorebank = [];

var wrongLetters = [];
var rightLetters = [];
var guessesRemaining = 20;

// dom manipulation
var domUnderscore = document.getElementsByClassName("answers");
var guessed = document.getElementsByClassName("wrongGuess");
var remaining = document.getElementsByClassName("remaining");
// var docrightguess = document.getElementsByClassName()
// NEED TO ADD EVENT LISTENER TO START GAME( KEYSTROKE )
// choose word randomly
randomNumber = Math.floor((Math.random() * 8) + 1);
var playerword = words[randomNumber];
guessesRemaining = 20;
// create underscore based on length of word

function underscore() {
    wordlength = (playerword.length);
    return wordlength;
}
console.log(underscore());
// turn HTML into underscore based on word
function getUnderscore() {
    for (var i = 0; i < wordlength; i++) {
        underscorebank.push("_")
    };
    return underscorebank;
}

console.log(getUnderscore());

// Get users guess
console.log(rightLetters);

$(document).on("keypress", function myfunction(event) { // keypress->data->string. Captures user stroke
    var keycode = String.fromCharCode(event.keyCode);


    
    /*
    for (var i = 0; i < wordBeingGuessed.length; i++) {
           if (letters === wordBeingGuessed[i]) {
               underlinedBlanks[i] = letters;
           }
       }
    */
    if (playerword.indexOf(keycode) > -1) // index of searches for the letter and returns (number > -1)
    {
        rightLetters.push(keycode); // pushing found letters into rightLetters array

        underscorebank[playerword.indexOf(keycode)] = keycode; //
        domUnderscore[0].innerHTML = underscorebank.join(" ");

        
        for (var i = 0; i < playerword.length; i++) {
            if (rightWords === playerword[i]) {
                underscorebank[i] = rightWords;
            }
        }

        if (underscorebank.join("") == playerword) {

            alert("You did it!");
            $('body').html("<img src='assets/images/hedwigs-letters.jpg' height='100%' width='100%'/> ")
        };

       
        
    }

    else {


        guessesRemaining--;
        remaining[0].innerHTML = guessesRemaining;

        wrongLetters.push(keycode);
        console.log(wrongLetters);
        guessed[0].innerHTML = wrongLetters.join(" ");
        if (guessesRemaining === 0) {
            alert("Game over");
            $('body').html("<img src='assets/images/AP110701057207.2e16d0ba.fill-735x490.jpg' height='100%' width='100%'/> ");
        }
    }
    
});



/* if(words[randomNumber] === words[]) {
        $('.clue').html("<img src='assets/images/large.jpg' height='300px' width='300px'/> ")}
  */

// check ig guess it rightv     guessesRemaining--;

// if right push too array

// if wrong push to wrong array

//

if (playerword === words[1]) {
    $('.clue').html("<img src='assets/images/hp.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[4]) {
    $('.clue').html("<img src='assets/images/harry-potter-and-the-order-of-the-phoenix.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[2]) {
    $('.clue').html("<img src='assets/images/Hermione.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[3]) {
    $('.clue').html("<img src='assets/images/s-l300.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[7]) {
    $('.clue').html("<img src='assets/images/RubeusHagrid_WB_F2_HagridInKnockturnAlley_Still_100615_Land.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[6]) {
    $('.clue').html("<img src='assets/images/5zPT_nm2_400x400.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[8]) {
    $('.clue').html("<img src='assets/images/large.jpg' height='300px' width='300px'/> ")
}

if (playerword === words[10]) {
    $('.clue').html("<img src='assets/images/6578789-maxresdefault.jpg' height='300px' width='300px'/> ")
}

if (words[randomNumber] === words[9]) {
    $('.clue').html("<img src='assets/images/original.jpg' height='300px' width='300px'/> ")
}

if (words[randomNumber] === words[5]) {
    $('.clue').html("<img src='assets/images/220px-Ootp076.jpg' width='300px'/> ")
}
