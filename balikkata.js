// balikkata.js

/**
 * Membalikkan string yang diberikan.
 * @param {string} kata - String yang akan dibalik.
 * @returns {string} String yang dibalik.
 */
function balikkata(kata) {
  return kata.split('').reverse().join('');
}

// Contoh penggunaan:
console.log(balikkata('John Doe')); // Output: "eoD nhoJ"
