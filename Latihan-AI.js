// 1. buat 1 object mahasiswa terdiri dari nama, nim
const mahasiswa = {
  nama: "Bima Arya",
  nim: "22005",
};

// 2. buat array object listMatkul, tiap object terdiri dari: matkulId, nilai, matkulNama
const listMatkul = [
  { matkulId: "MK001", nilai: 85, matkulNama: "Pemrograman Web" },
  { matkulId: "MK002", nilai: 90, matkulNama: "Struktur Data" },
  { matkulId: "MK003", nilai: 88, matkulNama: "Basis Data" },
];

// 3. spread array listMatkul ke dalam object mahasiswa
const profilMahasiswa = {
  ...mahasiswa,
  matkul_diambil: [...listMatkul],
};

// 4. tampilkan dengan literal, output biodata mahasiswa dan matkul yang di ambil
console.log(`=== Biodata Mahasiswa ===
Nama : ${profilMahasiswa.nama}
NIM  : ${profilMahasiswa.nim}

=== Mata Kuliah yang Diambil ===
1. ${profilMahasiswa.matkul_diambil[0].matkulNama} (${profilMahasiswa.matkul_diambil[0].matkulId}) - Nilai: ${profilMahasiswa.matkul_diambil[0].nilai}
2. ${profilMahasiswa.matkul_diambil[1].matkulNama} (${profilMahasiswa.matkul_diambil[1].matkulId}) - Nilai: ${profilMahasiswa.matkul_diambil[1].nilai}
3. ${profilMahasiswa.matkul_diambil[2].matkulNama} (${profilMahasiswa.matkul_diambil[2].matkulId}) - Nilai: ${profilMahasiswa.matkul_diambil[2].nilai}
`);
