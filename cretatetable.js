let orders=[];
for (let index = 0; index < 10; index++) {
    let order ={
        itemName: "Order"+index,
        Price:2*index,
        Pincode: 7000*index
    }
orders.push(order);
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(orders[0]);
  generateTableHead(table, data);
  generateTable(table, orders);