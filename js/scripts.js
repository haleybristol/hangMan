
  function hangMan() {
    this.word = this.Random();
    this.lettersGuessed = [];
    this.score = 0;
    this.discards = [];
  }

    hangMan.prototype.Random = function() {
      var array = ["porpoise", "manatee", "manta ray", "steve irwin" ];
      var word = array[Math.floor(Math.random() * array.length)];
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

  hangMan.prototype.Index = function(guess) {
    for (var i = 0; i < splitWord.length; i++) {
      if (splitWord[i] === guess) {
      return splitWord.charAt(i);
    }

    //   if (index === -1) {
    //   var score = this.score + 1;
    //   return score;
    // } else {
    // return index;
    // }
    }
  }
