function digit (array, multiplier) {

  const algorithm = array.reduce((result, num) => result + (num * multiplier--), 0) % 11;

  return algorithm < 2 ? 0 : 11 - algorithm;

}

function cpfValidator (str) {

  let arrNumber = str.toString().split('').filter(Number);
  const multOne = 10;
  const multTwo = 11;

  if (arrNumber.length === 11) {

    let arr = arrNumber.splice(0, 9);
    let digitOne = digit(arr, multOne);
    arr.push(digitOne);

    let digitTwo = digit(arr, multTwo);

    return digitOne !== arrNumber[0] || digitTwo !== arrNumber[1] ? false : true;

  } else {

    return false;

  }

}

module.exports = cpfValidator;