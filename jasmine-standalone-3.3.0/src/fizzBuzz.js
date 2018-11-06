function FizzBuzz() {
}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
}

FizzBuzz.prototype.num = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this.isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this.isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.num(i));
}