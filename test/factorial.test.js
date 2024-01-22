const factorial = require ("..//factorial.js");
test ("factorial 5*4*3*2*1 to be 120", () => {
    expect(factorial(5)).toBe(120);
})