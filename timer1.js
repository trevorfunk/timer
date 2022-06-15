const input = process.argv.slice(2); //Variable for user input

const numbers = input.filter(number => { // for edge cases (no number, negative number, NaN)
 return number > 0;
});

const timer = function() {
 for (const number of numbers) { //Loop through every input from user
  setTimeout (() => {
  return process.stdout.write('\x07'); //makes beep sound
  }, (number * 1000)) //mulitply by 1000 for seconds
 }
}

timer(input);








