// let username = "Jon";
// function show(){
//     username="Bo";
//     let m = "Hello" + username;
//     alert(m);
// }
// alert(username);
// show();
// alert(username);
function checkAge(age) {
    // if (age > 18) {
        return (age > 18) || confirm('Did parents allow you?');
//       return true;
//     } //else {
//       return confirm('Did parents allow you?');
//    // }
  }
let age = prompt("How old r u?", 18);
let d = checkAge(age);
if (d) {
    alert("Access granted");}
else
{
    alert("Permssion denied");
}
function donot() {
    return "yellow";
}
    

