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

function isVowel(c) {
  c = c.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) > -1) {
    return true;
  } else {
    return false;
  }
};

function translate(str) {
  var trans_str = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (isVowel(c)) {
      trans_str += c;
    } else {
      trans_str += c + "o" + c;
    }
  }
  return trans_str;
};
