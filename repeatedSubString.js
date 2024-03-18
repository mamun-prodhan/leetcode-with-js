const repeatedSubstringPattern = (s) => {
  let n = s.length;
  for (let i = 0; i <= n / 2; i++) {
    if (n % i == 0) {
      let pattern = "";
      for (let j = 0; j < n / i; j++) {
        pattern = pattern + s.substring(0, i);
      }
      if (pattern === s) return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("ababab"));
