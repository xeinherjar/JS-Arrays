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

function isVowell(c) {
  c = c.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) > -1) {
    return true;
  } else {
    return false;
  }
}
