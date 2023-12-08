/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function reverseString(str){
  let rev = '';

  for(let i = str.length - 1; i >= 0; i--){
    rev += str [i];
  }

  return rev;
}

function isLetter(char){
  return /^[a-z]$/i.test(char);
}

function isPalindrome(str) {
    if(str.length == 0 || str.length == 1){
      return true;
    }

    str = str.toLowerCase();
    let temp = ""; 
    let tempindex = 0;

    if(str.includes(' ')){
      str = str.split(' ').join(''); // removed spaces
    }

    if(! /^[a-z]+$/i.test(str)){
      for(let i = 0; i < str.length; i++){
        if(! isLetter(str[i])){
          continue;
        }
        temp[tempindex++] = str[i]; // removed non letters
      }
      str = temp;
    }

    if(str == reverseString(str)){
      return true;
    }
    else{
      return false;
    }
  }
  
  module.exports = isPalindrome;