//==== Langkah 1 ====

//=== Potongan A ===

/*
Tebakan Output:

Dalam
Luar
Global
85
di dalam blok
putaran 0
putaran 1
*/

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}

/*
Hasil Asli:

Dalam
Luar
Global
85
di dalam blok
putaran 0
putaran 1
*/

/*
Tebakan Output:

Error, karena pesanBlok hanya dapat diakses di dalam blok if.
Error, karena i hanya dapat diakses di dalam lingkup perulangan for.
*/

// console.log(pesanBlok);
// console.log(i);

/*
Hasil Asli:

ReferenceError: pesanBlok is not defined
ReferenceError: i is not defined
*/

//=== Potongan B ===

/*
Tebakan Output:

Halo!
undefined
biru
*/

console.log(sapa());

function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);

/*
Hasil Asli:

Halo!
undefined
biru
*/

/*
Tebakan Output:

Error, karena lokasi diakses sebelum const lokasi = "Sleman" dijalankan.
Error, karena salam diakses sebelum deklarasi const salam = function () { ... } dijalankan.
*/

// console.log(lokasi);
// const lokasi = "Sleman";

// console.log(salam);
// const salam = function () {
//     return "Hai";
// };

/*
Hasil Asli:

ReferenceError: Cannot access 'lokasi' before initialization
ReferenceError: Cannot access 'salam' before initialization
*/

//=== Potongan C ===

/*
Tebakan Output:

1
2
3
1
4
*/

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());

/*
Hasil Asli:

1
2
3
1
4
*/

/*
Jawaban:
1. a. Tiga console.log(nama) menghasilkan nilai berbeda karena setiap nama punya lingkupnya sendiri.
      Di dalam fungsi dalam() nilainya "Dalam", di fungsi luar() nilainya "Luar", dan di luar fungsi nilainya "Global".
   b. hitung(100) tetap bisa memakai diskonGlobal karena variabel itu berada di luar fungsi dan masih bisa diakses. Hasilnya 100 - 10 - 5 = 85.
   c. pesanBlok dan i error kalau dipanggil dari luar karena keduanya dibuat menggunakan let dan hanya bisa digunakan di dalam blok tempat mereka dibuat.

2. a. sapa() bisa dipanggil sebelum ditulis karena deklarasi function bisa digunakan lebih awal.
   b. warna menghasilkan undefined karena var sudah dikenali sebelum barisnya dijalankan,
      tetapi nilainya belum diisi. Setelah diisi, nilainya menjadi "biru".
   c. lokasi dan salam error karena menggunakan const dan dipanggil sebelum deklarasinya dijalankan.
      JavaScript belum mengizinkan keduanya digunakan.

3. a. penghitungA terus bertambah karena fungsi yang dikembalikan masih mengingat variabel hitungan,
      meskipun fungsi buatPenghitung() sudah selesai.
   b. penghitungB mulai dari 1 lagi karena setiap kali buatPenghitung() dipanggil,
      dibuat hitungan baru yang dimulai dari 0. Jadi, hitungan A dan B terpisah.
*/

//==== Langkah 2 ====

// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
if (stok > 5) {
  let pesanStok = "Stok aman";
  console.log(pesanStok); // FIX 1: Cetak pesan di dalam blok.
}

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
console.log(hitungPotongan(50000)); // FIX 2: Cetak hasil fungsi.

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
}; // FIX 3: Deklarasikan fungsi sebelum dipanggil.
console.log(sambutan());

