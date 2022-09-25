'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}

  const wordsList = phrase.split(' ')
  
  for (const word of wordsList) {
    if (!wordCounts.word) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }
  return wordCounts
}

console.log(countWords('Hello There'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
