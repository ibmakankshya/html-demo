let user= {
    name: "Hiya",
    age: 21
}
let users=[];
for (let index = 0; index < 10; index++) {
    let user ={
        name: "JIa"+index,
        age:0.5*index
    }
    users.push(user);
}
console.log(users);

users.sort(function(val, vab){
       return val.age-vab.age;
     });
users.forEach(function(element, index){
     console.log(element, index);
 });
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
  
  let table = document.querySelector("table");
  let data = Object.keys(users[0]);
  generateTableHead(table, data);