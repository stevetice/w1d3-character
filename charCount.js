// Take input string (lighthouse in the house) => remove spaces
// Check string for unique values (characters) FIRST
// if letter does not exist in object add it to key list with value = 1
// if letter already exists in object add +1 to value
// Return an object with all key pair values

function countLetters(str) {
  var word = str.split(" ").join("");
  var outputObject = {};

  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (outputObject.hasOwnProperty(letter) !== true)
      outputObject[letter] = 1;
    // if (outputObject.hasOwnProperty(letter) == letter)
    //   outputObject[letter] += 1
    else
      outputObject[letter] += 1;
    // console.log(outputObject);

    // if letter is not in output add the letter and outputObject[letter] = 1
    // if letter already exists in output object then add 1 to count outputObject[letter] ++
    // console.log(letter);
  }

// console.log(outputObject);

// console.log(outputObject);

return outputObject;
};
console.log(countLetters('lighthouse in the house'));
