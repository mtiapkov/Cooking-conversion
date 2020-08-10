function gallonsToLiters(inputedNumber){
  return inputedNumber * 3.785;
}

const number1 = parseInt(prompt("Enter a number of gallons you'd like to conver to liters"));

const result = gallonsToLiters(number1);
alert(result);
