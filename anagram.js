const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sCount = {};
  const tCount = {};

  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
  for (let ch in sCount) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};

console.log(isAnagram("hellso", "hllpoe"));