// Kota. Seharusnya tercetak: Yogyakarta
let kota = "Yogyakarta"; // FIX 4: Isi variabel sebelum dipanggil.
console.log(kota);

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
let total = 100000; // FIX 5: Gunakan let agar total di dalam blok terpisah.
if (true) {
  let total = 90000;
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  // FIX 6: Gunakan saldoKas dari luar, jangan buat variabel lokal baru.
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  let nomor = 0; // FIX 7: Simpan nomor di luar fungsi yang dikembalikan.
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX 8: Ambil variabel saldo dari closure, bukan this.saldo.
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

/*
Jawaban:
1. a. pesanStok dipanggil di luar blok, jadi dipindahkan ke dalam blok if.
   b. Fungsi hitungPotongan() dipanggil tetapi hasilnya tidak dicetak, jadi ditambahkan console.log().
   c. Fungsi sambutan() dipanggil sebelum const diinisialisasi, jadi deklarasinya dipindahkan ke atas.
   d. Variabel kota dipanggil sebelum diinisialisasi, jadi deklarasinya dipindahkan ke atas.
   e. var membuat total di dalam blok mengubah total luar, jadi diganti let agar variabelnya terpisah.
   f. saldoKas di dalam fungsi menjadi variabel baru, jadi deklarasi lokalnya dihapus.
   g. nomor selalu kembali ke 0 setiap fungsi dipanggil, jadi deklarasi nomor dipindahkan ke luar fungsi dalam.
   h. this.saldo tidak menunjuk ke variabel saldo yang ada, jadi diganti menjadi saldo.

2. Yang error:
   a. Problem 1: pesanStok tidak bisa diakses di luar blok.
   b. Problem 3: sambutan dipanggil sebelum const siap.
   c. Problem 4: kota dipanggil sebelum let diinisialisasi.
   Yang salah:
   a. Problem 2: hasil hitungPotongan tidak dicetak.
   b. Problem 5: total luar berubah menjadi 90000.
   c. Problem 6: saldoKas luar tetap 100000.
   d. Problem 7: nomor selalu menghasilkan 1.
   e. Problem 8: cekSaldo() menghasilkan undefined.

3. Karena let saldoKas = 0 membuat variabel baru di dalam fungsi. Variabel itu berbeda dari saldoKas yang ada di luar.
   Kejadian ini disebut variable shadowing, yaitu variabel lokal menutupi variabel dari luar.

4. Karena saldo adalah variabel lokal yang disimpan di dalam buatDompet(), bukan properti objek dompet.
   this.saldo mencari properti bernama saldo pada objek, sedangkan variabel saldo bisa diakses langsung melalui closure. Jadi, cukup gunakan return saldo.
*/

//==== Langkah 3 ====

const NAMA_WARUNG = "Kedai Ceria";
const TARIF_PAJAK = 0.11;

// FIX: Function declaration bisa dipanggil sebelum ditulis.
cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

// Function pabrik untuk membuat kasir
function buatKasir(namaKasir, modalAwal) {
  // Data privat: hanya bisa diakses lewat closure.
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK;
      const total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi++;

      riwayat.push({
        namaMenu,
        jumlah,
        total
      });

      return total;
    },

    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }

      saldoKas -= jumlah;
      return true;
    },

    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice(); // FIX: Mengembalikan salinan array.
    },

    ringkasan() {
      console.log(
        `Kasir ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo: Rp${saldoKas}`
      );
    }
  };
}

// Membuat dua kasir dengan saldo terpisah.
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Penjualan kasir pagi: 3 transaksi.
console.log("Pagi 1:", kasirPagi.catatPenjualan("Nasi Goreng", 25000, 1));
console.log("Pagi 2:", kasirPagi.catatPenjualan("Es Teh", 15000, 3));
console.log("Pagi 3:", kasirPagi.catatPenjualan("Ayam Bakar", 40000, 1));

// Penjualan kasir malam: 2 transaksi.
console.log("Malam 1:", kasirMalam.catatPenjualan("Mie Goreng", 12000, 2));
console.log("Malam 2:", kasirMalam.catatPenjualan("Kopi Susu", 30000, 1));

// Percobaan ambil kas: satu berhasil, satu gagal.
console.log("Ambil Rp20.000:", kasirPagi.ambilKas(20000)); // true
console.log("Ambil Rp999.999:", kasirPagi.ambilKas(999999)); // false

// Ringkasan kedua kasir.
kasirPagi.ringkasan();
kasirMalam.ringkasan();

// Membuktikan data saldo bersifat privat.
console.log("Properti saldoKas:", kasirPagi.saldoKas); // undefined

kasirPagi.saldoKas = 999999;
console.log("Saldo sebenarnya:", kasirPagi.cekSaldo());
// Hasil: 202100, bukan 999999.
// Catatan: assignment tadi membuat properti publik baru, tetapi tidak mengubah variabel saldoKas privat.

