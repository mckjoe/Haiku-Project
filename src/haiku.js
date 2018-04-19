class Haiku {
  constructor(text) {
    this.lines = text.split(/\n/g);
    this.vowelCounts = [];
    this.pass = false;
    this.exclusions = [];
  }

  countVowels() {
    for (let i = 0; i < this.lines.length; i++) {
      this.vowelCounts.push(this.lines[i].match(/[aeu]+|i|[cts]ia+|e[^o]\W|[ou]+/gi).length);
    }
  }

  filterExclusions() {
    let exclusionCounts = [];
    for (var i = 0; i < this.lines.length; i++) {
      if (this.lines[i].match(/[a-z]+e\s/gi) !== null) {
        exclusionCounts.push(this.lines[i].match(/ie|[a-z]+[^lh]e[sd]*\W|\s[^rh]ele/gi).length);
      } else {
        exclusionCounts.push(0);
      }
      this.vowelCounts[i] = this.vowelCounts[i] - exclusionCounts[i];
    }
  }

}

export { Haiku };
