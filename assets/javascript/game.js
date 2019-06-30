// Array of words

var words = ["","Harry Potter", "Hermione Granger", "Ron Weasly", "Albus Dumbledore", "Severus Snape","Draco Malfoy", "Rubeus Hagrid", "Tom Riddle", "Neville Longbottom", "Serious Black"];
var randomNumber="";
var wordlength="";
var underscorebank=[];
var playerword= words[randomNumber];
var wrongWords=[];
var rightWords=[];
// choose word randomly
randomNumber = Math.floor((Math.random() * 8) + 1);
console.log(words[randomNumber]);
// create underscore based on length of word
function underscore()
{
    wordlength=(words[randomNumber].length);
    return wordlength;
}
console.log(underscore());

function getUnderscore() {
for (var i = 0; i < wordlength; i++) 
{
underscorebank.push("_")
};
return underscorebank;
}

console.log(getUnderscore());

// get users guess

$(document).on("keypress", function myfunction(event) {
    var keycode =String.fromCharCode(event.keyCode);
    
    if (words[randomNumber].indexOf(keycode) > -1)
 {
     rightWords.push(keycode);
 }
 
else {
    wrongWords.push(keycode);
}

});


 

// check ig guess it right

// if right push too array

// if wrong push to wrong array

//