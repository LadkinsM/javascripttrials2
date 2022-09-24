'use strict';

// 1. printIndices
function printIndices(items) {
  //Loop over indices
  for (const i in items) {
    console.log(`${i}. ${items[i]}`);
  }
}

console.log(printIndices(['chicken', 'cat', 'dog']));

// 2. everyOtherItem
function everyOtherItem(items) {
  // Get every other item
  const result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }  
  }
  console.log(result);
}

console.log(everyOtherItem(['chicken', 'cat', 'dog', 'cow']));

// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the 'n' smallest intergers in 'items'.
  // Order the intergers in descending order. (by value)

  items.sort((a, b) => a - b);

  const sortedNItems = items.slice(0,n);
  
  console.log(sortedNItems.reverse())
}

console.log(smallestNItems([1, 4, 2, 6, 3, 9], 5));