function check()
{
    let num1 = document.getElementById('Price').value;
    let num2 = document.getElementById('Tax').value;
    document.getElementById('result').innerHTML = (num1 * num2)/100;
    
}