describe ("hangMan", function() {

  it("will create a new game with applicable information", function() {
  var testHangMan = new hangMan();

  expect(testHangMan.lettersGuessed).to.eql([]);
  expect(testHangMan.score).to.eql(0);
  expect(testHangMan.discards).to.eql([]);
  });


  it("will replace all letters in word with '_'", function() {
    var testHangMan = new hangMan();
    expect(testHangMan.Replace("apple")).to.equal(" _ _ _ _ _");
    });

  it("will split word into an array of letters", function() {
    var testHangMan = new hangMan();
    expect(testHangMan.splitWord("apple")).to.eql(["a","p","p","l","e"]);
  });

  it("will split blanks into an array of blanks", function() {
    var testHangMan = new hangMan();
    expect(testHangMan.splitBlank("_____")).to.eql([ '_', '_', '_', '_', '_' ]);
  });

  it("will return the index position of a guessed letter", function() {
    var testHangMan = new hangMan();
    expect(testHangMan.Index(["a","p","p","l","e"], "a")).to.equal("a");
  });

});
