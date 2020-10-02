
exports.min = function min (myArr) {
  if ((myArr === null) || (myArr === undefined) || (!Array.isArray(myArr)) || (myArr.length === 0)) return 0;

  myArr.sort(function(a, b) {
    return a - b;
  });

  return myArr[0];
}

exports.max = function max (myArr) {
  if ((myArr === null) || (myArr === undefined) || (!Array.isArray(myArr)) || (myArr.length === 0)) return 0;

  myArr.sort(function(a, b) {
    return a - b;
  });

  return myArr[myArr.length-1];
}

exports.avg = function avg (myArr) {
  if ((myArr === null) || (myArr === undefined) || (!Array.isArray(myArr)) || (myArr.length === 0)) return 0;

  //let arrAvg = ;

  return eval(myArr.join('+')) / myArr.length;
}
