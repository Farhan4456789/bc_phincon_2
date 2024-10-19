// lampu.js

document.getElementById('btn-toggle').addEventListener('click', function () {
  var lampu = document.getElementById('lampu');
  var btn = document.getElementById('btn-toggle');

  if (lampu.src.includes('img/lampu-mati.png')) {
    lampu.src = 'img/lampu-nyala.png';
    btn.textContent = 'Matikan Lampu';
  } else {
    lampu.src = 'img/lampu-mati.png';
    btn.textContent = 'Nyalakan Lampu';
  }
});
