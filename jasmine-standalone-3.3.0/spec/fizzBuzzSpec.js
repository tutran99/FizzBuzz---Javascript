describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new fizzBuzz()
  });

  describe('divisible by 3', function() {
    it('returns fizz for 3', function() {
      expect(fizzBuzz.num(3)).toEqual('Fizz');
    });

    it('returns fizz for 12', function() {
      expect(fizzBuzz.num(12)).toEqual('Fizz');
    });
  });

  describe('divisible by 5', function() {
    it('returns buzz for 5', function() {
      expect(fizzBuzz.num(5)).toEqual('Buzz');
    });

    it('returns buzz for 25', function() {
      expect(fizzBuzz.num(25)).toEqual('Buzz');
    });
  });
  

});
