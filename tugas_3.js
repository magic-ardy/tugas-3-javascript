// INTRODUCTION ASSIGNMENT

// #1
console.log(`Dwi Satya Ardyanto
Banten
25 Mei
41
Wirausahawan
`)


// #2
const nama = prompt('Masukan nama');
const asalNegara = prompt('Masukan asal negara');
const valid = confirm('Apakah data yang di isi sudah benar? ')
console.log(valid)


// #3
// console.log(`Dwi Satya Ardyanto
// Banten
// 25 Mei
// 41
// Wirausahawan
// `)


// 4
/*
const nama = prompt('Masukan nama');
const asalNegara = prompt('Masukan asal negara');
const valid = confirm('Apakah data yang di isi sudah benar? ')
alert('Terima kasih telah mengisi form');
*/



// 5
const nama = 'Dwi Satya Ardyanto'
const asalDaerah = 'Banten'
const tanggalLahir = '25 Mei'
const umur = '41'
const posisiPekerjaan = 'Wirausahawan'
console.log(nama)
console.log(asalDaerah)
console.log(tanggalLahir)
console.log(umur)
console.log(tanggalLahir)
console.log(posisiPekerjaan)

// 6
const penjumlahan = 25+10;
const perkalian = 100* 2;
const pembagian = 99 / 2;
const modulus = 99 % 2;

// CONDITIONAL ASSIGNMENT

// #1
let jabatan = CEO
if(jabatan === "CEO"){
    console.log("Tugas saya memastikan perusahaan pendapatkan laba dan pangsa pasarnya terus berkembang")
} else if(jabatan === "CTO"){
    console.log("Tugas saya menjamin agar teknologi selalu update, aman, dan disenangi oleh user")
} else if(jabatan === "HR"){
    console.log("Tugas saya melakukan rekrutmen untuk calon pegawai baru")
} else if(jabatan = "programmer"){
    console.log("Tugas saya membuat software dan aplikasi")
}

// #2
const nilai1 = 25;
const nilai2 = 50;

if (nilai1 > nilai2){
    console.log('Nilai 1 lebih besar dari Nilai 2');
} else if (nilai1 < nilai2) {
    console.log('Nilai 1 lebih kecil dari Nilai 2');
} else if (nilai1 === nilai2) {
    console.log('Nilai 1 sama dengan Nilai 2')
};

// #3
const hari = 1;

switch(hari) {
    case 1:
      console.log('Minggu');
      break;
    case 2:
      console.log('Senin')
      break;
    case 3:
        console.log('Selasa')
        break;
    case 4:
        console.log('Rabu');
        break;
    case 5:
        console.log('Kamis');
        break;
    case 6:
        console.log('Jumat');
        break;
    case 7:
        console.log('Sabtu')
  }

// #4
const gerak = 'Down';

switch(gerak) {
    case 'Up':
        console.log('Karakter berjalan ke atas')
        break;
    case 'Down':
        console.log('Karakter berjalan ke Bawah');
        break;
    case 'Right':
        console.log('Karakter berjalan ke Kanan');
        break;
    case 'Left':
        console.log('Karakter berjalan ke kiri');
        break;
}

// LOOPING ASSIGNMENT

// #1

let n = 100
for(let i = 1; i <= n; i++){
    console.log("user ke- " + i);
}

// #2
let nilaiAwal = 0
for(nilaiAwal; nilaiAwal < 20; nilaiAwal+=2){
    console.log(nilaiAwal)
}

// #3
let nilai = 0
for(nilai; nilai <= 20; nilai++){
    if(nilai % 2 == 0){
        console.log("bilangan genap")
    } else if(nilai % 2 != 0){
        console.log("bilangan ganjil");
    }
}

// #4

let validasi = confirm('Apakah Anda mau mengulang? ')
let hitung = count(validasi == true)
while(hitung >= 1 ) {
    console.log(hitung);
    hitung++
}

// #5
5. Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
	
Variable isinya prompt
While
Prompt
Misal bener, break
