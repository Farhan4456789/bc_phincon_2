function hitungBilanganGanjil(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// Contoh penggunaan:
console.log(hitungBilanganGanjil(10)); // 5
console.log(hitungBilanganGanjil(20)); // 10
