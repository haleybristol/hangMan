// describe ("hangMan", function() {
//   it("will create a new game with applicable information", function() {
//   var testhangMan = new hangMan();
//   expect(testhangMan.words).to.eql([]);
//   expect(testhangMan.letters).to.eql([]);
//   expect(testhangMan.fails).to.eql([]);
//   expect(testhangMan.discards).to.eql([]);
//   });
// });

describe("Random", function() {

  it("will select a random word from an array", function() {
    expect(Random("[apple]")).to.equal("apple");
  });

  it("will replace all letters in word with '_'", function() {
    expect(Replace("apple")).to.equal(" _ _ _ _ _");
  });

  it("will split word into an array of letters", function() {
    expect(splitWord("apple")).to.eql(["a","p","p","l","e"]);
  });

  it("it will split blanks into an array of blanks", function() {
    expect(splitBlank("_____")).to.eql([ '_', '_', '_', '_', '_' ]);
  });

  it("will return the index position of a given letter", function() {
    expect(Index("a")).to.equal(0);
  });
  it("will push a letter that is not found into a new array", function() {
    expect(Discard("b", -1)).to.eql(["b"]);
  })
});
