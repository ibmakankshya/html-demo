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