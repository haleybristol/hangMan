describe("Random", function() {

  it("will select a random word from an array", function() {
    expect(Random("[apple]")).to.equal("apple");
  });

  it("will replace all letters in word with '_'", function() {
    expect(Replace("apple")).to.equal(" _ _ _ _ _");
  });

  it("will split word into an array of letters", function() {
    expect(splitWord("apple")).to.eql(["a","p","p","l","e"]);
  })
});
