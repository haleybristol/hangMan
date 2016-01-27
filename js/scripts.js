// function hangMan (words, letters, fails, discards)



function Random (fruit) {
  var fruit = ["apple"] //"banana", "berry", "orange"];
  var word = fruit[Math.floor(Math.random() * fruit.length)];
  return word;
};

function Replace (word) {
  var newWord = word.replace(/\w/g, " _");
  return newWord;
};

function splitWord (word) {
  var splitWord = word.split("");
  return splitWord;
};

function splitBlank (newWord) {
  var splitBlank = newWord.split("");
  return splitBlank;
};

function Index (splitWord) {
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
  var index = splitWord.indexOf(letters);
  return index;
};

function Discard (letters, index) {
  var discards = [];
  if (index === -1) {
    discards.push(letters);
  } else {
    return index;
  }
};
