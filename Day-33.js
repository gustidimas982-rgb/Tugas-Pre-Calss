//=== Langkah 1 ===

//== Potongan A ==

// Tebakan Output:
// Kopi Susu
// Kopi Susu
// 20000
// undefined
// true
// false
// ["nama", "harga", "kategori"]
// ["Kopi Susu", 20000, "minuman"]

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

// Hasil Asli:
// Kopi Susu
// Kopi Susu
// 20000
// undefined
// true
// false
// ["nama", "harga", "kategori"]
// ["Kopi Susu", 20000, "minuman"]

//== Potongan B ==

// Tebakan Output:
// 30000
// Rina: Rp 30000
// Rina: Rp 20000
// 20000

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

// Hasil Asli:
// 30000
// Rina: Rp 30000
// Rina: Rp 20000
// 20000

//== Potongan C ==

// Tebakan Output:
// Senin
// Selasa
// 0
// 1
// nama: "Kopi"
// harga: 18000
// K
// O
// P
// I

const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

// Tebakan Output:
// TypeError: kopi is not iterable

// for (let x of kopi) {
//     console.log(x);
// }

// Hasil Asli:
// Senin
// Selasa
// 0
// 1
// nama: "Kopi"
// harga: 18000
// K
// O
// P
// I
// TypeError: kopi is not iterable

/*
Pertanyaan:
1. produk.nama mengambil nilai dari properti nama secara langsung, sedangkan produk[kunci] mengambil nilai berdasarkan isi variabel kunci.
   produk.stok hasilnya undefined karena properti stok sudah dihapus menggunakan delete produk.stok.

2. dompet.saldo bernilai 20000 karena belanja(10000) tetap mengubah saldo objek. this merujuk pada objek dompet.

3. for...in menghasilkan 0 dan 1 karena mengambil indeks array, sedangkan for...of pada objek kopi error karena objek biasa tidak iterable.
*/

//=== Langkah 2 ===

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX 1: Gunakan this.saldoKas
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX 2: Kembalikan saldo setelah dikurangi
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas; // FIX
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// FIX 3: Gunakan kurung siku untuk key dengan tanda hubung
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);

// FIX 4: Hapus properti menggunakan delete
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// FIX 5: Gunakan for...of untuk mengambil nilai array
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// FIX 6: Gunakan for...in untuk membaca properti object
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Gunakan Object.keys(), bukan Object.key()
console.log(Object.keys(info));

/*
Pertanyaan:
1. a. saldoKas tidak memakai this; perbaiki menjadi this.saldoKas.
   b. ambilKas() tidak mengembalikan saldo; tambahkan return this.saldoKas.
   c. kontak.no-wa salah; gunakan kontak["no-wa"].
   d. kataSandi diisi undefined, bukan dihapus; gunakan delete.
   e. for...in mengambil indeks array; gunakan for...of.
   f. for...of tidak bisa langsung digunakan pada object biasa; gunakan for...in.
   g. Object.key() salah; gunakan Object.keys().

2. Yang Error:
   a. saldoKas tanpa this menyebabkan ReferenceError.
   b. kontak.no-wa menyebabkan error karena dibaca sebagai operasi pengurangan.
   c. for...of pada object info menyebabkan TypeError.
   d. Object.key() menyebabkan TypeError karena bukan fungsi yang tersedia.
   Yang tidak Error tapi Salah:
   a. ambilKas() tidak memakai return sehingga hasilnya undefined.
   b. kataSandi = undefined tidak menghapus properti.
   c. for...in pada array mencetak indeks, bukan isi array.

3. undefined hanya mengubah nilai properti, sedangkan delete menghapus properti dari object.
   Contoh:
   const akun = { nama: "Rina", kataSandi: "abc123" };

   akun.kataSandi = undefined;
   console.log("kataSandi" in akun); // true

   delete akun.kataSandi;
   console.log("kataSandi" in akun); // false
*/

//=== Langkah 3 ===

//== 1. Kerangka ==
const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,

  jamOperasional: {
    buka: "08:00",
    tutup: "21:00"
  },

  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Teh Manis", kategori: "minuman", harga: 10000, stok: 10 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 8 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 25000, stok: 5 },
    { nama: "Cake Cokelat", kategori: "makanan", harga: 30000, stok: 6 }
  ],

  keranjang: [],

//== 2. Mencari harga menu ==
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

//== 3. Menambahkan menu ke keranjang ==
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && item.stok >= jumlah && jumlah > 0) {
        this.keranjang.push({
          nama: namaMenu,
          jumlah: jumlah
        });

        item.stok -= jumlah;
        return true;
      }
    }
    return false;
  },

//== 4. Menghitung subtotal ==
  hitungSubtotal() {
    let subtotal = 0;

    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }

    return subtotal;
  },

