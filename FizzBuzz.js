// Напишите код, который выводит на экран числа от 1 до num.
// При этом вместо чисел, кратных трем, программа должна выводить слово Fizz,
// а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати,
// то должно быть выведено слово FizzBuzz.

// Function takes number(num) as the parameter, what this function will do as it will logout to the console
// every number from one to num, for each number, if the number is divisible by 3, it will be logout Fizz, and
// if the number is divisible by 5, it will be logout Buzz.
// And if number is divisible by 3 and 5, it will be logout FizzBuzz.

function fizzBuzz (num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {console.log('FizzBuzz');}
    else if (i % 3 === 0) {console.log('Fizz');}
    else if (i % 5 === 0) {console.log('Buzz');}
    else {console.log(i);}
  }
}
