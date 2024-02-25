// function myFirst() {
//     console.log("Hello");
//   }
  
//   function mySecond() {
//     console.log("Goodbye");
//   }
  

//   mySecond();
//   myFirst();
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);