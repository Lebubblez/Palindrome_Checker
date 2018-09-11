function palindrome(str) {
  //remove all non-alphanumerics: spaces, commas, underscores, periods, capitalization
  var splitStr = str.toLowerCase().split(/[^a-zA-Z0-9]/g).join('').split('');
  var rev = false;
  var tempRev = [];
  for (var c in splitStr) {
    //puts last letter first, & first letter last
    tempRev.unshift(splitStr[c]);

  }
  console.log(tempRev);

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



console.log(palindrome("almostomla"));
