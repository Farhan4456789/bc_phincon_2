function hitungFaktorial(n) {
  if (n === 0) {
    return 1;
  }
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

// Contoh penggunaan:
console.log(hitungFaktorial(5)); // 120
console.log(hitungFaktorial(0)); // 1
