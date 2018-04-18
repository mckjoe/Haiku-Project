export function checkLines(text) {
  let newlineCount = text.match(/.\n./g).length;
  return newlineCount;
}

export function splitSentences(text) {
  let sentenceArray = text.split(/\n/g);
  return sentenceArray;
}

export function countVowels(text) {
  let sentenceArray = splitSentences(text);
  let countArray = [];

  for (let i = 0; i < sentenceArray.length; i++) {
    countArray.push(sentenceArray[i].match(/[aeiou]+/gi).length);
  }
  return countArray;
}


export function countWordsEndingE(text){
  let sentenceArray = splitSentences(text);
  let countArray = [];

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].match(/[a-z]+e\s/gi) !== null) {
      countArray.push(sentenceArray[i].match(/[a-z]+e\s/gi).length);
    } else {
      countArray.push(0);
    }
  }
  return countArray;
}
