function gallonsToLiters(inputedNumber){
  return inputedNumber * 3.785;
}

const number1 = parseInt(prompt("Enter a number of gallons you wish to convert to liters"));

const result = gallonsToLiters(number1);
alert(result);