// Membuktikan riwayat yang dikembalikan adalah salinan.
const salinanRiwayat = kasirPagi.lihatRiwayat();

salinanRiwayat.push({
  namaMenu: "Menu Palsu",
  jumlah: 1,
  total: 1000
});

console.log("Panjang salinan:", salinanRiwayat.length); // 4
console.log("Panjang riwayat asli:", kasirPagi.lihatRiwayat().length); // 3

// Function pabrik untuk menghitung harga setelah diskon.
function buatPenghitungDiskon(persen) {
  return (harga) => harga - harga * persen;
}

const diskon10 = buatPenghitungDiskon(0.10);
const diskon25 = buatPenghitungDiskon(0.25);

console.log("Harga diskon 10%:", diskon10(80000)); // 72000
console.log("Harga diskon 25%:", diskon25(80000)); // 60000

// Shadowing: nama variabel sama, scope berbeda.
const pesanScope = "Variabel global";

function tesShadowing() {
  const pesanScope = "Variabel lokal";
  console.log("Di dalam fungsi:", pesanScope);
}

console.log("Di luar fungsi:", pesanScope); // Variabel global
tesShadowing(); // Variabel lokal

/*
Percobaan Function Expression:

Coba aktifkan dua baris di bawah ini satu per satu
sebagai satu percobaan, lalu jalankan.

HASIL:
ReferenceError karena function expression yang disimpan
dalam const belum bisa digunakan sebelum inisialisasi.

// console.log(cetakJudulEkspresi());

// const cetakJudulEkspresi = function () {
//   console.log(NAMA_WARUNG.toUpperCase());
// };

*/

/*
Jawaban:
1. kasirPagi.saldoKas menghasilkan undefined karena saldoKas adalah variabel privat,
   bukan properti object. Closure membuat method tetap bisa mengakses saldoKas tersebut.

2. Saldo kasir pagi dan malam terpisah karena setiap pemanggilan buatKasir membuat variabel privat dan lingkungan baru.

3. saldoKas, jumlahTransaksi, riwayat, dan namaKasir tetap diingat oleh method yang dikembalikan.
   Ini terjadi karena closure mempertahankan akses ke lingkungan pembuatnya.
   
4. TARIF_PAJAK bisa dipakai karena JavaScript menggunakan lexical scope: fungsi
   bisa mengakses variabel dari lingkungan tempat fungsi itu dideklarasikan.
   
5. cetakJudul bisa dipanggil lebih awal karena merupakan function declaration yang mengalami hoisting.
   Jika dibuat sebagai const berisi function expression, pemanggilan sebelum inisialisasi menghasilkan ReferenceError.
   
6. Function diskon mengetahui nilai persen karena closure mengingat nilai yang diterima saat buatPenghitungDiskon
   dipanggil. Jadi diskon10 mengingat 0.10 dan diskon25 mengingat 0.25.
*/

//==== Bonus ====

/*
Tebakan Output:

0 1 2
3 3 3
*/

const fungsiLet = [];

for (let i = 0; i < 3; i++) {
  fungsiLet.push(() => i);
}

console.log(fungsiLet[0](), fungsiLet[1](), fungsiLet[2]());


const fungsiVar = [];

for (var j = 0; j < 3; j++) {
  fungsiVar.push(() => j);
}

console.log(fungsiVar[0](), fungsiVar[1](), fungsiVar[2]());

/*
Hasil Asli:

0 1 2
3 3 3
*/

/*
JAWABAN:

Hasil kedua perulangan berbeda karena let dan var memiliki scope yang berbeda.

Pada perulangan pertama, let membuat variabel i untuk setiap putaran.
Jadi, setiap fungsi mengingat nilai i masing-masing, yaitu 0, 1, dan 2.

Pada perulangan kedua, var hanya memiliki satu variabel j yang digunakan bersama oleh semua fungsi.
Fungsi-fungsi tersebut baru dipanggil setelah perulangan selesai, saat nilai j sudah menjadi 3.

Kesimpulannya:
let membuat setiap fungsi mengingat nilai yang berbeda,
sedangkan var membuat semua fungsi membaca variabel
j yang sama, dengan nilai akhirnya 3.
*/