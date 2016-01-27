function Random (fruit){
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
