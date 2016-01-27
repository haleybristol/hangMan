describe ("hangMan", function() {

  it("will create a new game with applicable information", function() {
  var testHangMan = new hangMan(["apple"], ["b"], 0, ["b"]);
  expect(testHangMan.words).to.eql([]);
  expect(testHangMan.lettersGuessed).to.eql([]);
  expect(testHangMan.score).to.eql(0);
  expect(testHangMan.discards).to.eql([]);
  });

  it("will select a random word from an array", function() {
    var testHangMan = new hangMan(["apple"]);
    expect(testHangMan.Random(['apple'])).to.equal("apple");
  });

  it("will replace all letters in word with '_'", function() {
    var testHangMan = new hangMan(["apple"]);
    expect(testHangMan.Replace("apple")).to.equal(" _ _ _ _ _");
    });

  it("will split word into an array of letters", function() {
    var testHangMan = new hangMan(["apple"]);
    expect(testHangMan.splitWord("apple")).to.eql(["a","p","p","l","e"]);
  });

  it("will split blanks into an array of blanks", function() {
    var testHangMan = new hangMan(["apple"]);
    expect(testHangMan.splitBlank("_____")).to.eql([ '_', '_', '_', '_', '_' ]);
  });

  it("will return the index position of a guessed letter", function() {
    var testHangMan = new hangMan(["apple"], ["b"]);
    expect(testHangMan.Index(["a","p","p","l","e"])).to.equal(["b"]);
  });

  // it("will push a letter that is not found into a new array", function() {
  //   var testHangMan = new hangMan([]);
  //     expect(testHangMan.Discard(["b"],-1)).to.eql(["b"]);
  // });

});

//
//
//
