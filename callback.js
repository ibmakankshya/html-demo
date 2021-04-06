// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);
let numbers = [1,-09,76,4,6,23];
function addAll(p,c) {
    return p+c;
}
let result = numbers.reduce(addAll);
console.log(result);