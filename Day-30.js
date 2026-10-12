// === Langkah 1 ===

// == Potongan A ==

// Tebakan Output:
// 2: masuk ✔
// 4: masuk ✔
// 6: masuk ✔

if (0) {
  console.log("1: masuk");
}
// Tebakan: Falsy ✔
// Alasan: Karena angka 0 termasuk Falsy
// Hasil Asli: Falsy
if ("0") {
  console.log("2: masuk");
}
// Tebakan: Truthy ✔
// Alasan: Karena "0" merupakan String yang tidak kosong termasuk Truthy
// Hasil Asli: Truthy
if ("") {
  console.log("3: masuk");
}
// Tebakan: Falsy ✔
// Alasan: Karena "" merupakan String kosong termasuk Falsy
// Hasil Asli: Falsy
if ([]) {
  console.log("4: masuk");
}
// Tebakan: Truthy ✔
// Alasan: Karena [] merupakan Array kosong termasuk Truthy
// Hasil Asli: Truthy
if (null) {
  console.log("5: masuk");
}
// Tebakan: Falsy ✔
// Alasan: Karena nilanya null termasuk Falsy
// Hasil Asli: Falsy
if (-1) {
  console.log("6: masuk");
}
// Tebakan: Truthy ✔
// Alasan: Karena -1 merupakan angka selain 0 termasuk Truthy
// Hasil Asli: Truthy

// Hasil Asli:
// 2: masuk
// 4: masuk
// 6: masuk

// == Potongan B ==

// Tebakan Output:
// Diskon 5% ✔

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil Asli: 
// Diskon 5%

// == Potongan C ==

// Tebakan Output: 
// Promo Akhir Pekan ✔
// Promo Keluarga ✔

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Hasil Asli:
// Promo Akhir Pekan
// Promo Keluarga

/*
Pertanyaan:
1. "0" tetap truthy karena merupakan string yang berisi karakter 0, bukan string kosong. [] juga truthy karena array merupakan objek,
   meskipun isinya kosong. Dalam JavaScript, nilai seperti 0, "", null, undefined, false, dan NaN yang termasuk falsy.

2. Hasilnya bukan diskon 15% karena kondisi belanja >= 25000 sudah benar untuk nilai 120000.
   JavaScript menjalankan blok pertama yang kondisinya benar, lalu melewati semua else if berikutnya.
   Cara memperbaikinya adalah dengan menukar urutan dari "Diskon 15%" ke "Diskon 5%" dan sebaliknya.

3. Dua baris tercetak karena tidak ada break setelah case "sabtu".
   Supaya hanya satu baris yang tercetak, tambahkan break setelah case sabtu.
*/


// === Langkah 2 ===

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}
// FIX 1: Urutkan kondisi dari nominal terbesar ke terkecil.

// Potongan member. Gold 5000, silver 2000, lainnya 0.
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break; // FIX 3
// FIX 2: Perbaiki nama variabel jenismember menjadi jenisMember.
// FIX 3: Tambahkan break pada case gold.
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}
// FIX 4: Gunakan === untuk membandingkan nilai.

// Total akhir
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas.
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}
// FIX 5: Gunakan >= agar uang pas dianggap lunas.

console.log(diskon, potonganMember, totalAkhir);

// HASIL:
// Voucher tidak dipakai
// Status: Lunas
// 8000 5000 67000

