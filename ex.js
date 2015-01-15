function max(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};


function maxOfThree(a, b, c) {
  var x = max(a, b);
  return max(x, c);
};
