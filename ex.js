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

function sum(arr) {
  var sum = arr.reduce( function(acc, x) {
    return acc + x;
  });
  return sum;
};

function multiply(arr) {
  var mul = arr.reduce( function(acc, x) {
    return acc * x;
  });
  return mul;
};

function reverse(str) {
  var rev_str = "";
  for (var i = str.length -1; i >= 0; i--) {
    rev_str += str[i];
  }
  return rev_str;
}

var lexicon = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år",
}

function findLongestWord(arr) {
  var max_len_found = 0;
  var max_word = "";

  arr.forEach( function(x) {
    if (x.length > max_len_found) {
      max_len_found = x.length;
      max_word = x;
    }
  });

  return max_word;
};


function filterLongWords(arr, i) {
  var filtered = arr.filter( function(x) {
    return x.length > i;
  });

  return filtered;
};

















