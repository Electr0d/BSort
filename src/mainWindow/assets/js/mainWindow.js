const _ = require('lodash');

elements.input.addEventListener('input', e => {
  if(e.which == 13) inputSubmit();
});

function inputSubmit() {
  // get the numbers, split them by commas and filter them
  let numbersCount = Number(elements.input.value)
  let numbers = generateUniqueNumbers(numbersCount);

  
  console.log('sorting...');
  let t0 = performance.now();
  // sort
  let sortedNumbers = sort('', '+', numbers);

  let t1 = performance.now();
  
  let elapsedTime = t1 - t0;

  addRow(numbersCount, 'Bubble Sort', elapsedTime + 'ms', 0);


}
function generateUniqueNumbers(count) {
  var possibleNumbers = _.range(count + 1);
  var shuffled = _.shuffle(possibleNumbers);
  return shuffled.slice(0, count);
}



function filterNumbers(rawNumbers) {
  let numbers = [];

  // go through each number
  for(let i = 0; i < rawNumbers.length; i++) {
    let parsed = Number(rawNumbers[i]);

    // chec if it is a NaN
    if(!isNaN(parsed)) {
      // push into cleaned array
      numbers.push(parsed);
    }
  }
  return numbers;
}