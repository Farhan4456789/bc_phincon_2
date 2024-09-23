function deretFibonacci(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci.slice(0, n);
}

// Contoh penggunaan:
console.log(deretFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
