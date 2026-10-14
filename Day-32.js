// === Langkah 1 ===

// == Potongan A ==

// Tebakan Output:
// "Jus" ✔
// "Air" ✔
// ["Kopi", "Roti", "Susu"] ✔
// ["Roti", "Susu"] ✔
// 2 ✔
// -1 ✔
// true ✔
// "Susu" ✔

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

// Hasil Asli:
// "Jus"
// "Air"
// ["Kopi", "Roti", "Susu"]
// ["Roti", "Susu"]
// 2
// -1
// true
// "Susu"

// == Potongan B ==

// Tebakan Output:
// 5 ✔
// 5 ✔
// undefined ✔

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);

// Hasil Asli:
// 5
// 5
// undefined

// == Potongan C ==

// Tebakan Output:
// 40000 ✔
// 45000 ✔
// negatif ✔
// bukan negatif ✔

const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
console.log(cekAngka(5));

// Hasil Asli:
// 40000
// 45000
// negatif
// bukan negatif

/*
Pertanyaan:
1. Karena menu berisi semua elemen yang tersisa setelah diubah, sedangkan irisan hanya mengambil sebagian elemen dari menu.
   Method yang mengubah array asli:
   a. push()
   b. unshift()
   c. pop()
   d. shift()
   e. splice()
   Method yang tidak mengubah array asli:
   a. slice()

2. tambah() menggunakan return untuk mengembalikan hasil penjumlahan sehingga hasilnya bisa disimpan ke variabel. Sedangkan,
   cetakTambah() menggunakan console.log() untuk menampilkan cetakTambah() menggunakan console.log() untuk menampilkan.
   y bernilai undefined karena fungsi cetakTambah() tidak memiliki return.

3. Karena parameter persen memiliki nilai bawaan (default) sebesar 10. Jika kita tidak memasukkan nilai persen, program otomatis menggunakan diskon 10%.
   baris console.log("Baris ini muncul atau tidak?") tidak akan tercetak karena baris itu berada setelah return "negatif".
*/

// === Langkah 2 ===

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: Mengganti dari unshift() ke push().
daftarBelanja.push("Susu");

// FIX 2: Mengganti dari slice(1, 1) ke splice(1, 1).
daftarBelanja.splice(1, 1);

// FIX 3: Mengganti dari indexOf() ke includes().
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: Menambahkan length - 1 pada [daftarBelanja.length].
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: Menambahkan nilai: return.
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// FIX 6: Menambahkan nilai: return.
const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// FIX 7: Mengubah deklarasi hitungTotal ke atas dan sebaliknya.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

console.log(hitungTotal(80000, 8800));

/*
Pertanyaan:

1. Tujuh kesalahan:
   a. unshift() menambahkan Susu di depan, seharusnya push()
      agar Susu ditambahkan di belakang.
   b. slice() tidak menghapus elemen asli, seharusnya splice().
   c. indexOf() menghasilkan nomor indeks, seharusnya includes()
      agar hasilnya true atau false.
   d. length menghasilkan jumlah elemen, bukan indeks terakhir,
      jadi harus menggunakan length - 1.
   e. hitungDiskon() tidak memiliki return sehingga hasilnya
      undefined; tambahkan return.
   f. hitungPajak() tidak memiliki return sehingga hasilnya
      undefined; tambahkan return.
   g. hitungTotal() dipanggil sebelum deklarasi const-nya,
      jadi deklarasinya harus dipindahkan ke atas.

2. Kesalahan yang menyebabkan error:
   Pemanggilan hitungTotal() sebelum deklarasi const-nya
   menyebabkan ReferenceError.

   Kesalahan yang tidak langsung menyebabkan error:
   unshift(), slice(), indexOf(), penggunaan length tanpa -1,
   serta tidak adanya return pada hitungDiskon() dan hitungPajak().
   Kesalahan-kesalahan ini membuat hasilnya tidak sesuai harapan.

3. hitungDiskon() dan hitungPajak() sama-sama menghasilkan
   undefined karena keduanya tidak mengembalikan hasil dengan
   return. Walaupun cara penulisan fungsinya berbeda,
   aturan return tetap sama.
*/

