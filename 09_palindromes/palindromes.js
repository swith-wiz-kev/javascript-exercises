const palindromes = function (a) {
  const lowercase = a.toLowerCase().split("");
  const array2 = lowercase.filter((char) => {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 48 && charCode <= 48) || (charCode >= 97 && charCode <= 122)
    );
  });
  const reversed = [...array2].reverse();

  for (let i = 0; i < array2.length; i++) {
    if (reversed[i] != array2[i]) {
      return false;
    }
  }
  console.log(reversed);
  console.log(array2);
  return true;
};
console.log(palindromes("abcba"));
// Do not edit below this line
module.exports = palindromes;
