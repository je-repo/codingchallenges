/*
Description:

Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

// Revised solution
const greatestCommonDenominator = (numerator, denominator) =>
    denominator ? greatestCommonDenominator(denominator, numerator % denominator) : numerator;
    
    function reduce(fraction) {
      let [numerator, denominator] = fraction;
      const gcd = greatestCommonDenominator(numerator, denominator);
    
      return [numerator / gcd, denominator / gcd];
    }

// First solution
const greatestCommonDenominator = (numerator, denominator) => 
    denominator ? greatestCommonDenominator(denominator, numerator % denominator) : numerator
    
    function reduce(fraction) {
      let [numerator, denominator] = fraction
      
      return fraction.map(e => e / greatestCommonDenominator(numerator, denominator));
      
    }

