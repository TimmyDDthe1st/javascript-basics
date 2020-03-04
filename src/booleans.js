const negate = a => {
  return !a;
};

const both = (a, b) => {
  let result;

  if (a && b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const either = (a, b) => {
  let result;

  if (a || b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const none = (a, b) => {
  let result;

  if (!a && !b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const one = (a, b) => {
  let result;

  if (a && b) {
    result = false;
  } else if (!a && !b) {
    result = false;
  } else {
    result = true;
  }

  return result;
};

const truthiness = a => {
  let result;

  if (a) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const isEqual = (a, b) => {
  let result;

  if (a === b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const isGreaterThan = (a, b) => {
  let result;

  if (a > b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const isLessThanOrEqualTo = (a, b) => {
  let result;

  if (a <= b) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const isOdd = a => {
  let result;

  if (a % 2) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const isEven = a => {
  // let result;

  if (a % 2 === 0) {
    return true;
  }
  return false;

  // return result;
};

const isSquare = a => {
  let result;

  if (Math.sqrt(a) % 1 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const startsWith = (char, string) => {
  let result;

  if (string.charAt(0) === char) {
    result = true;
  } else {
    result = false;
  }

  return result;
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
