function sort(algorithm, order, numbers) {
  let sign = order == '+' ? '>' : '<';
  let sorted = bSort(sign, numbers);
  return sorted
}

function bSort(order, numbers) {
  let sortedNumbers = numbers;
  let flag = true;
  while (flag) {
    flag = false;
    for(let i = 0; i < sortedNumbers.length; i++) {
      if(eval(sortedNumbers[i] + order + sortedNumbers[i + 1])) {
        let temp = sortedNumbers[i];
        sortedNumbers[i] = sortedNumbers[i + 1];
        sortedNumbers[i + 1] = temp;
        flag = true;
      }
    }
  }
  return sortedNumbers;
}


