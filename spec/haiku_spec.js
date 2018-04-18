import { checkLines } from './../src/project.js';

describe('Haiku', function() {
  let reusableText = "Haikus are easy.\nBut sometimes they don't make sense.\nRefrigerator.";

  it('should test whether a poem has three lines', function() {
    expect(checkLines(reusableText).toEqual(3));
  });
});