/*
Pertanyaan:
1. 5 kesalahan dan perbaikannya:
   a. Urutan kondisi diskon salah karena nominal kecil diperiksa dahulu; urutkan dari terbesar ke terkecil.
   b. Nama jenismember tidak sama dengan jenisMember; gunakan nama variabel yang benar.
   c. case "gold" tidak memiliki break; tambahkan break agar nilai 5000 tidak tertimpa.
   d. kodeVoucher = "" mengisi variabel dengan string kosong, bukan membandingkan nilainya; gunakan ===.
   e. Kondisi uangBayar > totalAkhir tidak menerima uang pas; ubah menjadi uangBayar >= totalAkhir.

2. Letak mana yang error dan yang tidak tapi salah yaitu:
   a. Error: nama jenismember yang tidak didefinisikan akan menghasilkan ReferenceError pada JavaScript biasa ketika baris tersebut dijalankan.
      Eksekusi skrip berhenti jika error tidak ditangani.
   b. Tidak error tapi salah: urutan diskon yang keliru, break yang hilang, assignment pada kondisi voucher, dan penggunaan > untuk pembayaran uang pas.

3. Perbedaan =, ==, dan === yaitu:
   a. = digunakan untuk memberikan nilai kepada variabel.
   b. == membandingkan nilai dengan kemungkinan konversi tipe data.
   c. === membandingkan nilai dan tipe data tanpa konversi tipe otomatis.
   if (kodeVoucher = "") tidak menghasilkan error sintaks karena assignment diperbolehkan dalam kondisi if.
*/


// === Langkah 3 ===

function jalankanKasir(kasirData) {
  const kasirNamaPelanggan = kasirData.nama;
  const kasirTotalBelanja = kasirData.belanja;
  const kasirHari = kasirData.hari;
  const kasirJenisMember = kasirData.member;
  const kasirKodeVoucher = kasirData.voucher;
  const kasirUangBayar = kasirData.bayar;

  let kasirDiskon = 0;
  let kasirPotonganMember = 0;
  let kasirPromoHari = 0;
  let kasirPotonganVoucher = 0;

  // 1. Diskon berdasarkan total belanja
  if (kasirTotalBelanja >= 100000) {
    kasirDiskon = kasirTotalBelanja * 0.15;
  } else if (kasirTotalBelanja >= 50000) {
    kasirDiskon = kasirTotalBelanja * 0.10;
  } else if (kasirTotalBelanja >= 25000) {
    kasirDiskon = kasirTotalBelanja * 0.05;
  } else {
    kasirDiskon = 0;
  }

  // 2. Potongan member
  switch (kasirJenisMember) {
    case "gold":
      kasirPotonganMember = 5000;
      break;
    case "silver":
      kasirPotonganMember = 2000;
      break;
    default:
      kasirPotonganMember = 0;
      break;
  }

  // 3. Promo berdasarkan hari
  switch (kasirHari) {
    case "jumat":
      kasirPromoHari = 3000;
      break;
    case "sabtu":
    case "minggu":
      // Tidak perlu break di antara sabtu dan minggu.
      kasirPromoHari = 5000;
      break;
    default:
      kasirPromoHari = 0;
      break;
  }

  // 4. Validasi nama menggunakan Truthy/Falsy
  if (kasirNamaPelanggan) {
    console.log(`Pelanggan: ${kasirNamaPelanggan}`);
  } else {
    console.log("Nama pelanggan belum diisi");
  }

  // 5. Validasi voucher menggunakan Truthy/Falsy
  if (kasirKodeVoucher) {
    kasirPotonganVoucher = 2000;
    console.log(`Voucher dipakai: ${kasirKodeVoucher}`);
  } else {
    kasirPotonganVoucher = 0;
    console.log("Voucher tidak dipakai");
  }

  // 6. Menghitung total akhir
  const kasirTotalAkhir =
    kasirTotalBelanja -
    kasirDiskon -
    kasirPotonganMember -
    kasirPromoHari -
    kasirPotonganVoucher;

  console.log(`Total belanja: Rp${kasirTotalBelanja}`);
  console.log(`Diskon belanja: Rp${kasirDiskon}`);
  console.log(`Potongan member: Rp${kasirPotonganMember}`);
  console.log(`Promo hari: Rp${kasirPromoHari}`);
  console.log(`Potongan voucher: Rp${kasirPotonganVoucher}`);
  console.log(`Total akhir: Rp${kasirTotalAkhir}`);

  // 7. Status pembayaran
  if (kasirUangBayar > kasirTotalAkhir) {
    const kasirKembalian = kasirUangBayar - kasirTotalAkhir;
    console.log(`Status: Lunas, kembalian Rp${kasirKembalian}`);
  } else if (kasirUangBayar === kasirTotalAkhir) {
    console.log("Status: Lunas (uang pas)");
  } else {
    const kasirKekurangan = kasirTotalAkhir - kasirUangBayar;
    console.log(`Status: Kurang Rp${kasirKekurangan}`);
  }

  console.log("------------------------------");
}

