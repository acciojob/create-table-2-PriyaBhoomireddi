function createTable() {
  // Get the table element
  const table = document.getElementById('myTable');

  // Clear any existing content in the table
  table.innerHTML = '';

  // Get the number of rows from the user
  const numRows = parseInt(prompt('Input number of rows'));

  // Get the number of columns from the user
  const numCols = parseInt(prompt('Input number of columns'));

  // Create the rows and columns
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();

    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell();
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
}
