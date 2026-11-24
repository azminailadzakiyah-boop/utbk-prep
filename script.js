
// ==========================================
// UTBK PREP - SCRIPT UTAMA
// ==========================================


// ==========================================
// 1. DATA DAN VARIABEL
// ==========================================

const namaSubtes = {
    PU: "Penalaran Umum",
    PPU: "Pengetahuan dan Pemahaman Umum",
    PBM: "Pemahaman Bacaan dan Menulis",
    PK: "Pengetahuan Kuantitatif",
    LBI: "Literasi Bahasa Indonesia",
    LBE: "Literasi Bahasa Inggris",
    PM: "Penalaran Matematika"
};

let subtesAktif = "";
let daftarSoal = [];
let nomorSoalSekarang = 0;
let jawabanPengguna = [];
let waktuTersisa = 120;
let timerInterval = null;
let latihanBerjalan = false;
let latihanSudahDisimpan = false;

const KUNCI_RIWAYAT = "utbkPrepRiwayat";


// ==========================================
// 2. FUNGSI PINDAH HALAMAN
// ==========================================

function tampilkanHalaman(nama) {

    const semuaHalaman = [
        "dashboard",
        "menu",
        "subtes",
        "riwayat",
        "panduan",
        "tentang",
        "latihan"
    ];

    semuaHalaman.forEach(function(halaman) {

        const elemen = document.getElementById(
            "halaman-" + halaman
        );

        if (elemen) {
            elemen.hidden = true;
        }

    });

    const halamanTujuan = document.getElementById(
        "halaman-" + nama
    );

    if (halamanTujuan) {
        halamanTujuan.hidden = false;
        window.scrollTo(0, 0);
    }

    if (nama === "riwayat") {
        tampilkanRiwayat();
    }
}


// ==========================================
// 3. MEMILIH SUBTES
// ==========================================

function pilihSubtes(kode) {

    // Memeriksa apakah bank soal tersedia
    if (typeof bankSoal === "undefined") {

        alert(
            "Bank soal belum berhasil dimuat. Periksa file questions.js."
        );

        return;
    }

    // Memeriksa ketersediaan subtes
    if (!Array.isArray(bankSoal[kode])) {

        alert(
            "Soal untuk subtes ini belum tersedia atau format bank soal bermasalah."
        );

        return;
    }

    if (bankSoal[kode].length === 0) {

        alert("Belum ada soal dalam subtes ini.");

        return;
    }

    subtesAktif = kode;
    daftarSoal = bankSoal[kode];

    mulaiUlangData();

    tampilkanHalaman("latihan");

    tampilkanSoal();
}


// ==========================================
// 4. MENYIAPKAN LATIHAN BARU
// ==========================================

function mulaiUlangData() {

    clearInterval(timerInterval);

    nomorSoalSekarang = 0;

    jawabanPengguna = daftarSoal.map(function() {
        return null;
    });

    latihanBerjalan = true;
    latihanSudahDisimpan = false;

    // Menampilkan kembali bagian soal
    const kartuSoal = document.querySelector(".question-card");
    const progressSoal = document.querySelector(".quiz-progress");
    const aksiSoal = document.querySelector(".quiz-actions");
    const timerBox = document.querySelector(".timer-box");

    if (kartuSoal) kartuSoal.hidden = false;
    if (progressSoal) progressSoal.hidden = false;
    if (aksiSoal) aksiSoal.hidden = false;
    if (timerBox) timerBox.hidden = false;

    document.getElementById("hasil-latihan").hidden = true;
    document.getElementById("pertanyaan").hidden = false;
    document.getElementById("pilihan-jawaban").hidden = false;
    document.getElementById("btn-selanjutnya").hidden = false;
}


// ==========================================
// 5. MENAMPILKAN SOAL
// ==========================================