// SKENARIO 1: Diskon 15%, promo Jumat, pembayaran lebih
jalankanKasir({
  nama: "Maulana",
  belanja: 120000,
  hari: "jumat",
  member: "gold",
  voucher: "SENJA10",
  bayar: 100000
});

// HASIL SKENARIO 1:
// Pelanggan: Maulana
// Voucher dipakai: SENJA10
// Total belanja: Rp120000
// Diskon belanja: Rp18000
// Potongan member: Rp5000
// Promo hari: Rp3000
// Potongan voucher: Rp2000
// Total akhir: Rp92000
// Status: Lunas, kembalian Rp8000

// SKENARIO 2: Diskon 10%, promo Sabtu, pembayaran pas, nama kosong
jalankanKasir({
  nama: "",
  belanja: 60000,
  hari: "sabtu",
  member: "silver",
  voucher: "HEMAT",
  bayar: 47000
});

// HASIL SKENARIO 2:
// Nama pelanggan belum diisi
// Voucher dipakai: HEMAT
// Total akhir: Rp45000
// Status: Lunas, kembalian Rp2000
// Catatan: total akhir yang benar Rp45000 karena voucher
// mengurangi Rp2000 dari Rp47000 sebelum pembayaran.
// Agar pembayaran pas, nilai bayar perlu Rp45000.

// SKENARIO 3: Tidak ada diskon, default hari, voucher kosong, pembayaran kurang
jalankanKasir({
  nama: "Rafif",
  belanja: 20000,
  hari: "senin",
  member: "regular",
  voucher: "",
  bayar: 15000
});

// HASIL SKENARIO 3:
// Pelanggan: Rafif
// Voucher tidak dipakai
// Total akhir: Rp20000
// Status: Kurang Rp5000

/*
Pertanyaan: 
1. Supaya diskon tertinggi yang memenuhi syarat dipilih terlebih dahulu. Jika urutannya dibalik,
   nominal besar seperti Rp120.000 bisa mendapatkan diskon 5% saja karena kondisi Rp25.000 sudah terpenuhi.

2. Karena kita membandingkan satu variabel, yaitu kasirHari, dengan beberapa nilai tetap seperti "jumat", "sabtu", dan "minggu".
   Dengan switch, kode lebih rapi dan mudah dibaca.

3. Di antara case "sabtu": dan case "minggu":. Keduanya sengaja digabung karena memberikan promo yang sama, yaitu Rp5.000.
   break tetap ditulis setelah blok promo tersebut agar tidak berlanjut ke default.

4. false, 0, dan " "

5. Jika jumlahBeli = -1, maka:
   a. if (jumlahBeli) bernilai benar karena -1 adalah nilai truthy.
   b. if (jumlahBeli > 0) bernilai salah karena -1 tidak lebih besar dari 0.
*/


// === Bonus ===

let bonusBulan = 4;
let bonusJumlahHari;

// Menentukan jumlah hari berdasarkan nomor bulan
switch (bonusBulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    bonusJumlahHari = 30;
    break;

  case 2:
    bonusJumlahHari = "28 atau 29";
    break;

  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    bonusJumlahHari = 31;
    break;

  default:
    console.log("Bulan tidak valid");
}

if (bonusBulan >= 1 && bonusBulan <= 12) {
  console.log(`Bulan ${bonusBulan} memiliki ${bonusJumlahHari} hari.`);
}

// HASIL:
// Bulan 4 memiliki 30 hari.

// Pertanyaan bonus:
// Beberapa case dapat digabung tanpa break di antaranya
// karena semuanya menghasilkan jumlah hari yang sama.
// break ditulis setelah hasil ditentukan agar switch berhenti.