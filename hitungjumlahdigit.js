function hitungJumlahDigit(n) {
  let sum = 0;
  let numStr = n.toString();

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}

// Contoh penggunaan:
console.log(hitungJumlahDigit(12345)); // 15
console.log(hitungJumlahDigit(9876)); // 30
