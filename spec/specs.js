describe ("HangMan", function() {

  it("will create a new game with applicable information", function() {
  var testHangMan = new HangMan();
  expect(testHangMan.lettersGuessed).to.eql([]);
  expect(testHangMan.score).to.eql(0);
  });


  it("will replace all letters in word with '_'", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.Replace("apple")).to.equal("_____");
    });

  it("will split word into an array of letters", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.brokenWord("apple")).to.eql(["a","p","p","l","e"]);
  });

  it("will split blanks into an array of blanks", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.Blanks("_____")).to.eql([ '_', '_', '_', '_', '_' ]);
  });

  it("will return the guessed letter", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.findLetter("p")).to.eql(["_", "p", "p", "_", "_"]);
  });

  it("will push an incorrect letter into an array", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.Guesses("b")).to.eql(["b"]);
  })

  it("will add 1 point to the score when guessed letter is wrong", function() {
    var testHangMan = new HangMan();
    expect(testHangMan.addScore("b")).to.equal(1);
  });

});
