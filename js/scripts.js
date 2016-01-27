// function hangMan (words, letters, fails, discards)
function hangMan() {
  this.words = [];
  this.lettersGuessed = [];
  this.score = 0;
  this.discards = [];
}

  hangMan.prototype.Random = function() {
    var word = this.words[Math.floor(Math.random() * this.words.length)];
    return word;
  }

  hangMan.prototype.Replace = function(word) {
  var blankWord = word.replace(/\w/g, " _");
  return blankWord;
}

  hangMan.prototype.splitWord = function(word) {
    var splitWord = word.split("");
    return splitWord;
  }

  hangMan.prototype.splitBlank = function(blankWord) {
  var splitBlank = blankWord.split("");
  return splitBlank;
}

hangMan.prototype.Index = function(splitWord) {
  var index = splitWord.indexOf(this.lettersGuessed);
  if (index !== -1) {
    return index;
  } else {
    var discard = this.discards.push(this.lettersGuessed);
    return discard;
  }
}
