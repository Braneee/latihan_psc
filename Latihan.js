// // variable
// const nim = "22001";

// variable array, enampung multiple data tapi 1 tipe data
const list_nim = ["22001", "22002", "22003"];

// object, menampung multiple data dengan tipe data yang berbeda
const mahasiswa = {
  // key: value
  nim: "22001",
  nama: "Budi Santoso",
  umur: 21,
  status: true,
  matkul: [{ matkulId: "MK001", tugas: 85, uts: 88, uas: 90 }],
};

console.log(mahasiswa);

// array of object
const mahasiswaList = [
  { nim: "22001", nama: "Budi Santoso", status: true },
  { nim: "22002", nama: "Siti Aminah", status: false },
];
console.log(mahasiswaList);

// destrukturisasi object
const mahasiswa2 = {
  nim: "22001",
  nama: "Budi Santoso",
  umur: 21,
  status: true,
};

// const nama = mahasiswa.nama;
// console.log(nama);

// const umur = mahasiswa.umur;
// console.log(umur);
// if (umur > 21) {
//   console.log("Mahasiswa sudah dewasa");
// } else {
//   console.log("Mahasiswa masih remaja");
// }

const { nim, nama, umur } = mahasiswa2;
console.log("Nama: " + nama, "NIM: ", nim, "Umur: " + umur);

// literal output, konsep penggabungan variabel dengan string
console.log(`Nama: ${nama}, NIM: ${nim}, Umur: ${umur}`);

// desctrukturisasi array of object
const listMahasiswa = [
  { nim: "22001", nama: "Budi Santoso", umur: 21, status: true },
  { nim: "22002", nama: "Siti Aminah", umur: 20, status: false },
  { nim: "22003", nama: "Andi Wijaya", umur: 22, status: true },
];

// spread, nambah data
const mhs3 = { nim: "22003", nama: "Andi Wijaya", umur: 22, status: true };

// spread ke array, tambahkan ke array
const new_listMahasiswa = [...listMahasiswa, mhs3];

// data before 3, data after 4
console.log(new_listMahasiswa);

// latihan soal
// 1. buat 1 object mahasiswa terdiri:
// - nama
// - nim
// 2. buat array object listMatkul, tiap object terdiri dari:
// - matkulId
// - nilai
// - matkulNama
// 3. spread arry listMatkul ke dalam object mahasiswa
// 4. tampilkan dengan literal, output biodata mahasiswa dan matkul yang di ambil