function tampilkanSoal() {

    if (!latihanBerjalan) return;

    // Jika semua soal sudah selesai
    if (nomorSoalSekarang >= daftarSoal.length) {

        selesaikanLatihan();

        return;
    }

    const soal = daftarSoal[nomorSoalSekarang];

    // Judul subtes
    document.getElementById("judul-latihan").textContent =
        namaSubtes[subtesAktif] || subtesAktif;

    // Nomor soal
    document.getElementById("nomor-soal").textContent =
        "Soal " + (nomorSoalSekarang + 1);

    document.getElementById("jumlah-soal").textContent =
        "Dari " + daftarSoal.length + " soal";

    // Teks pertanyaan
    document.getElementById("pertanyaan").textContent =
        soal.pertanyaan || "Pertanyaan belum tersedia.";

    // Menampilkan bacaan jika tersedia
    const bacaan = document.getElementById("bacaan-soal");

    if (soal.teks && soal.teks.trim() !== "") {

        bacaan.textContent = soal.teks;
        bacaan.hidden = false;

    } else {

        bacaan.textContent = "";
        bacaan.hidden = true;

    }

    // Menampilkan pilihan jawaban
    const tempatPilihan = document.getElementById(
        "pilihan-jawaban"
    );

    tempatPilihan.innerHTML = "";

    const pilihan = soal.pilihan || {};

    Object.entries(pilihan).forEach(function([huruf, isi]) {

        const tombol = document.createElement("button");

        tombol.type = "button";
        tombol.className = "pilihan-jawaban";

        tombol.textContent = huruf + ". " + isi;

        tombol.addEventListener("click", function() {
            pilihJawaban(huruf);
        });

        if (jawabanPengguna[nomorSoalSekarang] === huruf) {
            tombol.classList.add("terpilih");
        }

        tempatPilihan.appendChild(tombol);

    });

    // Status tombol selanjutnya
    const tombolSelanjutnya = document.getElementById(
        "btn-selanjutnya"
    );

    tombolSelanjutnya.disabled =
        jawabanPengguna[nomorSoalSekarang] === null;

    tombolSelanjutnya.textContent =
        nomorSoalSekarang === daftarSoal.length - 1
        ? "Selesaikan Latihan"
        : "Soal Selanjutnya →";

    // Progress pengerjaan
    const persentase =
        ((nomorSoalSekarang + 1) / daftarSoal.length) * 100;

    document.getElementById("progress-bar").style.width =
        persentase + "%";

    // Memulai timer untuk soal ini
    mulaiTimer();
}


// ==========================================
// 6. MEMILIH JAWABAN
// ==========================================

function pilihJawaban(huruf) {

    if (!latihanBerjalan) return;

    jawabanPengguna[nomorSoalSekarang] = huruf;

    const semuaPilihan = document.querySelectorAll(
        "#pilihan-jawaban button"
    );

    semuaPilihan.forEach(function(tombol) {

        tombol.classList.remove("terpilih");

        if (tombol.textContent.startsWith(huruf + ".")) {
            tombol.classList.add("terpilih");
        }

    });

    document.getElementById("btn-selanjutnya").disabled = false;
}


// ==========================================
// 7. TIMER 2 MENIT
// ==========================================

function mulaiTimer() {

    clearInterval(timerInterval);

    waktuTersisa = 120;

    perbaruiTampilanTimer();

    timerInterval = setInterval(function() {

        waktuTersisa--;

        perbaruiTampilanTimer();

        if (waktuTersisa <= 0) {

            clearInterval(timerInterval);

            // Jika waktu habis, soal dianggap tidak dijawab
            nomorSoalSekarang++;

            tampilkanSoal();

        }

    }, 1000);
}


function perbaruiTampilanTimer() {

    const menit = Math.floor(waktuTersisa / 60);
    const detik = waktuTersisa % 60;

    document.getElementById("timer").textContent =
        String(menit).padStart(2, "0") +
        ":" +
        String(detik).padStart(2, "0");
}


// ==========================================
// 8. MENUJU SOAL BERIKUTNYA
// ==========================================

function soalSelanjutnya() {

    if (!latihanBerjalan) return;

    if (jawabanPengguna[nomorSoalSekarang] === null) {

        alert("Pilih jawaban terlebih dahulu, ya!");

        return;
    }

    clearInterval(timerInterval);

    nomorSoalSekarang++;

    if (nomorSoalSekarang < daftarSoal.length) {

        tampilkanSoal();

    } else {

        selesaikanLatihan();

    }
}


// ==========================================
// 9. MENYELESAIKAN LATIHAN
// ==========================================

function selesaikanLatihan() {

    if (latihanSudahDisimpan) return;

    clearInterval(timerInterval);

    latihanBerjalan = false;
    latihanSudahDisimpan = true;

    let jumlahBenar = 0;
    let jumlahSalah = 0;

    daftarSoal.forEach(function(soal, index) {

        if (jawabanPengguna[index] === soal.jawaban) {

            jumlahBenar++;

        } else {

            jumlahSalah++;

        }

    });

    const nilai = Math.round(
        (jumlahBenar / daftarSoal.length) * 100
    );

    // Menampilkan hasil nilai
    document.getElementById("nilai-akhir").textContent =
        nilai;

    document.getElementById("jumlah-benar").textContent =
        jumlahBenar;

    document.getElementById("jumlah-salah").textContent =
        jumlahSalah;

    // Menyembunyikan bagian soal
    const kartuSoal = document.querySelector(".question-card");
    const progressSoal = document.querySelector(".quiz-progress");
    const aksiSoal = document.querySelector(".quiz-actions");
    const timerBox = document.querySelector(".timer-box");

    if (kartuSoal) kartuSoal.hidden = true;
    if (progressSoal) progressSoal.hidden = true;
    if (aksiSoal) aksiSoal.hidden = true;
    if (timerBox) timerBox.hidden = true;

    // Menampilkan halaman hasil
    document.getElementById("hasil-latihan").hidden = false;

    // Menampilkan pembahasan
    tampilkanPembahasan();

    // Menyimpan riwayat latihan
    simpanRiwayat({
        subtes: subtesAktif,
        nama: namaSubtes[subtesAktif],
        nilai: nilai,
        benar: jumlahBenar,
        salah: jumlahSalah,
        tanggal: new Date().toLocaleString("id-ID")
    });

    window.scrollTo(0, 0);
}


