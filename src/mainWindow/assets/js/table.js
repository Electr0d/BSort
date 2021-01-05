const elements = {
  table: {
    table: document.querySelector('.table'),
    body: document.querySelector('.table-body')
  },
  input: document.querySelector('input.numbers-input'),
  button: document.querySelector('button.input-submit')
}

function addRow(numbersCount, algorithm, sortTime, index) {
  // define values
  let cells = ['numbers-count', 'algorithm', 'sort-time']
  let cellValues = [numbersCount, algorithm, sortTime];
  let cell;

  let row = addElement('div', { class: 'row row-' + index }, '', elements.table.body)
  for(let i = 0; i < 3; i++) {
    cell = addElement('div', { class: 'cell cell-' + index, id: cells[i], onclick: 'copy(this)' }, cellValues[i], row);
  }

}


function copy(e) {
  let text = e.textContent;
  let input = addElement('input', { height: '0', margin: '0', padding: '0' }, text, document.body);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  console.log('Copied successfully!\nMessage: ' + text);
}