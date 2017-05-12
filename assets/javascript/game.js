var maximumTries = 15;
var words = ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister", "Arya Stark"];
var gamesWon = 0;
var gamesLost = 0;
var gamesPlayed = 0;


$(document).ready(function(){


var charsInWord = wordsToGuess[gamesPlayed];
var numOfChars = charsInWord.length;

for(i= 0; i < numOfChars; i++){
    var slot = $("<span>").html("<u>&nbsp;&nbsp;</u>");
 $("#letterSpaces").append(slot);
};

