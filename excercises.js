/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
  var x = max(a, b);
  return max(x, c);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(c){
  c = c.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) > -1) {
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(str){
  var trans_str = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (isVowel(c) || c === " ") {
      trans_str += c;
    } else {
      trans_str += c + "o" + c;
    }
  }
  return trans_str;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){
  var sum = arr.reduce( function(acc, x) {
    return acc + x;
  });
  return sum;
}

function multiply(arr){
  var mul = arr.reduce( function(acc, x) {
    return acc * x;
  });
  return mul;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
  var rev_str = "";
  for (var i = str.length -1; i >= 0; i--) {
    rev_str += str[i];
  }
  return rev_str;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(arr){
  var max_len_found = 0;
  var max_word = "";

  arr.forEach( function(x) {
    if (x.length > max_len_found) {
      max_len_found = x.length;
      max_word = x;
    }
  });

  return max_word;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(arr, i){
  var filtered = arr.filter( function(x) {
    return x.length > i;
  });

  return filtered;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(str){
  var freq_count = {};
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    freq_count[c] = freq_count[c] +1 || 1;
  }
  return freq_count;
}