//== 5. Menghitung diskon ==
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    }

    return 0;
  },

//== 6. Mencetak struk ==
  cetakStruk() {
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const setelahDiskon = subtotal - diskon;
    const pajak = setelahDiskon * 0.11;
    const total = setelahDiskon + pajak;

    console.log("\n===== STRUK PEMBELIAN =====");
    console.log("Kedai: " + this.nama);
    console.log("Kota : " + this.kota);
    console.log("---------------------------");

    let nomor = 1;

    for (let item of this.keranjang) {
      const harga = this.cariHarga(item.nama);

      console.log(
        nomor + ". " + item.nama +
        " | Jumlah: " + item.jumlah +
        " | Harga satuan: Rp " + harga +
        " | Total item: Rp " + (harga * item.jumlah)
      );

      nomor++;
    }

    console.log("---------------------------");
    console.log("Subtotal : Rp " + subtotal);
    console.log("Diskon   : Rp " + diskon);
    console.log("Pajak 11%: Rp " + pajak);
    console.log("TOTAL    : Rp " + total);
    console.log("===========================");

    this.saldoKas += total;
  }
};

//== 7. Properti dinamis ==

let namaProperti = "website";

kasirKedai[namaProperti] = "www.kedaisenja.com";

console.log(namaProperti in kasirKedai); // true

delete kasirKedai[namaProperti];

console.log(namaProperti in kasirKedai); // false

//== 8. for...in pada object ==

console.log("\nJam operasional:");

for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}

console.log("\nMenu pertama:");

for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

//== 9. Object.keys dan Object.values ==

console.log(Object.keys(kasirKedai.jamOperasional));
// [ 'buka', 'tutup' ]

console.log(Object.values(kasirKedai.jamOperasional));
// [ '08:00', '21:00' ]

//== 10. Menghitung Huruf "a" ==

let jumlahHurufA = 0;

for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}

console.log("Jumlah huruf a:", jumlahHurufA);
// 2

//== 11. Uji Kasus ==

// Menu tidak ada
console.log(
  kasirKedai.tambahKeKeranjang("Es Krim", 1)
); // false

// Jumlah melebihi stok
console.log(
  kasirKedai.tambahKeKeranjang("Cake Cokelat", 100)
); // false

//== 12. Skenario 1: Diskon 10% ==

kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);

kasirKedai.cetakStruk();

/*
Skenario 1:
Kopi Susu x2 = 36000
Roti Bakar x1 = 15000

Hasil struk:
Subtotal : Rp 51000
Diskon   : Rp 5100
Pajak 11%: Rp 5049
TOTAL    : Rp 50949
*/

//== 12. Skenario 2: Diskon 15% ==

// Kosongkan keranjang untuk transaksi baru.
kasirKedai.keranjang = [];

kasirKedai.tambahKeKeranjang("Nasi Goreng", 2);
kasirKedai.tambahKeKeranjang("Cake Cokelat", 2);

kasirKedai.cetakStruk();

/*
Skenario 2:
Nasi Goreng x2 = 50000
Cake Cokelat x2 = 60000

Hasil struk:
Subtotal : Rp 110000
Diskon   : Rp 16500
Pajak 11%: Rp 10285
TOTAL    : Rp 103785
*/

//== 13. Saldo Kas Akhir ==

console.log("Saldo kas akhir: Rp " + kasirKedai.saldoKas);
// Saldo kas akhir: Rp 154734

/*
Pertanyaan:
1. Dot notation memakai titik, contoh kasirKedai.nama. Bracket notation memakai kurung siku, contoh kasirKedai[namaProperti].
   Bracket wajib jika nama properti ada di variabel atau memakai tanda hubung.

2. this.saldoKas merujuk pada saldoKas milik object kasirKedai. Jika this dihapus, bisa terjadi ReferenceError: saldoKas is not defined.
   saldoKas += jumlah;
   Error: ReferenceError: saldoKas is not defined

3. for...of mengambil nilai, contohnya pada this.menu. Sedangkan for...in mengambil kunci, contohnya pada jamOperasional.
   Keduanya berbeda karena mengambil hal yang berbeda.

4. Object biasa tidak iterable, sehingga for...of menghasilkan error:
   TypeError: kasirKedai is not iterable.
   Array dan string bisa digunakan dengan for...of.

5. Object.keys() mengambil kunci: ["buka", "tutup"]. Sedangkan Object.values() mengambil nilai: ["08:00", "21:00"].

6. return mengembalikan nilai agar bisa digunakan lagi. cetakStruk() boleh tanpa return karena hanya mencetak struk.
   Jika hitungSubtotal() hanya memakai console.log(), hasilnya undefined dan tidak bisa digunakan untuk menghitung total.
*/