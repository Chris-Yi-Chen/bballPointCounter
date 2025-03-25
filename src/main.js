let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let data = []


window.increment = function() {
  count += 1;
  countEl.textContent = count;
};


window.decrement = function() {
    count -= 1;
    countEl.textContent = count;
  };

window.save = function() {
    let name = document.getElementById("name-input");
    let nameVal = name.value;
    addRow({nameVal, count})

    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
};

window.reset = function() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0;
    resetTable();
}

window.createTable = function() {
    const table = document.getElementById('data-table');
    
    // add headers
    if (data.length > 0) {
        const headerRow = table.insertRow();
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }

    for (const item of data) {
        const row = table.insertRow();
        for (const key in item) {
            const cell = row.insertCell();
            cell.textContent = item[key];
        }
    }
    
    container.appendChild(table);
}

window.addRow = function(newItem) {
    const table = document.getElementById("data-table");
    const tbody = table.querySelector('tbody');
  
    const row = document.createElement('tr');
    for (const key in newItem) {
      const cell = document.createElement('td');
      cell.textContent = newItem[key];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
}

window.resetTable = function() {
    const table = document.getElementById("data-table")
    const tbody = table.querySelector('tbody')

    tbody.innerHTML=''
}

