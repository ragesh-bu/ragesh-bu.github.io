// Collects user prompt and adds 2 numbers
function Calculate()
{
  const BIG_NUMBER = 10;
  let num1;
  let num2;
  let name;

  alert('Calcy welcomes you');
  name = window.prompt("Please tell me your name: ");
  // If user hits cancel exit the script
  if (name === null) {
    return;
  }
  alert("Welcome " + name);

  do {
    waitingForInput1 = true;
    do {
      num1 = window.prompt("Enter first number: ");
      // If user hits cancel exit the script
      if (num1 === null) {
        return;
      }
      // if user enters non number
      if (!isNaN(num1)) {
        num1 = Number(num1);
        waitingForInput1 = false;
      }
      else {
        alert("Enter a valid number");
        continue;
      }
    } while(waitingForInput1)

    waitingForInput2 = true;
    do {
      num2 = window.prompt("Enter second number: ");
      // If user hits cancel exit the script
      if (num2 === null) {
        return;
      }
      if (!isNaN(num2)) {
        num2 = Number(num2);
        waitingForInput2 = false;
      }
      else {
        alert("Enter a valid number");
        continue;
      }
    } while (waitingForInput2)

    let sum = add(num1, num2);
    alert("Sum of the numbers is " + sum);
    if (sum > BIG_NUMBER)
      alert("That is a big number");
    else
      alert("That is a small number");
  } while (confirm('Do you want to add another 2 numbers?\n\nYes(Click OK)\nNo(Click Cancel)'))

}

// function to add 2 numbers
function add(num1, num2) {
  return num1 + num2;
}
