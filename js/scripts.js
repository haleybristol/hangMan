function HangMan() {
  this.array = ["apple"];
  this.word = this.Random();
  this.splitWord = this.brokenWord();
  this.blank = this.Replace();
  this.splitBlank = this.Blanks();
  this.lettersGuessed = [];
  this.score = 0;
}

    HangMan.prototype.Random = function() {
      // var array = ["porpoise", "manatee", "manta ray", "steve irwin" ];
      this.word = this.array[Math.floor(Math.random() * this.array.length)];
      return this.word;
    }

    HangMan.prototype.Replace = function() {
    var blankWord = this.word.replace(/\w/g, " _");
    return blankWord;
  }

    HangMan.prototype.brokenWord = function() {
      this.splitWord = this.word.split("");
      return this.splitWord;
    }

    HangMan.prototype.Blanks = function(blankWord) {
    this.splitBlank = this.blank.split("");
    return this.splitBlank;
  }

  HangMan.prototype.findLetter = function(guess) { //cat
  //a
    for (var i = 0; i < this.splitWord.length; i++) {
      if (this.splitWord[i] === guess) {
        this.splitBlank[i] = guess;
      }
    }
    return this.splitBlank;
  }

  HangMan.prototype.Guesses = function(guess) { //cat
  //a
    for (var i = 0; i < this.splitWord.length; i++) {
      if (this.splitWord[i] !== guess) {
        this.lettersGuessed.push(guess);
      }
        return this.lettersGuessed;
    }
  }
    HangMan.prototype.addScore = function(guess) {

      for (var i = 0; i < this.splitWord.length; i++) {
        if (this.splitWord[i] !== guess) {
          return this.score + 1;
        }
      }
    }

$(document).ready (function(){
  var hangman = new HangMan();
  $("#wordplace").append(hangman.blank);


  $(".letters").click(function(event) {
    var value = $(this).val();
    console.log(value);
  });

  // $("form#letter").click(function(event) {
  //   var clickedLetter = ($(this).val());
  //   HangMan.replace(clickedLetter);



  // });
});
