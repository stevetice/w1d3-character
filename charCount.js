function countLetters(str) {
  var word = str.split(" ").join("");
  var outputObject = {};

  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (outputObject.hasOwnProperty(letter) !== true)
      outputObject[letter] = 1;
    // Check to see if letter exists in outputObject. If it doesn't exist add the letter as a key with a value of 1.
    else
      outputObject[letter] += 1;
    // If letter exists in outputObject we will add 1 to the value.
  }
return outputObject;
};
console.log(countLetters('lighthouse in the house'));
