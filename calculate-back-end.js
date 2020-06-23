/******************
 * YOUR CODE HERE *
 ******************/

function calculate(num1, num2, sign) {
  const a = Number(num1)
  const b = Number(num2)
  switch(sign) {
    case '+':
    case 'plus':
    case 'added to':
      return a + b
    case '-':
    case 'minus':
    case 'subtracted from':
      return a - b
    case 'x':
    case 'X':
    case '*':
    case 'times':
    case 'multiplied by':
      return a * b
    case '/':
    case 'divided by':
      return a / b
    case '%':
    case 'modulus':
    case 'mod':
      return a % b  
    default:
      return "Sorry, that's not a mathematical operation!"
  }
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}

module.exports = calculate;