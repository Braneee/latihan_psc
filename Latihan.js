// variable
const nim = "22001";

// variable array, enampung multiple data tapi 1 tipe data
const list_nim = ["22001", "22002", "22003"];

// object, menampung multiple data dengan tipe data yang berbeda
const mahasiswa = {
  // key: value
  nim: "22001",
  nama: "Budi Santoso",
  status: true,
  matkul: [{ matkulId: "MK001, tugas: 85, uts: 88, uas: 90" }],
};

console.log(mahasiswa);

// array of object
const mahasiswaList = [
  { nim: "22001", nama: "Budi Santoso", status: true },
  { nim: "22002", nama: "Siti Aminah", status: false },
];
console.log(mahasiswaList);
