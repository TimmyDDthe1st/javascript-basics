const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  if (!a && !b) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  return a != b;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  return a == b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 != 0;
};

const isEven = a => {
  return a % 2 == 0;
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  return string.charAt(0) === "a";
};

const containsVowels = string => {
  return !!string.match(/[aeiou]/gi);
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
