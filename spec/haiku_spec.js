import { checkLines, validateText } from './../src/validate.js';
import { Haiku } from './../src/haiku.js';
// import { countWordsEndingE } from './../src/project.js';
// import { updateVowelCount } from './../src/project.js';


describe('Haiku', function() {
  let reusableText = "Haikus are easy.\nBut sumtimes they don't make sense.\nRefrigerator.";
  let testHaiku;

  beforeEach(function() {
    testHaiku = new Haiku(reusableText);
  });

  it('should check text for unwanted charactors', function() {
    expect(validateText(reusableText)).toEqual(false);
  });

  it('should test whether a poem has three lines', function() {
    expect(checkLines(reusableText)).toEqual(2);
  });

  it('should split text into sentences at a new line break', function() {
    expect(testHaiku.lines.length).toEqual(3);
  });

  it('should count the number of vowels, vowel pairs, and qualifying ys in each sentence', function() {
    testHaiku.countVowels();
    expect(testHaiku.vowelCounts).toEqual([6,10,5]);
  });

  // it('should count the number of instances that a word ends with ie, e, but not le, in each sentence', function() {
  //   expect(countWordsEndingE(reusableText)).toEqual([1,2,0]);
  // });
  //
  // it('should subtract number of words that end in e from the number of vowels in the sentence', function() {
  //   expect(updateVowelCount(reusableText)).toEqual([5,9,5]);
  // });


});