// === Langkah 3 ===

// 1. Data menu, harga, dan keranjang
const kasirNamaMenu = [
  "Kopi Susu",
  "Es Teh",
  "Roti Bakar",
  "Nasi Goreng",
  "Jus Jeruk"
];

const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];

let kasirKeranjang = [];

// 2. FUNCTION DECLARATION: mencari harga menu
function kasirCariHarga(namaMenu) {
  let indeks = kasirNamaMenu.indexOf(namaMenu);

  if (indeks === -1) {
    return 0;
  }

  return kasirHargaMenu[indeks];
}

// 3. FUNCTION EXPRESSION: menghitung subtotal
const kasirHitungSubtotal = function () {
  let subtotal = 0;

  for (let i = 0; i < kasirKeranjang.length; i++) {
    subtotal += kasirCariHarga(kasirKeranjang[i]);
  }

  return subtotal;
};

// 4. ARROW FUNCTION: menghitung diskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

// 5. ARROW FUNCTION RINGKAS: menghitung pajak
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// 6. FUNCTION: mencetak struk
function kasirCetakStruk(subtotal, diskon, pajak) {
  let daftarItem = "";

  for (let i = 0; i < kasirKeranjang.length; i++) {
    let nama = kasirKeranjang[i];
    let harga = kasirCariHarga(nama);

    daftarItem += `${i + 1}. ${nama} - Rp${harga}\n`;
  }

  let total = subtotal - diskon + pajak;

  console.log(`
========== STRUK KASIR ==========
Daftar item:
${daftarItem}
Subtotal : Rp${subtotal}
Diskon   : Rp${diskon}
Pajak    : Rp${pajak}
Total    : Rp${total}
=================================
`);
}

// == Skenario 1: DISKON 10% ==

console.log("===== SKENARIO 1 =====");

// Contoh membuktikan push() mengubah array asli
console.log("Sebelum push:", kasirKeranjang);

kasirKeranjang.push("Kopi Susu");

console.log("Sesudah push:", kasirKeranjang);

// Menambahkan item lainnya
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.push("Nasi Goreng");

// Menambahkan item prioritas di depan
kasirKeranjang.unshift("Jus Jeruk");

// Membatalkan satu item terakhir
let kasirItemBatal = kasirKeranjang.pop();
console.log("Item yang dibatalkan:", kasirItemBatal);

// Membatalkan satu item pertama
let kasirItemBatalDepan = kasirKeranjang.shift();
console.log("Item depan yang dibatalkan:", kasirItemBatalDepan);

// Mengganti Es Teh dengan Nasi Goreng
// FIX: splice() mengubah array asli.
kasirKeranjang.splice(1, 1, "Nasi Goreng");

// Menambahkan Jus Jeruk kembali
kasirKeranjang.push("Jus Jeruk");

console.log("Keranjang akhir:", kasirKeranjang);

// Mengecek apakah Kopi Susu ada di keranjang
console.log(
  "Ada Kopi Susu?",
  kasirKeranjang.includes("Kopi Susu")
);

// Mengambil tiga item pertama tanpa mengubah keranjang
let kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat:", kasirPaketCepat);

// Menghitung subtotal, diskon, pajak, dan total
let kasirSubtotal1 = kasirHitungSubtotal();
let kasirDiskon1 = kasirHitungDiskon(kasirSubtotal1);
let kasirDasarPajak1 = kasirSubtotal1 - kasirDiskon1;
let kasirPajak1 = kasirHitungPajak(kasirDasarPajak1);

kasirCetakStruk(kasirSubtotal1, kasirDiskon1, kasirPajak1);

// Hasil skenario 1:
// Keranjang: ["Kopi Susu", "Nasi Goreng", "Roti Bakar", "Jus Jeruk"]
// Subtotal: 67000
// Diskon: 6700
// Pajak: 6633
// Total: 66933

// == Skenario 2: DISKON 15% ==

