const findTheDifference = (s, t) => {
  let asciiSumOfS = 0;
  let asciiSumOfT = 0;
  for (let i = 0; i < s.length; i++) {
    asciiSumOfS = asciiSumOfS + s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    asciiSumOfT = asciiSumOfT + t.charCodeAt(i);
  }
  const asciOfAddedLetter = asciiSumOfT - asciiSumOfS;
  const addedLetter = String.fromCharCode(asciOfAddedLetter);
  return addedLetter;
};

console.log(findTheDifference("abcd", "ambcd"));
