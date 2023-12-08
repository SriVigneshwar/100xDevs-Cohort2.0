/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function uniqueString(str){
  let uniq = "";

  for(let i=0; i < str.length; i++){
    if(uniq.includes(str[i]) === false){
      uniq += str[i];
    }
  }
  return uniq;
}

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  str1 = uniqueString(str1);
  str2 = uniqueString(str2);

  let isLengthequal = (str1.length == str2.length);

  let anagramflag = 0;
  if(isLengthequal){
    for(let j = 0; j < str1.length; j++){
      if(str2.includes(str1[j]) === true){
        anagramflag ++;
      }
      else{
        return false;
      }
    }
    if(anagramflag == str1.length){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

module.exports = isAnagram;