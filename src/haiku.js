class Haiku {
  constructor(text) {
    this.lines = text.split(/\n/g);
    this.vowelCounts = [];
    this.pass = false;
  }

  countVowels() {
    this.lines.forEach(function(line) {
      //test if scope changes in forEach function
      this.vowelCounts.push(line.match(/[aeu]+|i|[cts]ia+|e[^o]\W|[ou]+/gi).length);
    });
  }
}

export { Haiku };
