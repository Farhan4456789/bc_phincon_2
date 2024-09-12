function hitungRataRata(arr) {
  if (arr.length === 0) {
    throw new Error('Array tidak boleh kosong');
  }

  let jumlah = arr.reduce((total, nilai) => total + nilai, 0);
  let rataRata = jumlah / arr.length;

  return rataRata;
}

// Contoh penggunaan:
console.log(hitungRataRata([1, 2, 3, 4, 5])); // 3