console.log("===== SKENARIO 2 =====");

// Mengosongkan keranjang untuk skenario baru
kasirKeranjang = [];

// Mengisi keranjang dengan enam item
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Jus Jeruk");

console.log("Keranjang akhir:", kasirKeranjang);

// Mengecek menu dan mengambil tiga item pertama
console.log(
  "Ada Kopi Susu?",
  kasirKeranjang.includes("Kopi Susu")
);

kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat:", kasirPaketCepat);

// Menghitung subtotal, diskon, pajak, dan total
let kasirSubtotal2 = kasirHitungSubtotal();
let kasirDiskon2 = kasirHitungDiskon(kasirSubtotal2);
let kasirDasarPajak2 = kasirSubtotal2 - kasirDiskon2;
let kasirPajak2 = kasirHitungPajak(kasirDasarPajak2);

kasirCetakStruk(kasirSubtotal2, kasirDiskon2, kasirPajak2);

// Hasil skenario 2:
// Keranjang: ["Kopi Susu", "Nasi Goreng", "Roti Bakar",
//             "Nasi Goreng", "Nasi Goreng", "Jus Jeruk"]
// Subtotal: 111000
// Diskon: 16650
// Pajak: 10378.5
// Total: 104728.5

/*
Pertanyaan:
1. Apakah array method mengubah array asli?

   push() mengubah array asli karena menambahkan item ke belakang.
   Buktinya, sebelum push() keranjang kosong, sedangkan setelah
   push("Kopi Susu"), keranjang berisi Kopi Susu.

2. Apa beda splice() dan slice()?

   splice() bisa menghapus, menambahkan, atau mengganti elemen
   pada array asli. Contohnya:
   kasirKeranjang.splice(1, 1, "Nasi Goreng");

   slice() mengambil sebagian elemen tanpa mengubah array asli.
   Contohnya:
   kasirKeranjang.slice(0, 3);
   Kode tersebut mengambil tiga item pertama untuk paket cepat.

3. Kenapa kasirCariHarga() memakai return?

   Karena harga perlu dikembalikan supaya bisa digunakan oleh
   kasirHitungSubtotal() untuk menjumlahkan semua harga.
   Jika diganti console.log(), harga hanya ditampilkan dan
   tidak dikembalikan. Akibatnya, subtotal tidak dapat dihitung
   dengan benar dan bisa menghasilkan NaN.

4. Parameter dan argumen:

   Parameter adalah nama variabel pada definisi fungsi.
   Contoh: namaMenu pada function kasirCariHarga(namaMenu).

   Argumen adalah nilai yang diberikan saat fungsi dipanggil.
   Contoh: "Kopi Susu" pada kasirCariHarga("Kopi Susu").

5. Kenapa kasirHitungPajak() bisa menerima satu atau dua argumen?

   Karena parameter tarif memiliki nilai default 0.11.
   Jika dipanggil kasirHitungPajak(80000), tarif otomatis 11%.
   Jika dipanggil kasirHitungPajak(80000, 0.05), tarifnya 5%.

6. Apa yang terjadi jika fungsi dipanggil sebelum didefinisikan?

   Function declaration seperti kasirCariHarga() dapat dipanggil
   sebelum baris deklarasinya karena hoisting.

   Function expression yang disimpan dalam const, seperti
   kasirHitungSubtotal, tidak bisa dipanggil sebelum deklarasinya
   dijalankan. Jika dipanggil terlalu awal, terjadi
   ReferenceError karena variabel masih berada dalam
   temporal dead zone.

   Percobaan (sudah dijadikan komentar):

   // console.log(kasirCariHarga("Kopi Susu"));
   // Hasil jika dipanggil sebelum deklarasi:
   // 18000

   // console.log(kasirHitungSubtotal());
   // Jika dipanggil sebelum deklarasi const:
   // ReferenceError: Cannot access 'kasirHitungSubtotal'
   // before initialization

   Kedua baris di atas sengaja dijadikan komentar agar tidak
   menghentikan program utama.
*/