// ==========================================
// 10. MENAMPILKAN PEMBAHASAN
// ==========================================

function tampilkanPembahasan() {

    const tempatPembahasan = document.getElementById(
        "daftar-pembahasan"
    );

    tempatPembahasan.innerHTML = "";

    daftarSoal.forEach(function(soal, index) {

        const jawaban = jawabanPengguna[index];

        const benar = jawaban === soal.jawaban;

        const kartu = document.createElement("div");

        kartu.className = "kartu-pembahasan";

        const judul = document.createElement("h3");

        judul.textContent = "Soal " + (index + 1);

        const status = document.createElement("p");

        status.textContent = benar
            ? "✓ Jawaban kamu benar"
            : "✕ Jawaban kamu belum tepat";

        const jawabanKamu = document.createElement("p");

        jawabanKamu.textContent =
            "Jawaban kamu: " + (jawaban || "Tidak dijawab");

        const jawabanBenar = document.createElement("p");

        jawabanBenar.textContent =
            "Jawaban benar: " + (soal.jawaban || "-");

        const pembahasan = document.createElement("p");

        pembahasan.textContent =
            soal.pembahasan || "Pembahasan belum tersedia.";

        kartu.appendChild(judul);
        kartu.appendChild(status);
        kartu.appendChild(jawabanKamu);
        kartu.appendChild(jawabanBenar);
        kartu.appendChild(pembahasan);

        tempatPembahasan.appendChild(kartu);

    });
}


// ==========================================
// 11. MENYIMPAN RIWAYAT LATIHAN
// ==========================================

function simpanRiwayat(data) {

    let riwayat = [];

    try {

        riwayat = JSON.parse(
            localStorage.getItem(KUNCI_RIWAYAT)
        ) || [];

    } catch (error) {

        riwayat = [];

    }

    riwayat.unshift(data);

    localStorage.setItem(
        KUNCI_RIWAYAT,
        JSON.stringify(riwayat)
    );

}


// ==========================================
// 12. MENAMPILKAN RIWAYAT LATIHAN
// ==========================================

function tampilkanRiwayat() {

    const tempatRiwayat = document.getElementById(
        "daftar-riwayat"
    );

    if (!tempatRiwayat) return;

    let riwayat = [];

    try {

        riwayat = JSON.parse(
            localStorage.getItem(KUNCI_RIWAYAT)
        ) || [];

    } catch (error) {

        riwayat = [];

    }

    tempatRiwayat.innerHTML = "";

    if (riwayat.length === 0) {

        const kartuKosong = document.createElement("div");

        kartuKosong.className = "guide-card";

        const ikon = document.createElement("span");
        ikon.textContent = "📚";

        const judul = document.createElement("h3");
        judul.textContent = "Belum Ada Riwayat";

        const keterangan = document.createElement("p");
        keterangan.textContent =
            "Kamu belum menyelesaikan latihan. Yuk, mulai latihan pertamamu!";

        kartuKosong.appendChild(ikon);
        kartuKosong.appendChild(judul);
        kartuKosong.appendChild(keterangan);

        tempatRiwayat.appendChild(kartuKosong);

        return;
    }

    riwayat.forEach(function(data) {

        const kartu = document.createElement("div");

        kartu.className = "guide-card";

        const ikon = document.createElement("span");
        ikon.textContent = "🏆";

        const judul = document.createElement("h3");
        judul.textContent = data.nama || data.subtes;

        const nilai = document.createElement("p");
        nilai.textContent = "Nilai: " + data.nilai;

        const benar = document.createElement("p");
        benar.textContent = "Jawaban benar: " + data.benar;

        const salah = document.createElement("p");
        salah.textContent = "Jawaban salah: " + data.salah;

        const tanggal = document.createElement("p");
        tanggal.textContent = "Tanggal: " + data.tanggal;

        kartu.appendChild(ikon);
        kartu.appendChild(judul);
        kartu.appendChild(nilai);
        kartu.appendChild(benar);
        kartu.appendChild(salah);
        kartu.appendChild(tanggal);

        tempatRiwayat.appendChild(kartu);

    });
}


// ==========================================
// 13. KELUAR DARI LATIHAN
// ==========================================

function konfirmasiKeluar() {

    const yakin = confirm(
        "Apakah kamu yakin ingin keluar dari latihan? Progres jawabanmu akan hilang."
    );

    if (!yakin) return;

    clearInterval(timerInterval);

    latihanBerjalan = false;

    tampilkanHalaman("subtes");
}


// ==========================================
// 14. MENGULANG LATIHAN
// ==========================================

function ulangLatihan() {

    if (!subtesAktif || daftarSoal.length === 0) {

        tampilkanHalaman("subtes");

        return;
    }

    mulaiUlangData();

    tampilkanHalaman("latihan");

    tampilkanSoal();
}


// ==========================================
// 15. SAAT WEBSITE DIBUKA
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    tampilkanHalaman("dashboard");

});
