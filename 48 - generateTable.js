function generateTable() {
    const table = document.createElement("table");
    for (let i = 0; i <= 10; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 5; j++) {
        const cell = row.insertCell();
        cell.textContent = Math.floor(Math.random() * 100);
      }
    }
    document.body.appendChild(table);
  }
  generateTable();
  