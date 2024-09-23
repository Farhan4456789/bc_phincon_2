function hitungJumlahKata(kalimat) {
  let kataArray = kalimat.trim().split(/\s+/);

  return kataArray.length;
}

// Contoh penggunaan:
console.log(hitungJumlahKata('Saya suka belajar Javascript')); // 4
