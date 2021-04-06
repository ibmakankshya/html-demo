let num1 = +prompt("Enter the First number:");
let num2 = +prompt("Enter the Second number:");

if(num1<num2){
    alert("Minimum between the two numbers is:" + num1);

}
else
alert("Minimum between the two numbers is:"+ num2);

function check()
{
    let num1 = document.getElementById('number1').value;
   
    let num2 = document.getElementById('number1').value;
    // if(num1 || num2){
    //     alert("You entered a negative number!");
    // }
   
    document.getElementById('result').innerHTML = Math.pow(num1,num2);
    
}