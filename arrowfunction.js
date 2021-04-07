//foo()

// const user={
//     name:"Hiya",
//     eat: function foo() {
//         console.log(this);
//     }
// }
// //user.eat();
// user.eat.call({ name:  "Jiya"});
// user.eat();

// user.eat = user.eat.bind({name:"Brother"});
// user.eat();
// user.eat = user.eat.bind({name:"Ross"});
// user.eat();
// const a=1
const outer =()=>{
    return 1;
}
//const outer = ()=> 22;//one line of arrow code
const result = outer();
console.log(result);
const user={
        name:"Hiya",
        eat: function () {
           console.log(this);
        }
     }