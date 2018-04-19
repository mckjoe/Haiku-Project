class Haiku {
  constructor(text) {
    this.lines = text.split(/\n/g);
    this.vowelCounts = [];
    this.pass = false;
  }

  countVowels() {
    for (let i = 0; i < this.lines.length; i++) {
      this.vowelCounts.push(this.lines[i].match(/[aeu]+|i|[cts]ia+|e[^o]\W|[ou]+/gi).length);
    }
  }

}

export { Haiku };
