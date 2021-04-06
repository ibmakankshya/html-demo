let user = "Akankshya"
console.log(user);
console.log(user.length);
let user1 = user.concat(" Bhattacharyaa");//immutable strings
console.log(user);
console.log(user1);
let a1= 3;
console.log(a1.toString());
//no float or double only numbers in js
let a2= 5.0000070;
console.log(a2);
let order={
    item : "Laptop",
    price: 90,
    address:{
        street: "AKA",
        city: "Banglore",
        pin:90876

    }
    

}

// let numbers = [1,-09,76,4,6,23];
// numbers.push(6);

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
    
// }
// numbers.forEach(function(element, index){
// console.log(element, index);
// });
// let sorted ;
//  numbers.sort(function(val, vab){
//     return val-vab;
//  });
//  console.log(numbers);
//  numbers.pop();
//  console.log(numbers);
//  numbers.splice(2,1);
//  console.log(numbers);
 //-------------------------------------------
 //alert sums
// let sum=0;
// while(true){
//     let va = +prompt("Enter a number", '');
//     if(!va) break;
//     sum+=va;

// }
// alert("Sum " +sum);
for (let index = 0; index < 10; index++) {
   if(index%2==0)
       //continue; //even numbers are displayed
   
   alert(index);
    
}