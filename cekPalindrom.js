function cekPalindrom(kata) {
  let kataBalik = kata.split('').reverse().join('');
  return kata === kataBalik;
}

// Contoh penggunaan:
console.log(cekPalindrom('katak')); // true
console.log(cekPalindrom('malam')); // true
console.log(cekPalindrom('hello')); // false
