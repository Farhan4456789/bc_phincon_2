function cekTahunKabisat(n) {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(cekTahunKabisat(2020)); // true
console.log(cekTahunKabisat(2021)); // false
