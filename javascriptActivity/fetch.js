async function fetchText() {
    try {
        
        let response = await fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817');
        let data = await response.text();
        console.log(data);
  
        const dataObj = JSON.parse(data);
        const dataHeaders = Object.keys(dataObj.data[1]);
  
        const headerRow = document.querySelector('#table-headers');
        dataHeaders.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
  
        const tableValues = document.querySelector('#table-values');
        dataObj.data.forEach(value => {
            const tr = document.createElement('tr');
            dataHeaders.forEach(header => {
                const td = document.createElement('td');
                td.textContent = value[header];
                tr.appendChild(td);
            });
            tableValues.appendChild(tr);
        });
    } catch (error) {
      console.log('Error:', error);
    }
  }



fetchText();
  