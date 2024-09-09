document.addEventListener('DOMContentLoaded', () => {
  const newRows = [
    ['5', 'Alex Smith', 'alex.smith@example.com', '085123456789'],
    ['6', 'Sarah Johnson', 'sarah.johnson@example.com', '085987654321'],
  ];

  addRowsToTable('table1', newRows);
  addRowsToTable('table2', newRows);
});

function addRowsToTable(tableId, rows) {
  const table = document.getElementById(tableId);
  const tbody = table.getElementsByTagName('tbody')[0];

  rows.forEach((rowData) => {
    const row = document.createElement('tr');
    rowData.forEach((cellData) => {
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
}
