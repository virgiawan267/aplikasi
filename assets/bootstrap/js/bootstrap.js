var nilai = document.getElementById("nilai");
var toefl = document.getElementById("toefl");
var nilai_tertulis = document.getElementById("nilai_tertulis");
var nilai_praktek = document.getElementById("nilai_praktek");
var nilai_toefl = document.getElementById("nilai_toefl");
var na_toefl = document.getElementById("na_toefl");
var status_beasiswa = document.getElementById("status_beasiswa");
var na_avg = document.getElementById("na_avg");

var nilai_ujian_tertulis_1 = prompt("Masukkan Nilai Ujian Tertulis 1");
var nilai_ujian_tertulis_2 = prompt("Masukkan Nilai Ujian Tertulis 2");
var nilai_ujian_praktek = prompt("Masukkan Nilai Ujian Praktek");
var nilai_ujian_toefl = prompt("Masukkan Nilai Ujian Toefl");

var avg_nilai_ujian =
  (nilai_ujian_tertulis_1 + nilai_ujian_tertulis_2 + nilai_ujian_praktek) / 3;

var nilai_akhir_toefl = 0;
var v_nilai_tertulis = (nilai_ujian_tertulis_1 + nilai_ujian_tertulis_2) / 2;
var v_nilai_praktek = nilai_ujian_praktek;

if (avg_nilai_ujian > 90) {
  nilai_tertulis.innerHTML = "Nilai Tertulis " + v_nilai_tertulis;
  nilai_praktek.innerHTML = "Nilai Praktek " + v_nilai_praktek;
  status_beasiswa.innerHTML = "LULUS BEASISWA";
  na_avg.innnerHTML = avg_nilai_ujian;
} else {
  status_beasiswa.innerHTML = "TIDAK LULUS BEASISWA";
  na_avg.innnerHTML = avg_nilai_ujian;
}

if (nilai_ujian_toefl > 500) {
  nilai_toefl.innerHTML = nilai_ujian_toefl;
  na_toefl.innerHTML = "Nilai 100";
} else if (nilai_ujian_toefl <= 500 && nilai_ujian_toefl >= 450) {
  nilai_toefl.innerHTML = nilai_ujian_toefl;
  na_toefl.innerHTML = "Nilai 85";
} else if (nilai_ujian_toefl < 450) {
  nilai_toefl.innerHTML = nilai_ujian_toefl;
  na_toefl.innerHTML = "Nilai 50";
}
