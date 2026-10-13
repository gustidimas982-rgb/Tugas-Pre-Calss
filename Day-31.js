// === Contoh — Menghitung mundur ===

for (let i = 7; i >= 1; i--) {
  console.log(i);
}
console.log("Mulai!");

// === Contoh — Menjumlahkan angka 1 sampai 13 ===

let total = 0;

for (let i = 1; i <= 13; i++) {
  total += i;
}

console.log("Total:", total);

// === Contoh — Mengakses elemen array ===

const buah = ["Pisang", "Durian", "Manggis", "Kiwi", "Stroberi"];

for (let i = 0; i < buah.length; i++) {
  console.log(i + 1 + ".", buah[i]);
}

// === Contoh lengkap — Menebak angka ===

let angkaRahasia = 9;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

// === Contoh penggunaan nyata — Konfirmasi pengguna ===

let password;

do {
  password = prompt("Masukkan password: ");
} while (password !== "12345");

console.log("Password benar! Selamat datang!");

// === Menghentikan Perulangan: break ===

for (let i = 1; i <= 100; i++) {
  if (i === 7) {
    console.log(
      "Angka ditemukan: " + i + ". Pencarian dihentikan."
    );
    break;
  }

  console.log("Memeriksa angka " + i);
}

// === Contoh — Memfilter data array ===

const siswa = [
  "Fariz",
  "Zaki",
  "tidak hadir",
  "Hussein",
  "tidak hadir",
  "Deddy"
];

console.log("Daftar siswa yang hadir:");

for (let i = 0; i < siswa.length; i++) {
  if (siswa[i] === "tidak hadir") {
    continue; // Lewati siswa yang tidak hadir
  }

  console.log("-", siswa[i]);
}

// === Simulasi Lengkap — Kombinasi Looping ===

const daftarHarga = [10000, 15000, -5000, 20000, 0, 12000, 1500000];

let totalHarga = 0;
let barangValid = 0;
let barangTidakValid = 0;

for (let i = 0; i < daftarHarga.length; i++) {
  const harga = daftarHarga[i];

  // Lewati harga yang tidak valid
  if (harga < 0 || harga > 1000000) {
    console.log("Harga tidak valid dilewati:", harga);
    barangTidakValid++;
    continue;
  }

  totalHarga += harga;
  barangValid++;
}

console.log("---");
console.log("Total barang       :", daftarHarga.length);
console.log("Barang valid       :", barangValid);
console.log("Barang tidak valid :", barangTidakValid);
console.log("Total belanja      :", totalHarga);