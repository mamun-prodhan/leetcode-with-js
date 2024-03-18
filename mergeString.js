const mergeAlternately = (word1 = "abcdef", word2 = "pqr") => {
  const word1Length = word1.length;
  const word2Length = word2.length;
  const min = Math.min(word1Length, word2Length);
  let mergedString = "";
  for (let i = 0; i < min; i++) {
    let merge = word1[i].concat(word2[i]);
    mergedString = mergedString.concat(merge);
  }
  if (word1.length > min) {
    mergedString = mergedString.concat(word1.slice(min, word1.length));
  } else if (word2.length > min) {
    mergedString = mergedString.concat(word2.slice(min, word2.length));
  }
  return mergedString;
};

console.log(mergeAlternately());
console.log("".concat("stringtest"));
