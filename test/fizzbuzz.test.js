const fizzBuzz = require ("../fizzbuzz.js");
test ("fizzBuzz 3 % 5 to be fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})