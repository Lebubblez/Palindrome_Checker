function palindrome(str) {
  var splitStr = str.split('');
  var rev = false;
  var tempRev = [];
  for (var c in splitStr) {
    //puts last letter first, & first letter last
    var newTemp = tempRev.unshift(splitStr[c]);
    tempRev = newTemp.split(/[^a-zA-Z]/g);
  }
  console.log(tempRev);
  //remove all non-alphanumerics: spaces, commas, underscores, periods, capitalization

  for (var c in splitStr) {
    if (splitStr[c] === tempRev[c]) {
      rev = true;
    }
    else {
      rev = false;
    }
  }
  return rev;
}



console.log(palindrome("A man, a plan, a canal. Panama"));
