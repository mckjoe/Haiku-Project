import { checkLines } from './../src/project.js';
import { splitSentences } from './../src/project.js';
import { countVowels } from './../src/project.js';

describe('Haiku', function() {
  let reusableText = "Haikus are easy.\nBut sometimes they don't make sense.\nRefrigerator.";

  it('should test whether a poem has three lines', function() {
    expect(checkLines(reusableText)).toEqual(2);
  });

  it('should split text into sentences at a new line break', function() {
    expect(splitSentences(reusableText).length).toEqual(3);
  });

  it('should count the number of vowels in each sentence', function() {
    expect(countVowels(reusableText)).toEqual([7,11,5]);
  });

});
