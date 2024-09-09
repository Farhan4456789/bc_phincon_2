function bandingkan_angka(angka1, angka2) {
  if (angka2 > angka1) {
    return true;
  } else if (angka2 < angka1) {
    return false;
  } else {
    return -1;
  }
}

// Contoh penggunaan:
console.log(bandingkan_angka(3, 5)); // Output: true
console.log(bandingkan_angka(7, 2)); // Output: false
console.log(bandingkan_angka(4, 4)); // Output: -1
