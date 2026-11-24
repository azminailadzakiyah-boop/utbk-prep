
// BANK SOAL UTBK

const bankSoal = {

    // 1. PENALARAN UMUM
    PU: [

  {
    id: 1,
    kode: "SNMPTN 2012/TPA/213/24",
    teksId: null,
    teks: null,
    pertanyaan: `Jika taman X dipelihara dengan baik maka taman tersebut bersih dan indah.
Taman yang menarik untuk dikunjungi adalah taman yang bersih dan indah.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Jika taman X tidak menarik pengunjung, maka ia terpelihara.",
      B: "Taman X terpelihara sehingga menarik untuk dikunjungi.",
      C: "Taman X bersih dan indah tetapi tidak menarik untuk dikunjungi.",
      D: "Taman X terpelihara sehingga tidak menarik untuk dikunjungi.",
      E: "Jika taman X tidak menarik untuk dikunjungi, tidak perlu dibuat bersih dan indah."
    },
    jawaban: "B",
    pembahasan: "Jika taman X dipelihara dengan baik, taman tersebut bersih dan indah. Taman yang bersih dan indah menarik untuk dikunjungi. Jadi, taman X terpelihara sehingga menarik untuk dikunjungi."
  },
  {
    id: 2,
    kode: "SNMPTN 2012/TPA/213/25",
    teksId: null,
    teks: null,
    pertanyaan: `Setelah pulang sekolah, siswa hanya boleh mengikuti satu kegiatan ekstrakurikuler, yakni musik atau karate.
Bambang mengikuti karate sepulang sekolah.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Bambang mengikuti karate sambil mengikuti kegiatan musik.",
      B: "Bambang tidak mengikuti kegiatan ekstrakurikuler.",
      C: "Bambang mengikuti kegiatan musik.",
      D: "Bambang tidak mengikuti kegiatan musik.",
      E: "Bambang mengikuti karate setelah kegiatan musik."
    },
    jawaban: "D",
    pembahasan: "Siswa hanya boleh mengikuti satu kegiatan, yaitu musik atau karate. Karena Bambang mengikuti karate, maka Bambang tidak mengikuti kegiatan musik."
  },
  {
    id: 3,
    kode: "SNMPTN 2012/TPA/213/26",
    teksId: null,
    teks: null,
    pertanyaan: `Ketika hujan semua kegiatan olahraga diadakan di gedung serbaguna sekolah.
Emi berlatih pencak silat di gedung serbaguna sekolah.

Kesimpulan menurut kunci jawaban pada dokumen adalah ...`,
    pilihan: {
      A: "Emi berlatih pencak silat ketika gedung serbaguna sekolah tidak dipakai.",
      B: "Gedung serbaguna sekolah hanya digunakan untuk kegiatan olahraga pencak silat.",
      C: "Ketika hujan, Emi berlatih pencak silat.",
      D: "Ketika tidak hujan, Emi berlatih pencak silat.",
      E: "Ketika tidak hujan, gedung serbaguna digunakan oleh Emi."
    },
    jawaban: "C",
    pembahasan: "Kunci pada dokumen menyatakan jawaban C. Namun, secara logika formal, premis bahwa semua olahraga saat hujan dilakukan di gedung serbaguna dan Emi berlatih di gedung tersebut belum cukup untuk memastikan bahwa Emi berlatih ketika hujan. Soal ini perlu ditinjau kembali."
  },
  {
    id: 4,
    kode: "SNMPTN 2012/TPA/213/27",
    teksId: null,
    teks: null,
    pertanyaan: `Setiap kenaikan harga bahan bakar minyak (BBM) pasti diikuti oleh kenaikan tarif angkutan umum.
Setiap kenaikan tarif angkutan umum selalu diikuti kenaikan harga kebutuhan pokok.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Setiap terjadi kenaikan harga BBM pasti diikuti kenaikan harga kebutuhan pokok.",
      B: "Setiap kenaikan kebutuhan pokok selalu diikuti kenaikan tarif angkutan umum.",
      C: "Setiap terjadi kenaikan harga BBM belum tentu diikuti kenaikan harga kebutuhan pokok.",
      D: "Kenaikan tarif angkutan umum selalu disebabkan kenaikan harga BBM.",
      E: "Harga kebutuhan pokok hanya naik jika ada kenaikan tarif angkutan umum."
    },
    jawaban: "A",
    pembahasan: "Jika kenaikan harga BBM menyebabkan kenaikan tarif angkutan umum, dan kenaikan tarif angkutan umum diikuti kenaikan harga kebutuhan pokok, maka kenaikan harga BBM juga diikuti kenaikan harga kebutuhan pokok."
  },
  {
    id: 5,
    kode: "SNMPTN 2012/TPA/213/20",
    teksId: null,
    teks: null,
    pertanyaan: `Jika harga bahan baku naik, maka biaya produksi barang meningkat.
Kenaikan biaya produksi barang menimbulkan penurunan laba pabrik.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Penurunan laba pabrik menimbulkan kenaikan biaya produksi barang.",
      B: "Penurunan biaya produksi menimbulkan kenaikan harga bahan baku.",
      C: "Kenaikan harga bahan baku menimbulkan penurunan laba.",
      D: "Kenaikan harga bahan baku tidak menimbulkan penurunan laba.",
      E: "Jika tidak ada kenaikan harga bahan baku, maka terjadi penurunan laba."
    },
    jawaban: "C",
    pembahasan: "Jika harga bahan baku naik, biaya produksi meningkat. Peningkatan biaya produksi menyebabkan penurunan laba pabrik. Jadi, kenaikan harga bahan baku menimbulkan penurunan laba."
  },
  {
    id: 6,
    kode: "SNMPTN 2012/TPA/213/21",
    teksId: null,
    teks: null,
    pertanyaan: `Siswa yang datang terlambat ke sekolah dikenai hukuman.
Siswa yang dikenai hukuman memperbaiki kesalahan yang pernah dilakukannya.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Siswa yang terlambat datang ke sekolah tidak memperbaiki kesalahannya.",
      B: "Siswa yang terlambat datang ke sekolah tetap akan datang terlambat.",
      C: "Siswa yang terlambat datang ke sekolah kadang dikenai hukuman.",
      D: "Siswa yang tidak terlambat datang ke sekolah tidak perlu dihukum.",
      E: "Siswa yang terlambat datang ke sekolah memperbaiki kesalahannya."
    },
    jawaban: "E",
    pembahasan: "Siswa yang terlambat dikenai hukuman. Siswa yang dihukum memperbaiki kesalahan. Jadi, siswa yang terlambat datang ke sekolah memperbaiki kesalahannya."
  },
  {
    id: 7,
    kode: "SNMPTN 2012/TPA/213/22",
    teksId: null,
    teks: null,
    pertanyaan: `Siswa yang pandai dalam pelajaran kimia juga pandai dalam pelajaran matematika.
Siswa yang pandai dalam pelajaran matematika rajin belajar.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Siswa yang tidak pandai dalam pelajaran kimia rajin belajar.",
      B: "Siswa yang pandai dalam pelajaran kimia rajin belajar.",
      C: "Siswa yang pandai dalam pelajaran kimia tidak rajin belajar.",
      D: "Siswa yang tidak pandai dalam pelajaran kimia dan matematika rajin belajar.",
      E: "Siswa yang tidak pandai dalam pelajaran matematika rajin belajar."
    },
    jawaban: "B",
    pembahasan: "Siswa yang pandai kimia juga pandai matematika. Siswa yang pandai matematika rajin belajar. Jadi, siswa yang pandai kimia juga rajin belajar."
  },
  {
    id: 8,
    kode: "SBMPTN 2013/TPA/413/19",
    teksId: null,
    teks: null,
    pertanyaan: `Jika lampu menyala, maka ibu datang.
Jika ibu datang, maka Tina pergi.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Jika lampu menyala, maka Tina pergi.",
      B: "Jika lampu tidak menyala, maka Tina pergi.",
      C: "Jika lampu menyala, maka Tina tidak pergi.",
      D: "Jika bukan lampu yang menyala, maka Tina pergi.",
      E: "Jika lampu menyala, maka bukan Tina yang pergi."
    },
    jawaban: "A",
    pembahasan: "Gunakan penalaran silogisme. Jika lampu menyala, ibu datang. Jika ibu datang, Tina pergi. Jadi, jika lampu menyala, Tina pergi."
  },
  {
    id: 9,
    kode: "SBMPTN 2013/TPA/413/17",
    teksId: null,
    teks: null,
    pertanyaan: `Jika sedang demam harus berobat.
Jika berobat harus berdoa.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Jika sedang demam harus berdoa.",
      B: "Jika tidak sedang demam, berdoa.",
      C: "Jika tidak sedang berobat, berdoa.",
      D: "Jika tidak sedang demam, berobat.",
      E: "Jika sedang berdoa, maka sedang demam."
    },
    jawaban: "A",
    pembahasan: "Jika sedang demam harus berobat, dan jika berobat harus berdoa. Jadi, jika sedang demam harus berdoa."
  },
  {
    id: 10,
    kode: "SBMPTN 2013/TPA/413/27",
    teksId: null,
    teks: null,
    pertanyaan: `Jika bepergian ke Timbuktu, maka harus datang ke Patena.
Jika datang ke Patena, maka harus melalui jembatan Torosi.

Kesimpulan yang tepat adalah ...`,
    pilihan: {
      A: "Sebagian yang datang ke Patena melalui jembatan Torosi.",
      B: "Sebagian yang pergi ke Timbuktu melalui jembatan Torosi.",
      C: "Semua yang melalui jembatan Torosi tentu bepergian ke Timbuktu.",
      D: "Semua yang bepergian ke Timbuktu harus melalui jembatan Torosi.",
      E: "Semua yang tidak bepergian ke Timbuktu tidak melalui jembatan Torosi."
    },
    jawaban: "D",
    pembahasan: "Jika bepergian ke Timbuktu harus datang ke Patena, dan jika datang ke Patena harus melalui jembatan Torosi. Jadi, semua yang bepergian ke Timbuktu harus melalui jembatan Torosi."
  }
  ],

    // 2. PENGETAHUAN DAN PEMAHAMAN UMUM
    PPU: [

  {
    id: 1,
    kode: "SBMPTN 2019/UTBK I/PPU/41",
    teksId: "PPU_TEKS1",
    teks: `Pendidikan inklusi merupakan pendidikan yang tidak diskriminatif. Dalam konteks pendidikan inklusi, anak mempunyai hak yang sama untuk mendapatkan pendidikan, termasuk anak berkebutuhan khusus (ABK). Untuk mewujudkan pendidikan inklusi tersebut, pemerintah menetapkan sejumlah sekolah umum yang wajib menyelenggarakan pendidikan inklusi.

Sekolah penyelenggara pendidikan inklusi adalah sekolah-sekolah umum yang menerima dan memberikan layanan khusus kepada ABK tanpa diskriminasi. Di sekolah ini, ABK diberi kesempatan yang sama untuk mengembangkan potensi mereka dan mendapatkan kesempatan untuk belajar dan bersosialisasi.

Semua anak memiliki hak sama dalam mendapatkan pendidikan, tidak terkecuali ABK. Semua pihak bertanggung jawab untuk memastikan bahwa hak anak tersebut dapat dipenuhi sebagaimana mestinya. Pihak sekolah, baik kepala sekolah, guru, maupun tenaga kependidikan, berperan penting dalam mewujudkan terpenuhinya hak pendidikan bagi semua anak tanpa ada pengecualian.

Melalui pendidikan inklusi tersebut, kita dapat menyukseskan pendidikan untuk semua atau dikenal dengan EFA (Education For All), yaitu pendidikan yang merata untuk semua lapisan masyarakat tanpa membedakan suku, agama, ras, dan antargolongan (SARA). Pendidikan adalah hak setiap warga negara. Dengan demikian, pendidikan menjadi hak dasar yang harus dimiliki semua anak tanpa kecuali.

Sementara itu, persepsi atau pandangan masyarakat terhadap ABK perlu diluruskan. Masyarakat perlu diberikan pemahaman bahwa ABK dapat diterima di sekolah umum.`,
    pertanyaan: "Kata 'khusus' pada paragraf 2 memiliki makna yang sama dengan kata ...",
    pilihan: {
      A: "tertentu",
      B: "istimewa",
      C: "terpisah",
      D: "terencana",
      E: "terorganisasi"
    },
    jawaban: "B",
    pembahasan: "Kata khusus memiliki makna khas, istimewa, atau tidak umum. Oleh karena itu, kata yang memiliki makna paling dekat adalah istimewa."
  },
  {
    id: 2,
    kode: "SBMPTN 2019/UTBK I/PPU/42",
    teksId: "PPU_TEKS1",
    teks: null,
    pertanyaan: "Kata yang paling tepat untuk melengkapi bagian rumpang pada paragraf 3 adalah ...",
    pilihan: {
      A: "pembatasan",
      B: "pengecualian",
      C: "pemaksaan",
      D: "pengurangan",
      E: "penambahan"
    },
    jawaban: "B",
    pembahasan: "Kata pengecualian paling tepat digunakan dalam kalimat tersebut karena konteksnya menegaskan bahwa semua anak memiliki hak pendidikan yang sama tanpa ada pihak yang dikecualikan."
  },
  {
    id: 3,
    kode: "SBMPTN 2019/UTBK I/PPU/43",
    teksId: "PPU_TEKS1",
    teks: null,
    pertanyaan: "Lawan kata 'diterima' pada paragraf 5 adalah ...",
    pilihan: {
      A: "dibedakan",
      B: "diabaikan",
      C: "dikucilkan",
      D: "dipisahkan",
      E: "diserahkan"
    },
    jawaban: "B",
    pembahasan: "Kata diterima memiliki makna disambut atau dianggap. Lawan kata yang paling tepat adalah diabaikan, yaitu tidak disambut atau tidak dianggap."
  },
  {
    id: 4,
    kode: "SBMPTN 2019/UTBK I/PPU/44",
    teksId: "PPU_TEKS1",
    teks: null,
    pertanyaan: "Topik yang dibahas pada bacaan di atas adalah ...",
    pilihan: {
      A: "Persepsi masyarakat terhadap anak-anak berkebutuhan khusus",
      B: "Hak pendidikan bagi anak-anak berkebutuhan khusus",
      C: "Pendidikan bagi anak-anak berkebutuhan khusus",
      D: "Pendidikan inklusi untuk mencegah isu SARA",
      E: "Menangkal isu SARA melalui pendidikan"
    },
    jawaban: "B",
    pembahasan: "Bacaan membahas hak semua anak untuk memperoleh pendidikan, termasuk anak berkebutuhan khusus (ABK). Gagasan tersebut menjadi inti pembahasan dari keseluruhan teks."
  },
  {
    id: 5,
    kode: "SBMPTN 2019/UTBK I/PPU/53",
    teksId: "PPU_TEKS2",
    teks: `Hadirnya bahasa Indonesia sebagai identitas diri negeri ini hendaknya menjadi sesuatu yang harus diamati dan dikembangkan lebih dalam. Tidak dapat dipungkiri bahwa bahasa Indonesia terkadang dinomorduakan, bahkan ada yang mengatakan bahwa bahasa asing lebih mengandung unsur kekinian daripada bahasa Indonesia. Mungkin inilah yang menyebabkan budaya literasi di Indonesia masih berada pada angka yang rendah. Data UNESCO 2012 menyebutkan bahwa indeks minat baca di Indonesia baru mencapai 0,001. Rendahnya indeks tersebut mengimplikasikan butuh banyak waktu dan tenaga untuk menumbuhkan kesadaran mengenai pentingnya membaca dan menulis. Terlebih lagi sasarannya adalah orang-orang zaman sekarang yang lebih mengutamakan gawai. Mereka memilih informasi yang serba cepat saji daripada yang lengkap matang, dan membaca berita-berita singkat tanpa melibatkan sumber yang dapat dipercaya serta membaca cerita yang dangkal dan tidak merangsang daya nalar dan imajinasi.

Meskipun demikian, ternyata masih banyak putra-putri bangsa yang berupaya untuk mempertahankan dan menegaskan eksistensi bahasa Indonesia. Ada beberapa elemen masyarakat yang senantiasa berupaya mengembangkan serta menjaga eksistensinya. Mereka sadar bahwa bahasa dan sastra merupakan cerminan kekhasan bangsa sekaligus unjuk pemikiran manusia. Jika bahasa dan sastra Indonesia masih terus ada bahkan mampu mendunia, itu artinya bangsa Indonesia memiliki pemahaman yang cerdas mengenai budaya negerinya.

Banyak cara yang dapat dilakukan untuk meningkatkan dan membudayakan literasi. Literasi hendaknya menjadi tradisi yang terus-menerus mengikat guna menciptakan ketertarikan yang memang mampu disenangi dan diminati semua orang. Lebih lagi, harus diakui bahwa tidak semua orang punya minat dan bakat yang sama terhadap dunia literasi. Ada yang hanya suka menulis, suka membaca, atau bahkan tidak keduanya. Cara yang paling efisien adalah menumbuhkan kesadaran, paling tidak, agar individu maupun kelompok yang ada memahami betapa pentingnya literasi dalam kehidupan sehari-hari.`,
    pertanyaan: "Apa yang dirasakan penulis pada bacaan di atas?",
    pilihan: {
      A: "Keprihatinan atas rendahnya kesadaran pembaca terhadap ancaman pudarnya eksistensi bangsa Indonesia.",
      B: "Kekhawatiran terhadap perilaku orang zaman sekarang yang tidak menerapkan literasi secara optimal.",
      C: "Keyakinan keberhasilan usulannya tentang bagaimana cara mengatasi minimnya literasi.",
      D: "Kegalauan untuk dapat melihat bangsa Indonesia memiliki bahasa yang diakui dunia.",
      E: "Kegelisahan melihat rendahnya kebiasaan membaca di Indonesia."
    },
    jawaban: "C",
    pembahasan: "Penulis menunjukkan keyakinan bahwa masalah rendahnya literasi dapat diatasi melalui upaya membangun kesadaran masyarakat mengenai pentingnya membaca dan menulis."
  },
  {
    id: 6,
    kode: "SBMPTN 2019/UTBK I/PPU/54",
    teksId: "PPU_TEKS2",
    teks: null,
    pertanyaan: "Kata 'Mereka' pada paragraf 2 mengacu pada ...",
    pilihan: {
      A: "putra-putri bangsa",
      B: "manusia",
      C: "bangsa",
      D: "bangsa Indonesia",
      E: "orang-orang zaman sekarang"
    },
    jawaban: "A",
    pembahasan: "Kata 'Mereka' merujuk pada putra-putri bangsa yang berupaya mempertahankan dan menegaskan eksistensi bahasa Indonesia."
  },
  {
    id: 7,
    kode: "SBMPTN 2019/UTBK I/PPU/55",
    teksId: "PPU_TEKS2",
    teks: null,
    pertanyaan: "Apa fungsi paragraf 2 pada bacaan di atas?",
    pilihan: {
      A: "Memaparkan kesiapan bangsa Indonesia untuk mengatasi masalah rendahnya tingkat literasi",
      B: "Menjelaskan pentingnya upaya yang konkret dalam mengatasi masalah literasi",
      C: "Mengekspresikan rasa optimis penulis dalam mengatasi masalah literasi",
      D: "Mengajak pembaca untuk terlibat dalam kegiatan pengembangan literasi",
      E: "Menguraikan beberapa langkah tepat untuk mengatasi masalah literasi"
    },
    jawaban: "C",
    pembahasan: "Paragraf 2 diawali dengan kata 'Meskipun demikian' yang menunjukkan adanya harapan di tengah permasalahan literasi. Paragraf tersebut menggambarkan optimisme penulis terhadap upaya mempertahankan bahasa dan sastra Indonesia."
  },
  {
    id: 8,
    kode: "SBMPTN 2019/UTBK I/PPU/56",
    teksId: "PPU_TEKS2",
    teks: null,
    pertanyaan: "Terkait dengan ilustrasi yang dipaparkan pada paragraf 2, paragraf 3 berfungsi mengakomodasi keinginan penulis untuk ...",
    pilihan: {
      A: "Menguraikan maksud secara lebih spesifik",
      B: "Menyimpulkan penyebab masalah yang telah diuraikan",
      C: "Menawarkan solusi praktis berdasarkan kesiapan yang dimiliki",
      D: "Memerinci pandangan penulis terhadap fenomena yang diungkap",
      E: "Melanjutkan pembahasan dengan fokus pada gagasan yang diprioritaskan"
    },
    jawaban: "C",
    pembahasan: "Paragraf 3 menjelaskan cara meningkatkan budaya literasi, terutama dengan menumbuhkan kesadaran masyarakat tentang pentingnya literasi dalam kehidupan sehari-hari. Jadi, paragraf tersebut menawarkan solusi praktis."
  },
  {
    id: 9,
    kode: "SBMPTN 2019/UTBK I/PPU/57",
    teksId: "PPU_TEKS3",
    teks: `Amaranila, dokter kulit dan kecantikan, berkeinginan untuk mengajak masyarakat luas peduli dengan lingkungan, terutama limbah sedotan plastik. Ia merancang sendiri sedotan pakai ulang dari bahan kaca yang menjadi sedotan kaca pertama buatan Indonesia yang memiliki standar alat laboratorium kedokteran. "Saya meminta rekan saya yang biasa memproduksi alat-alat kedokteran dan laboratorium untuk membuat sedotan dari bahan kaca. Awalnya mereka tertawa, buat apa sih bu alat begini, saya sendiri yang ajari, mulai dari ukuran sampai tingkat ketebalan," ungkapnya.

Amaranila memilih membuat sedotan pakai ulang dari bahan kaca karena dinilainya lebih higienis dan tahan lama. Sedotan itu akan dipasarkan sepasang dengan sikat bulu sebagai alat pembersih sedotan. Sikat yang digunakan untuk membersihkan sedotannya terbuat dari bahan alami berupa bulu sapi atau bulu kuda. "Karena terbuat dari kaca, jadi bisa terlihat apakah bersih atau kotor bagian dalamnya, dan saya juga merancang sikat pembersihnya agar benar-benar pas sehingga bisa membersihkan secara sempurna," tambahnya lagi.

Sementara itu, komunitas peduli lingkungan di Gianyar, Bali, menjadi salah satu komunitas yang memproduksi sedotan pakai ulang dari bambu. Dengan nama Griya Luhu, mereka memilih menggunakan bambu buluh yang berdiameter kecil sebagai bahan utama sedotan mereka. Mandhara Brasika, pendiri Griya Luhu, mengatakan awalnya sedotan bambu yang mereka buat hanya ditujukan sebagai barang suvenir.

Bahan baku yang melimpah dan proses pembuatan yang sederhana membuat harga sedotan dari bambu buluh lebih terjangkau oleh pemilik hotel dan rumah makan lokal dibandingkan sedotan pakai ulang dari baja tahan karat atau kaca. Mandhara mengatakan jika sedotan bambu buluh dirawat dengan baik, sedotan tersebut bisa bertahan sekitar tiga hingga maksimal enam bulan.

Sejak setahun terakhir sedotan tersebut banyak diminati pengelola hotel dan restoran di Pulau Dewata dan sejumlah kota lainnya. Karena Bali daerah wisata dan banyak tamu yang datang dari luar negeri, mereka sudah memahami bahaya limbah sedotan plastik dan sering menolak atau meminta sedotan pakai ulang. Jadi, ketika tahu ada sedotan bambu, pemilik dan pengelola hotel banyak memesannya, baik untuk digunakan di tempat mereka maupun untuk suvenir, kata Mandhara.`,
    pertanyaan: "Topik yang mungkin dibahas pada paragraf berikutnya adalah ...",
    pilihan: {
      A: "Antusiasme para pengelola hotel dan restoran terhadap pemakaian sedotan dari buluh bambu",
      B: "Proses pembuatan sedotan dari buluh bambu untuk menggantikan sedotan plastik sekali pakai",
      C: "Kelebihan pemakaian sedotan dari buluh bambu dibandingkan dengan sedotan dari kaca",
      D: "Kegiatan komunitas yang memproduksi sedotan pengganti sedotan plastik sekali pakai",
      E: "Pemasaran sedotan pakai ulang di kalangan industri pariwisata dan perhotelan di Bali"
    },
    jawaban: "E",
    pembahasan: "Paragraf terakhir membahas tingginya minat hotel dan restoran terhadap sedotan bambu. Pembahasan selanjutnya kemungkinan mengarah pada pemasaran sedotan pakai ulang di kalangan industri pariwisata dan perhotelan di Bali."
  },
  {
    id: 10,
    kode: "SBMPTN 2019/UTBK I/PPU/58",
    teksId: "PPU_TEKS3",
    teks: null,
    pertanyaan: "Berdasarkan bacaan di atas, dampak yang sangat mungkin muncul terhadap penggunaan sikat yang terbuat dari bahan alami bulu binatang untuk membersihkan botol tempat minuman bayi adalah ...",
    pilihan: {
      A: "Pemikiran kreatif untuk kemungkinan dipasarkan sebagai suvenir",
      B: "Meningkatnya harga jual karena ongkos pembuatan tinggi",
      C: "Perlawanan oleh orang yang menderita alergi",
      D: "Protes keras dari para pencinta binatang",
      E: "Perlunya penanganan yang lebih higienis"
    },
    jawaban: "D",
    pembahasan: "Penggunaan bulu binatang dalam produk dapat memunculkan kekhawatiran terhadap eksploitasi atau perburuan hewan. Hal tersebut berpotensi menimbulkan protes dari para pencinta binatang."
  }

    ],


    // 3. PEMAHAMAN BACAAN DAN MENULIS
    PBM: [
  {
    id: 1,
    kode: "SBMPTN 2019/UTBK I/PBM/21",
    teksId: "PBM_TEKS1",
    teks: `Tren teknologi masa kini yang paling banyak digunakan ialah Internet of Things (IoT). IoT merupakan sistem internet yang menghubungkan objek fisik dengan manusia. Salah satu perusahaan yang menyediakan produk bersistem IoT ialah DycodeX. Mereka punya produk teknologi berbasis IoT bernama SmarTernak yang menjadikan sapi sebagai objeknya. Sapi tidak dapat memberi tahu secara langsung kepada peternak mengenai kondisinya sehingga harus selalu dicek setiap waktu. Hal itu sangat tidak efisien karena sebuah peternakan memiliki banyak sapi. "Sapi tersebut sedang sakit atau tidak atau mungkin saja sedang berahi, kita tidak tahu pasti," ujar Andri Yadi, Co-Founder dan CEO DycodeX. Masalah seperti itu bisa teratasi jika setiap sapi dikalungi sebuah alat.

Alat berbentuk kotak kecil yang dikalungkan pada sapi sudah berisi sistem IoT. Peternakan yang sudah menjalankan program SmarTernak ini dapat mendeteksi jika sapi bermasalah. Bukan hanya mengecek sakit atau tidak, peternak juga dapat memantau produktivitas sapi dari gerakannya. Jika sapi sehat namun diam saja, maka sapi sedang tidak produktif. Dapat diketahui juga seberapa sering sapi mengunyah makanannya.

"Sapi yang dibebaskan dari kandang juga bisa kita ketahui keberadaan mereka. Kita pasang pagar virtual sehingga begitu sapi melewati satu koordinat tertentu, walau pagar tidak berbentuk dan tidak kelihatan, alat ini akan berbunyi dan sapi sudah tahu bahwa dia harus balik lagi. Jadi memang seperti menggiring sapi juga, sebab ada GPS terpasang," papar Andri.`,
    pertanyaan: "Apa judul yang paling tepat untuk tulisan di atas?",
    pilihan: {
      A: "Sistem Internet of Things (IoT)",
      B: "Kecanggihan Teknologi IoT Masa Kini",
      C: "Pendeteksi Kondisi SmarTernak Sapi",
      D: "SmarTernak Pendeteksi Kondisi Sapi",
      E: "Produk SmarTernak Buatan DycodeX"
    },
    jawaban: "A",
    pembahasan: "Judul harus mewakili isi bacaan secara keseluruhan. Bacaan menjelaskan teknologi Internet of Things (IoT), mulai dari pengertian hingga penerapannya pada peternakan sapi melalui SmarTernak. Oleh karena itu, judul yang paling tepat adalah Sistem Internet of Things (IoT)."
  },
  {
    id: 2,
    kode: "SBMPTN 2019/UTBK I/PBM/22",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Anda akan menambahkan kalimat berikut pada paragraf 1.\n\n'Teknologi IoT memudahkan pemantauan berbagai hal tanpa kehadiran pemantau.'\n\nLetak yang tepat untuk kalimat tersebut adalah ...",
    pilihan: {
      A: "Setelah kalimat 1",
      B: "Setelah kalimat 2",
      C: "Setelah kalimat 3",
      D: "Setelah kalimat 4",
      E: "Setelah kalimat 5"
    },
    jawaban: "B",
    pembahasan: "Kalimat tambahan tersebut menjelaskan manfaat umum teknologi IoT. Letak paling tepat adalah setelah kalimat 2 yang menjelaskan pengertian IoT, sebelum bacaan beralih membahas perusahaan DycodeX."
  },
  {
    id: 3,
    kode: "SBMPTN 2019/UTBK I/PBM/23",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Kata sambung yang tepat untuk melengkapi bagian rumpang pada kalimat 6 adalah ...",
    pilihan: {
      A: "Seandainya",
      B: "Mengingat",
      C: "Jika",
      D: "Untuk",
      E: "Karena"
    },
    jawaban: "E",
    pembahasan: "Kalimat tersebut menunjukkan hubungan sebab-akibat. Pemantauan sapi menjadi tidak efisien karena peternakan memiliki banyak sapi. Oleh karena itu, kata sambung yang tepat adalah karena."
  },
  {
    id: 4,
    kode: "SBMPTN 2019/UTBK I/PBM/24",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Agar menjadi logis, kalimat 11 harus diperbaiki dengan cara ...",
    pilihan: {
      A: "Menambahkan kata berarti sesudah kata maka",
      B: "Menambahkan kata sapi sesudah kata jika",
      C: "Menghilangkan kata maka",
      D: "Mengganti kata namun dengan kata tetapi",
      E: "Menghilangkan kata sedang"
    },
    jawaban: "C",
    pembahasan: "Kalimat 'Jika sehat namun diam saja, maka sapi sedang tidak produktif' kurang efektif karena penggunaan konjungsi jika dan maka secara bersamaan membuat susunan kalimat kurang tepat. Kata maka perlu dihilangkan agar kalimat menjadi lebih logis."
  },
  {
    id: 5,
    kode: "SBMPTN 2019/UTBK I/PBM/25",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Kata yang paling tepat untuk melengkapi bagian rumpang pada kalimat 3 adalah ...",
    pilihan: {
      A: "Melakukan",
      B: "Mengelola",
      C: "Mengerjakan",
      D: "Menggarap",
      E: "Menyediakan"
    },
    jawaban: "E",
    pembahasan: "Kalimat yang tepat adalah 'Salah satu perusahaan yang menyediakan produk bersistem IoT ialah DycodeX.' Kata menyediakan sesuai dengan konteks perusahaan yang menawarkan produk teknologi."
  },
  {
    id: 6,
    kode: "SBMPTN 2019/UTBK I/PBM/26",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Kalimat manakah yang paling tepat dituliskan sebagai simpulan pada akhir tulisan?",
    pilihan: {
      A: "Dengan demikian, para peternak sapi dapat mengetahui keberadaan ternaknya di kandang.",
      B: "Dapat disimpulkan bahwa teknologi SmarTernak dapat mendeteksi kondisi sapi.",
      C: "Berdasarkan uraian tersebut, Internet of Things dapat digunakan pada objek-objek tertentu.",
      D: "Berdasarkan uraian di atas, peternakan sapi berskala besar sebaiknya menggunakan teknologi SmarTernak.",
      E: "Jadi, sapi yang dilepas dari kandang dapat diketahui keberadaannya dengan alat SmarTernak."
    },
    jawaban: "E",
    pembahasan: "Bagian akhir bacaan menjelaskan bahwa keberadaan sapi yang dilepas dari kandang tetap dapat diketahui melalui pagar virtual dan GPS pada alat SmarTernak. Oleh karena itu, pilihan E paling tepat sebagai simpulan."
  },
  {
    id: 7,
    kode: "SBMPTN 2019/UTBK I/PBM/27",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Kalimat manakah yang paling tepat untuk melengkapi paragraf 2?",
    pilihan: {
      A: "Alat bersistem IoT dapat digunakan pada peternakan sapi rakyat.",
      B: "Banyak manfaat yang didatangkan dari penggunaan alat bersistem IoT tersebut.",
      C: "Peternakan yang besar memiliki alat pendeteksi kondisi sapi.",
      D: "Produktivitas sapi penting bagi peternak dalam menghasilkan keuntungan.",
      E: "Pendeteksian sapi bermasalah dapat dilakukan dengan SmarTernak."
    },
    jawaban: "B",
    pembahasan: "Paragraf kedua menjelaskan berbagai manfaat alat SmarTernak, seperti mendeteksi kondisi sapi, memantau produktivitas, dan mengetahui kebiasaan makan sapi. Jadi, kalimat yang paling tepat adalah pilihan B."
  },
  {
    id: 8,
    kode: "SBMPTN 2019/UTBK I/PBM/28",
    teksId: "PBM_TEKS1",
    teks: null,
    pertanyaan: "Ilustrasi yang paling tepat untuk melengkapi penjelasan dalam tulisan adalah ...",
    pilihan: {
      A: "Bagan cara mendeteksi sapi dengan teknologi IoT",
      B: "Skema pembuatan alat SmarTernak",
      C: "Gambar alat pendeteksi sapi bersistem IoT",
      D: "Foto peternakan sapi yang memanfaatkan IoT",
      E: "Tabel keefektifan penggunaan alat bersistem IoT"
    },
    jawaban: "C",
    pembahasan: "Bacaan menjelaskan alat berbentuk kotak kecil yang dikalungkan pada sapi dan menggunakan sistem IoT. Karena itu, ilustrasi yang paling sesuai adalah gambar alat pendeteksi sapi bersistem IoT."
  },
  {
    id: 9,
    kode: "SBMPTN 2019/UTBK I/PBM/29",
    teksId: "PBM_TEKS2",
    teks: `Untuk pertama kalinya, para peneliti di Universitas Pennsylvania mengaitkan penggunaan media sosial dengan peningkatan depresi dan kesepian. Hal tersebut telah menjadi pembahasan para peneliti selama bertahun-tahun, tetapi belum banyak kajian yang berhasil menemukan kaitan keduanya. Universitas Pennsylvania melakukan hal yang berbeda, yaitu memusatkan studi tersebut pada tiga media sosial: Facebook, Snapchat, dan Instagram.

Partisipan dibagi ke dalam dua kelompok. Kelompok pertama melakukan kebiasaan menggunakan media sosial, sedangkan kelompok kedua mengakses media sosial hanya 10 menit setiap hari. Aktivitas media sosial mereka dipantau selama tiga minggu. Setelah itu, para peserta akan ditanya kembali mengenai beberapa hal, seperti soal kekhawatiran akan rasa kehilangan, kecemasan, depresi, dan kesepian. Hasil penelitian menunjukkan bahwa ada hubungan yang sangat kuat dan jelas antara penggunaan media sosial dengan peningkatan depresi dan kesepian.

Ada dua hal utama yang membuat media sosial dapat menimbulkan rasa depresi dan kesepian. Pertama, media sosial menimbulkan perbandingan sosial ke arah negatif. Seseorang akan merasa ditinggalkan atau dikucilkan saat ia melihat orang lain di media sosial bersenang-senang. Kedua, ketika mengakses media sosial dan menghabiskan setiap menitnya, orang yang candu pada media sosial akan menjauh dari orang-orang di sekitarnya.`,
    pertanyaan: "Kata 'ditanya' pada kalimat 8 harus diperbaiki menjadi ...",
    pilihan: {
      A: "Menanya",
      B: "Menanyakan",
      C: "Bertanya",
      D: "Ditanyakan",
      E: "Ditanyai"
    },
    jawaban: "E",
    pembahasan: "Kata ditanyai memiliki makna diberi pertanyaan. Bentuk tersebut lebih tepat digunakan dalam konteks kalimat yang menjelaskan bahwa para peserta kembali diberi pertanyaan oleh peneliti."
  },
  {
    id: 10,
    kode: "SBMPTN 2019/UTBK I/PBM/30",
    teksId: "PBM_TEKS2",
    teks: null,
    pertanyaan: "Diperlukan sebuah paragraf antara kalimat 3 dan 4. Gagasan pokok paragraf yang paling tepat adalah ...",
    pilihan: {
      A: "Alasan pemilihan tiga media sosial",
      B: "Prosedur pemilihan tiga media sosial",
      C: "Dampak pemilihan tiga media sosial",
      D: "Hasil penelitian tiga media sosial",
      E: "Metode penelitian tiga media sosial"
    },
    jawaban: "E",
    pembahasan: "Kalimat 3 menjelaskan fokus penelitian pada Facebook, Snapchat, dan Instagram. Kalimat 4 mulai menjelaskan pembagian partisipan ke dalam kelompok. Jadi, paragraf penghubung yang dibutuhkan membahas metode penelitian tiga media sosial."
  }
    ],


    // 4. PENGETAHUAN KUANTITATIF
    PK: [
  {
    id: 1,
    kode: "SBMPTN 2019/UTBK I/PK/68",
    teksId: null,
    teks: null,
    pertanyaan: "Rasio antara jumlah uang yang dimiliki oleh Agung, Budi, dan Cika adalah 2 : 3 : 5. Jika selisih antara jumlah uang Agung dan Budi adalah x rupiah, maka total jumlah uang Budi dan Cika adalah ... rupiah.",
    pilihan: {
      A: "2x",
      B: "3x",
      C: "5x",
      D: "8x",
      E: "10x"
    },
    jawaban: "D",
    pembahasan: "Misalkan uang Agung, Budi, dan Cika berturut-turut adalah 2a, 3a, dan 5a. Selisih uang Budi dan Agung adalah 3a - 2a = a. Karena selisih tersebut adalah x, maka a = x. Jumlah uang Budi dan Cika adalah 3a + 5a = 8a = 8x."
  },
  {
    id: 2,
    kode: "SBMPTN 2019/UTBK II/PK/68",
    teksId: null,
    teks: null,
    pertanyaan: "Pembelian satu celana memperoleh diskon 30%, sedangkan satu baju memperoleh diskon 10%. Jika harga awal satu celana dan satu baju tersebut berturut-turut sama, maka jumlah uang yang harus dibayarkan untuk membeli satu celana dan satu baju adalah ...",
    pilihan: {
      A: "3/5 P",
      B: "4/5 P",
      C: "6/5 P",
      D: "7/5 P",
      E: "8/5 P"
    },
    jawaban: "E",
    pembahasan: "Misalkan harga awal masing-masing barang adalah P. Harga celana setelah diskon 30% adalah 70% P, sedangkan harga baju setelah diskon 10% adalah 90% P. Total pembayaran = 70% P + 90% P = 160% P = 8/5 P."
  },
  {
    id: 3,
    kode: "SBMPTN 2019/UTBK I/PK/75",
    teksId: null,
    teks: null,
    pertanyaan: "Satu perkebunan sawit dengan luas 100 hektar dapat menghasilkan minyak sawit N ton. Setelah dilakukan peremajaan kembali, produktivitas minyak sawit meningkat maksimal 0,08 ton untuk setiap hektar. Manakah hubungan yang benar antara kuantitas P dan Q berikut berdasarkan informasi yang diberikan?\n\nKuantitas P: Maksimum tambahan total minyak sawit\nKuantitas Q: 8 ton",
    pilihan: {
      A: "P > Q",
      B: "Q > P",
      C: "P = Q",
      D: "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari tiga pilihan di atas."
    },
    jawaban: "C",
    pembahasan: "Tambahan maksimum produksi setiap hektar adalah 0,08 ton. Untuk luas 100 hektar, tambahan maksimum = 100 × 0,08 = 8 ton. Jadi, kuantitas P sama dengan kuantitas Q."
  },
  {
    id: 4,
    kode: "SBMPTN 2019/UTBK II/PK/75",
    teksId: null,
    teks: null,
    pertanyaan: "Dalam seminggu, seorang pekerja menerima upah sebesar Rp500.000,00. Dalam sehari, ia bekerja selama 5 jam. Penghasilan minimal yang diterima pekerja tersebut setiap jam adalah Rp40.000,00. Manakah hubungan yang benar antara kuantitas P dan Q berikut berdasarkan informasi yang diberikan?\n\nKuantitas P: Maksimum lama kerja minimal dalam satu minggu\nKuantitas Q: 14 jam",
    pilihan: {
      A: "P > Q",
      B: "Q > P",
      C: "P = Q",
      D: "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari tiga pilihan di atas."
    },
    jawaban: "B",
    pembahasan: "Upah total pekerja adalah Rp500.000,00 dan penghasilan minimal per jam Rp40.000,00. Maksimum lama kerja berdasarkan upah tersebut adalah Rp500.000 ÷ Rp40.000 = 12,5 jam. Karena 14 jam lebih besar daripada 12,5 jam, maka Q > P."
  },
  {
    id: 5,
    kode: "UTBK 2020/TPS/PK/50",
    teksId: null,
    teks: null,
    pertanyaan: "Peningkatan hasil tangkapan ikan per hari berkisar 0,2 ton sampai dengan 0,8 ton. Hari ini hasil tangkapan ikan 40 ton. Manakah hubungan yang benar antara kuantitas P dan Q berikut berdasarkan informasi yang diberikan?\n\nKuantitas P: Hasil tangkapan ikan besok\nKuantitas Q: Kurang dari 41,5 ton",
    pilihan: {
      A: "Kuantitas P lebih besar daripada kuantitas Q",
      B: "Kuantitas Q lebih besar daripada kuantitas P",
      C: "Kuantitas P sama dengan kuantitas Q",
      D: "Informasi yang diberikan tidak cukup untuk memutuskan hubungan kuantitas P dan Q"
    },
    jawaban: "B",
    pembahasan: "Hasil tangkapan hari ini adalah 40 ton dan peningkatannya berkisar 0,2 sampai 0,8 ton. Jadi, hasil tangkapan besok berkisar antara 40,2 hingga 40,8 ton. Nilai tersebut selalu kurang dari 41,5 ton, sehingga kuantitas Q lebih besar daripada kuantitas P."
  },
  {
    id: 6,
    kode: "UTBK 2021/TPS/PK/Gel.1/03",
    teksId: null,
    teks: null,
    pertanyaan: "Ada tiga jenis kue menggunakan empat jenis bahan dengan ketentuan sebagai berikut:\n\nKue I menggunakan 3 bahan A dan 5 bahan C.\nKue II menggunakan 3 bahan B dan 2 bahan D.\nKue III menggunakan 3 bahan B dan 2 bahan C.\n\nHarga satuan bahan disajikan dalam tabel berikut:\n\nBahan A: Rp135.000,00\nBahan B: Rp120.000,00\nBahan C: Rp120.000,00\nBahan D: Rp150.000,00\n\nKeuntungan maksimal yang bisa diperoleh dari penjualan satu kue adalah ...",
    pilihan: {
      A: "Rp25.000,00",
      B: "Rp30.000,00",
      C: "Rp40.000,00",
      D: "Rp45.000,00",
      E: "Rp50.000,00"
    },
    jawaban: "C",
    pembahasan: "Dokumen sumber memberikan kunci C, tetapi informasi harga jual masing-masing kue tidak tercantum secara lengkap. Karena itu, keuntungan maksimal belum dapat dihitung secara mandiri dari data yang tersedia."
  },
  {
    id: 7,
    kode: "UTBK 2021/TPS/PK/Gel.1/07",
    teksId: null,
    teks: null,
    pertanyaan: "Seseorang berjalan sepanjang satu sisi sebuah pulau berbentuk persegi dengan sisi 2 kilometer. Orang tersebut menghitung kera di sekitarnya dengan jarak pandang berkisar 10–20 meter. Banyaknya kera yang berhasil dilihat sepanjang perjalanan adalah 100 ekor. Diasumsikan banyaknya kera per kilometer persegi sama. Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?\n\nKuantitas P: Kepadatan kera di pulau tersebut\nKuantitas Q: 11.500",
    pilihan: {
      A: "Kuantitas P lebih besar daripada Q",
      B: "Kuantitas Q lebih besar daripada P",
      C: "Kuantitas P sama dengan Q",
      D: "Informasi yang diberikan tidak cukup untuk menentukan hubungan keduanya"
    },
    jawaban: "D",
    pembahasan: "Dokumen sumber mencantumkan kunci D, tetapi pilihan D tidak tercetak pada bagian soal dan pembahasannya tidak menjelaskan perhitungan secara memadai. Soal ini perlu diverifikasi kembali sebelum digunakan sebagai soal penilaian."
  },
  {
    id: 8,
    kode: "UTBK 2021/TPS/PK/Gel.2/20",
    teksId: null,
    teks: null,
    pertanyaan: "Seseorang dapat membuat tiga jenis roti yang masing-masing memerlukan dua bahan berbeda dengan perincian biaya sebagai berikut:\n\nRoti A: Tepung Rp20.000,00 dan mentega Rp40.000,00 per potong.\nRoti B: Tepung Rp30.000,00 dan mentega Rp30.000,00 per potong.\nRoti C: Tepung Rp40.000,00 dan mentega Rp20.000,00 per potong.\n\nJika dana yang disediakan orang tersebut sebesar Rp660.000,00, maksimum banyaknya roti yang bisa dibuat adalah ...",
    pilihan: {
      A: "13 potong",
      B: "12 potong",
      C: "11 potong",
      D: "9 potong",
      E: "8 potong"
    },
    jawaban: "C",
    pembahasan: "Biaya untuk membuat setiap jenis roti sama, yaitu Rp60.000,00 per potong. Dengan dana Rp660.000,00, jumlah maksimum roti yang dapat dibuat adalah Rp660.000 ÷ Rp60.000 = 11 potong."
  },
  {
    id: 9,
    kode: "UTBK 2021/TPS/PK/Gel.2/24",
    teksId: null,
    teks: null,
    pertanyaan: "Sejumlah orang mengikuti upacara bendera di lapangan yang berukuran 100 meter × 50 meter. Peserta upacara menerapkan protokol COVID-19 dengan jarak antarorang minimal satu meter. Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?\n\nKuantitas P: Jumlah peserta upacara\nKuantitas Q: 5.000",
    pilihan: {
      A: "Kuantitas P lebih besar daripada Q",
      B: "Kuantitas Q lebih besar daripada P",
      C: "Kuantitas P sama dengan Q",
      D: "Tidak dapat ditentukan hubungan antara kuantitas P dan Q"
    },
    jawaban: "A",
    pembahasan: "Dengan jarak satu meter, jumlah maksimum peserta menurut pola penempatan pada kisi dapat dihitung sebesar (100 + 1) × (50 + 1) = 5.151 orang. Jumlah tersebut lebih besar daripada 5.000, sehingga P > Q."
  },
  {
    id: 10,
    kode: "UTBK 2022/TPS/PK/H4/76",
    teksId: null,
    teks: null,
    pertanyaan: "Dua pulau berdekatan digambarkan pada sebuah peta. Dua kapal P dan Q sedang bersandar di pinggir pantai. Setiap persegi pada peta berukuran 1 cm × 1 cm dan merepresentasikan luas 1 km². Berapakah jumlah pernyataan berikut yang bernilai benar?\n\n(1) Skala peta adalah 1 : 1.000.000.\n(2) Jarak dari kapal P ke kapal Q lebih dari 4 km.\n(3) Pulau besar lebih luas daripada 4 kali pulau kecil.\n(4) Jarak terdekat antara garis pantai kedua pulau kurang dari 1 km.",
    pilihan: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
      E: "4"
    },
    jawaban: "D",
    pembahasan: "Pernyataan (1) salah karena 1 cm pada peta merepresentasikan 1 km di lapangan, sehingga skalanya 1 : 100.000. Pernyataan (2) benar karena jarak kapal P dan Q berdasarkan teorema Pythagoras adalah 5 km. Pernyataan (3) benar karena luas pulau besar sekitar 24 km² dan pulau kecil sekitar 2 km². Pernyataan (4) benar karena jarak terdekat kedua pantai kurang dari 1 km. Jadi, terdapat 3 pernyataan yang benar."
  }
    ],


    // 5. LITERASI BAHASA INDONESIA
    LBI: [
  {
    id: 1,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teks: `Setelah tidur lelap, esok pagi-pagi Sri mulai menyusun rencana. Dengan asumsi terus tinggal di penginapan ini, uang yang dia bawa cukup untuk tiga bulan ke depan membayar sewanya jika dia berhemat dengan pindah menyewa apartemen bulanan yang lebih murah, mungkin bisa membuatnya bertahan hingga lima-enam bulan.

Semakin cepat dia memperoleh pekerjaan, situasinya akan semakin baik. Baiklah, pekerjaan jenis apa yang bisa dilakukan? Sri meraih surat kabar pagi yang dipinjam dari petugas hotel, membuka halaman lowongan pekerjaan, mulai membaca. Tangan kirinya sesekali melingkari beberapa lowongan yang cocok, sementara tangan kanannya meraih buah apel.

Sri menyalin lima enam lowongan pekerjaan di kertas. Pukul tujuh pagi dia turun ke meja tamu hotel, mengembalikan surat kabar.

"Di mana aku bisa menemukan rumah makan muslim?" Sri sekaligus bertanya. "Itu tidak sulit, Mam. Ada satu restoran tidak jauh dari sini, setengah mil berjalan kaki ke arah barat. Mereka menjual nasi biryani."

Sri mengangguk, "Satu lagi, apakah kamarku bisa dipindahkan ke lantai enam?"

"Tentu saja bisa, Mam."

Sri mengucapkan terima kasih, menuju pintu penginapan, dia mulai mencari pekerjaan. Itulah rutinitas yang dilakukan Sri. Bedanya dengan dulu setiba di Jakarta, kali ini dia tidak perlu berjalan kaki. Sri menumpang sistem transportasi massal Kota London yang nyaman.

Setiap hari, dia berpindah-pindah dari satu tempat ke tempat lain, bertanya lowongan pekerjaan, baru pukul enam atau tujuh malam kembali ke penginapan. Dua minggu berlalu dengan cepat. Nihil - ini yang sama dengan di Jakarta dulu.`,
    pertanyaan: "Tema kutipan novel tersebut adalah",
    pilihan: {
      A: "Perjuangan seorang perempuan di negara seberang untuk mencari pengakuan dan penghidupan layak.",
      B: "Perjalanan gigih seorang perempuan untuk mengubah kehidupan yang lebih baik meskipun banyak rintangan.",
      C: "Perubahan kehidupan seseorang ketika berjuang mendapat pekerjaan di Indonesia dan Inggris.",
      D: "Perbedaan perjuangan seseorang untuk mencari pekerjaan di dua negara karena budaya yang berbeda.",
      E: "Perasaan seseorang dalam menjalani kehidupan yang selalu berpindah tempat tanpa persiapan."
    },
    jawaban: "D",
    pembahasan: "Dalam kutipan cerita, Sri melakukan rutinitas mencari pekerjaan di London yang sama dengan pengalamannya di Jakarta. Perbedaannya, di London Sri menggunakan sistem transportasi massal yang nyaman sehingga tidak perlu berjalan kaki. Oleh karena itu, tema kutipan tersebut adalah perbedaan perjuangan seseorang untuk mencari pekerjaan di dua negara karena budaya yang berbeda."
  },
  {
    id: 2,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS1",
    teks: null,
    pertanyaan: "Manakah pernyataan yang merepresentasikan Sri sebagai seorang yang taat?",
    pilihan: {
      A: "Setelah tidur lelap, esok pagi-pagi Sri mulai menyusun rencana.",
      B: "Pukul tujuh pagi dia turun ke meja hotel, mengembalikan surat kabar.",
      C: "\"Di mana aku bisa menemukan rumah makan muslim?\" Sri sekaligus bertanya.",
      D: "Sri melingkari tanggal, menandainya, sambil menghabiskan roti tawar.",
      E: "Sri mengucapkan terima kasih, menuju pintu penginapan, dia mulai mencari pekerjaan."
    },
    jawaban: "C",
    pembahasan: "Ketaatan seseorang dapat dilihat dari bagaimana ia memegang teguh ajaran keyakinannya. Sri merupakan seorang Muslim yang memperhatikan makanan halal. Hal tersebut terlihat ketika Sri bertanya tentang lokasi rumah makan Muslim. Jadi, jawaban yang tepat adalah C."
  },
  {
    id: 3,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS2",
    teks: `Tanaman kopi umumnya berdaun hijau sepanjang tahun, berbunga putih, dan menghasilkan buah kopi yang mirip dengan buah ceri namun terbungkus dengan cangkang yang keras. Pemanenan buah kopi dari tandannya biasanya dilakukan secara manual, dipilih buah yang matang dan berwarna merah. Biji kopi kemudian dipisahkan dari kulit buah dan cangkangnya melalui penggilingan langsung atau dikeringkan terlebih dahulu di bawah sinar matahari. Sebelum digiling buah kopi umumnya dicuci terlebih dahulu, sehingga fermentasi singkat dapat terjadi saat penggilingan. Di Indonesia, buah kopi umumnya dikeringkan dengan dijemur di bawah sinar matahari hingga kadar airnya tersisa 30-35%. Pemisahan biji dari cangkangnya dapat dilakukan dengan lebih mudah pada biji kopi kering. Biji kopi yang sudah bersih kemudian disangrai dengan derajat dan waktu pemanasan tertentu. Akhirnya, kopinya dihaluskan menjadi bubuk yang siap diseduh dengan air panas untuk menghadirkan minuman kopi.

Rasa nikmat minuman kopi sangat ditentukan oleh suhu pemanasan dan tingkat kegosongan selama pemanggangan, selain juga ditentukan oleh jenis pohon kopinya. Di Indonesia dikenal dua jenis kopi, yaitu Arabica dan Robusta. Biji kopi Arabica mempunyai ukuran agak besar, pipih, sedikit memanjang, dan agak rapuh. Di lain pihak, biji kopi Robusta berukuran lebih kecil, berbentuk bulat, dan terlihat padat. Tanaman kopi Arabica tidak tahan panas dan rentan terhadap penyakit, namun cita rasa kopi Arabika lebih banyak disukai masyarakat.

Zat aktif yang terdapat dalam biji kopi disebut kafein. Zat ini berasa pahit dan dipercaya dapat memberikan efek stimulasi terhadap sistem saraf pusat, seperti mengurangi rasa kantuk, mengurangi rasa lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap panca indera, dan meningkatkan detak jantung. Dekafeinasi merupakan modifikasi produk kopi untuk mengurangi kadar kafein dan meningkatkan citarasa kopi. Beberapa metode yang dapat dilakukan dalam dekafeinasi antara lain melalui ekstraksi menggunakan air, pelarut kimia, karbondioksida superkritis, dan minyak biji bunga matahari. Dekafeinasi juga dapat dilakukan menggunakan arang aktif, mikroorganisme, atau enzim tertentu. Gas CO2 banyak terdapat di udara dan ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, namun teknologi pengerjaannya memerlukan biaya yang tinggi.`,
    pertanyaan: "Dekafeinasi dengan metode ekstraksi yang mahal namun efektif untuk mengurangi kadar kafein dalam biji kopi adalah",
    pilihan: {
      A: "Menggunakan pelarut air",
      B: "Menggunakan pelarut kimia",
      C: "Menggunakan karbondioksida superkritis",
      D: "Memanfaatkan mikroorganisme",
      E: "Memanfaatkan enzim sebagai biokatalis"
    },
    jawaban: "C",
    pembahasan: "Pada paragraf terakhir dijelaskan bahwa ekstraksi dengan pelarut CO2 superkritis dapat mengurangi kadar kafein dalam biji kopi hingga 96%, tetapi teknologi pengerjaannya memerlukan biaya tinggi."
  },
  {
    id: 4,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS2",
    teks: null,
    pertanyaan: "Salah satu ciri khas kopi Arabica adalah",
    pilihan: {
      A: "Biji kopinya berukuran agak besar dan berbentuk pipih",
      B: "Tekstur biji kopinya berbentuk bulat dan terlihat padat",
      C: "Kandungan kafeinnya lebih tinggi dibandingkan Robusta",
      D: "Tanaman kopinya tahan terhadap hama dan penyakit",
      E: "Cita rasa minuman kopinya kurang disukai masyarakat"
    },
    jawaban: "A",
    pembahasan: "Berdasarkan teks, biji kopi Arabica mempunyai ukuran agak besar, pipih, sedikit memanjang, dan agak rapuh. Tanamannya tidak tahan panas dan rentan terhadap penyakit, tetapi cita rasanya lebih banyak disukai masyarakat."
  },
  {
    id: 5,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS2",
    teks: null,
    pertanyaan: "Efek berikut BUKAN merupakan akibat konsumsi kafein adalah ....",
    pilihan: {
      A: "Mengurangi rasa kantuk",
      B: "Mengurangi rasa lelah",
      C: "Menurunkan detak jantung",
      D: "Meningkatkan daya tangkap pancaindera",
      E: "Meningkatkan stamina tubuh"
    },
    jawaban: "C",
    pembahasan: "Dalam teks dijelaskan bahwa kafein dapat mengurangi rasa kantuk dan lelah, meningkatkan stamina tubuh, meningkatkan daya tangkap pancaindera, serta meningkatkan detak jantung. Jadi, menurunkan detak jantung bukan merupakan efek konsumsi kafein."
  },

{
    id: 6,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS3",

    teks: `Teknologi informasi dan komunikasi terus berkembang sehingga kemudahan akses dan ragam informasi semakin meningkat. Produksi dan distribusi informasi berupa teks, gambar, suara, dan video melalui fitur perangkat digital dan beragam aplikasi dapat diakses hanya dengan sentuhan jari. Informasi yang dulu sangat terbatas sekarang menjadi melimpah ruah. Bahkan, informasi yang tidak diinginkan pun datang sendiri melalui grup percakapan digital dan akun media sosial, mulai dari politik, hukum, kriminal, pendidikan, ekonomi, budaya, agama, bencana, gosip, dan undian berhadiah hingga promo diskon. Kendati demikian, informasi yang beredar dan melimpah ruah tersebut masih bercampur baur antara yang hoaks dan tidak hoaks, antara yang positif dan negatif.

Survei AP3I (2022) menyebutkan tingkat penetrasi internet di Indonesia pada 2022 sebesar 99,02%. Dua aplikasi yang paling sering diakses adalah media sosial (89,19%) dan percakapan daring (73,86%). Dua aplikasi tersebut merupakan sumber produksi konten terbesar di ruang digital. Internetvestat (2023) melaporkan per hari sekitar 727 juta tweet dikirimkan, 85 juta gambar diunggah ke Instagram, 7 juta tulisan dikirimkan ke situs daring. Semua itu tentu mengandung informasi, entah valid atau hoaks, entah edukatif atau destruktif.

Kecenderungan pengguna mengunggah dan membagi berbagai informasi melalui akun media sosial semakin mempercepat limpahan dan kompleksitas informasi yang beredar. Demikian juga dengan kompetisi antarsitus dalam meningkatkan jumlah kunjungan melalui tawaran sajian informasi dengan perspektif yang berbeda, tampilan menarik hingga judul-judul unik dan bahkan bombastis. Kondisi demikian tidak jarang membuat pembaca bingung membedakan tingkat validitas informasi dan sulit menarik intisari informasi. Tantangan terbesar bukan terletak pada usaha mendapatkan akses, melainkan pada bagaimana menyaring limpahan informasi hingga mendapatkan intisarinya. Menyaring informasi bukan sekadar memberikan batasan dengan menggunakan kata kunci tertentu melainkan juga memilih antara yang valid dan tidak valid.

Campur aduknya informasi yang tersaji membuat ruang digital menjadi tidak sehat dan tidak kondusif untuk pengembangan pengetahuan dan karakter serta sebagai media perekat persatuan antaranak bangsa. Oleh karena itu, mewujudkan ruang digital yang sehat menjadi penting. Penguatan literasi digital adalah kuncinya, utamanya pada pilar etika digital.`,

    pertanyaan: "Fokus bahasan teknologi informasi dan komunikasi dalam bacaan di atas adalah",

    pilihan: {
        A: "Kemudahan akses dan keanekaragaman jenis informasi dan komunikasi yang terus menerus meningkat",
        B: "Produksi dan distribusi beragam informasi yang tersaji melalui fitur digital dan beragam aplikasi",
        C: "Ketersediaan media penyajian yang menghasilkan keberlimpahan informasi yang dulu sulit diperoleh",
        D: "Berbagai jenis informasi yang datang sendiri melalui grup percakapan digital dan media sosial",
        E: "Ketersediaan beragam informasi baik yang valid maupun tidak valid dengan peredaran yang sangat cepat"
    },

    jawaban: "E",

    pembahasan: "Bacaan menjelaskan bahwa perkembangan teknologi informasi dan komunikasi membuat informasi semakin melimpah. Namun, informasi tersebut bercampur antara yang valid dan tidak valid, serta antara hoaks dan bukan hoaks."
},

{
    id: 7,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS3",

    pertanyaan: "Data tentang sumber produksi konten terbesar di ruang digital tergambar dalam persentase",

    pilihan: {
        A: "Tingkat penetrasi internet",
        B: "Konten yang paling sering diakses",
        C: "Tweet yang dikirim ke media sosial",
        D: "Gambar yang diunggah ke media sosial",
        E: "Tulisan yang dikirimkan ke situs daring"
    },

    jawaban: "A",

    pembahasan: "Berdasarkan pembahasan dalam dokumen, paragraf kedua menjelaskan tingkat penetrasi internet sebesar 99,02%, serta persentase media sosial dan percakapan daring yang menjadi sumber produksi konten terbesar di ruang digital."
},

{
    id: 8,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS3",

    pertanyaan: "Simpulan yang paling relevan dengan isi bacaan adalah ....",

    pilihan: {
        A: "Kecenderungan pengunggahan dan pendistribusian informasi melalui media sosial mempercepat limpahan dan kompleksitas informasi.",
        B: "Kompetisi antarsitus dalam meningkatkan jumlah kunjungan dilakukan dengan menawarkan sajian informasi atraktif.",
        C: "Kondisi keberlimpahan informasi membingungkan pembaca untuk membedakan tingkat validitas suatu informasi.",
        D: "Usaha menyaring berbagai informasi dan mendapatkan intisarinya merupakan tantangan terbesar di era informasi ini.",
        E: "Kegiatan menyaring informasi merupakan usaha memilah informasi valid/tidak valid dan hoaks atau tidak hoaks."
    },

    jawaban: "D",

    pembahasan: "Simpulan harus mewakili keseluruhan isi teks. Perkembangan teknologi membuat informasi melimpah dan bercampur antara yang valid dan tidak valid. Tantangan terbesarnya adalah menyaring informasi yang masuk dan mendapatkan intisarinya."
},

{
    id: 9,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS4",

    teks: `Pada era Revolusi Industri 4.0, di semua lini mulai dilakukan otomatisasi. Otomatisasi adalah penggantian tenaga manusia dengan tenaga mesin yang secara otomatis dapat melakukan dan mengatur pekerjaan sehingga tidak diperlukan lagi pengawasan manusia. Meningkatnya adopsi otomatisasi dan kecerdasan artifisial (AI) tentu akan mengubah industri. Teknologi ini juga akan membawa manfaat signifikan bagi perekonomian, termasuk peningkatan produktivitas, pertumbuhan, pendapatan, dan lapangan kerja. McKinsey melakukan penelitian dengan menganalisis efek otomatisasi terhadap 2.000 kegiatan kerja pada pekerjaan (konvensional dan masa kini) berdasarkan teknologi yang sudah ada. Hasil penelitian McKinsey menemukan bahwa otomatisasi memberikan tiga manfaat. Pertama, berpotensi meningkatkan produksi dan pertumbuhan produk domestik bruto (PDB) negara. Kedua, menghasilkan pendapatan yang lebih tinggi bagi pekerja Indonesia. Ketiga, menciptakan peluang pasar bagi perusahaan.

Tipe pekerjaan secara keseluruhan akan bergeser ke arah layanan dan menjauh dari pekerjaan yang berotomasi tinggi, seperti pemrosesan data dan pekerjaan fisik yang dapat diprediksi (contohnya: buruh di industri manufaktur). Permintaan tenaga kerja akan meningkat pada sektor konstruksi, manufaktur, layanan kesehatan, akomodasi, kuliner, pendidikan, dan ritel. Namun, di samping pekerjaan yang hilang dan muncul, hampir semua pekerjaan akan berubah. Perubahan ini terjadi pada sifat pekerjaan, misalnya self-service checkout akan menggeser peran kasir dalam proses transaksi. Peneliti memperkirakan 60 persen dari semua pekerjaan secara global, sekitar 30 persen aktivitasnya dapat diotomatisasi.

Otomatisasi parsial pekerjaan cenderung menjadi hal yang umum, sedangkan otomatisasi penuh memiliki kemungkinan lebih kecil terjadi di Indonesia. Hal ini karena pemerintah masih menghimbau ada pekerjaan yang sifatnya produksi massal agar ada penyerapan tenaga kerja. Industri lokal dan penanaman modal asing (PMA) masih banyak menggunakan tenaga kerja. Untuk itu bentuk dukungan yang dilakukan pemerintah dengan mengeluarkan regulasi untuk memperbaiki sistem ketenagakerjaan dalam rangka mengundang investor lebih banyak untuk menanamkan modalnya di Indonesia.

Otomatisasi juga memberikan dampak sosial negatif pada masyarakat, antara lain meningkatnya angka pengangguran karena banyak buruh akan kehilangan pekerjaan. Untuk menghindari terjadinya keresahan sosial pemerintah mulai melakukan berbagai program pelatihan untuk meningkatkan kualitas tenaga kerja manusia.`,

    pertanyaan: "Dampak negatif otomatisasi bagi masyarakat terutama dalam bidang pekerjaan adalah",

    pilihan: {
        A: "Menghilangnya profesi lama berpotensi melahirkan keresahan sosial",
        B: "Permintaan mesin baru dalam proses otomatisasi menjadi biaya tinggi",
        C: "Kenaikan permintaan tenaga kerja di luar sektor industri manufaktur",
        D: "Berubahnya beberapa jenis pekerjaan lama menjadi pekerjaan baru",
        E: "Berkurangnya permintaan tenaga kerja"
    },

    jawaban: "A",

    pembahasan: "Pada paragraf terakhir dijelaskan bahwa otomatisasi dapat meningkatkan angka pengangguran karena banyak buruh kehilangan pekerjaan. Kondisi tersebut berpotensi menimbulkan keresahan sosial."
},

{
    id: 10,
    kode: "UTBK2023/TPS/LBI/GEL.1",
    teksId: "LBI_TEKS4",

    pertanyaan: "Dampak yang didapatkan dari otomatisasi industri bagi negara adalah ....",

    pilihan: {
        A: "Diprediksi akan menciptakan peluang pasar baru",
        B: "Berpotensi meningkatkan pertumbuhan PDB",
        C: "Cenderung meningkatkan permintaan tenaga kerja",
        D: "Berpotensi meningkatkan pendapatan tenaga kerja",
        E: "Meningkatkan pertumbuhan industri lokal"
    },

    jawaban: "B",

    pembahasan: "Berdasarkan penelitian McKinsey dalam bacaan, otomatisasi memberikan manfaat berupa peningkatan produksi dan pertumbuhan produk domestik bruto (PDB) negara. Jadi, jawaban yang tepat adalah B."
}
],


LBE: [

{
    id: 1,
    kode: "SBMPTN/2018/534/79",
    teksId: "LBE_TEKS1",

    teks: `Schools must incorporate technology into daily teaching to realize the benefits. The daily use of technology in core classes correlates highly to the desirable education success measures (ESMS). Daily technology use is a top-five indicator of better discipline, better attendance, and increased college attendance.

In 1:1 (one child one laptop) schools, daily use of technology in core curriculum classes ranges from 51% to 63%. Unfortunately, many 1:1 schools report using the technology on only a weekly basis or less often for many classes. It may appear surprising that in 40% of 1:1 schools, where every student has a laptop, students do not use the technology on a daily basis. The anecdotal evidence suggests a few answers: first, some schools move into 1:1 computing based on top-down directives and do not enjoy stakeholder buy-in. Second, many schools have inadequate levels of professional development. America's Digital Schools 2006 provides strong support for this argument. Third, schools buy the hardware but no courseware. In one large implementation, the hardware vendor who won the bid allocated only 50 cents for software, requiring the schools to supplement the software out of their own budget. Fourth, the laptops are used for less transformative activities. Next, computer use is limited to tool use, such as PowerPoint or word processing, with some limited web browsing. Broader uses including digital content with meaningful integration are not employed.

Some educators have asked if technology has to be used daily to be effective or if daily use is overkill. If the use of technology is just tinkering around the edges, daily use may not matter or produce better results. However, it matters a great deal if technology is embedded in the school. If applied, it produces results beyond those expected by chance. Technology-transformed learning is all about learning productivity. It is much faster to look something up on a computer than in a book, but if a student spends only 30 minutes a week on a computer, the maximum productivity benefit is less than 2%. Infrequent access precludes many productive applications.`,

    pertanyaan: "With the second sentence in the first paragraph, the author intends to ....",

    pilihan: {
        A: "show technology use within the process of teaching and learning",
        B: "imply that educational technology leads to teaching effectiveness",
        C: "show the use of technology in classrooms is closely related to the indicators that lead to the success of education",
        D: "argue that the core curriculum classes without technology ranges from 51% to 63%",
        E: "suggest that incorporating technology into a school curriculum will bring about learning efficiency"
    },

    jawaban: "C",

    pembahasan: "Kalimat kedua paragraf pertama menjelaskan bahwa penggunaan teknologi dalam kelas inti berkaitan erat dengan indikator keberhasilan pendidikan."
},

{
    id: 2,
    kode: "SBMPTN/2018/534/80",
    teksId: "LBE_TEKS1",

    pertanyaan: "With ideas in paragraph 3, the author would apparently agree that....",

    pilihan: {
        A: "the factors influencing the success of technology uses in schools remain anecdotal",
        B: "the increase of education success is highly correlated with the presence of technology",
        C: "the use of computer technology has not yet been successfully implemented",
        D: "the use of computer by students is already broad and on daily basis",
        E: "the students' competence in using technology is actually well-integrated"
    },

    jawaban: "A",

    pembahasan: "Pilihan A merupakan jawaban yang paling sesuai dengan isi paragraf ketiga berdasarkan kunci jawaban dalam dokumen."
},

{
    id: 3,
    kode: "SBMPTN/2018/534/81",
    teksId: "LBE_TEKS1",

    pertanyaan: "The author's assumption about the use of computer technology in school is ....",

    pilihan: {
        A: "without good software and frequent use, the expected results cannot be achieved",
        B: "technology matters a great deal only in the top-five schools for its effectiveness",
        C: "technology should be embedded in all of the school programs",
        D: "the effectiveness of daily use of technology is aimed to increase the quality of educators",
        E: "some schools get great impacts from using technology on its daily basis"
    },

    jawaban: "A",

    pembahasan: "Penulis berasumsi bahwa penggunaan teknologi tidak akan memberikan hasil yang diharapkan apabila tidak didukung perangkat lunak yang baik dan penggunaan yang cukup sering."
},

{
    id: 4,
    kode: "SBMPTN/2018/534/82",
    teksId: "LBE_TEKS1",

    pertanyaan: "The author illustrates the significance of technology use on a daily basis in paragraph....",

    pilihan: {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5"
    },

    jawaban: "B",

    pembahasan: "Ilustrasi mengenai pentingnya penggunaan teknologi setiap hari terdapat pada paragraf kedua."
},

{
    id: 5,
    kode: "SBMPTN/2018/534/83",
    teksId: "LBE_TEKS2",

    teks: `The green movement is catching on in many pockets of the world. This is especially true in the construction industry. Today's buzz words, which include global warming and zero emission, are causing everyday people to look for ways to reduce their carbon footprint. Purchasing environmentally-friendly property is a good investment for those who are concerned about their own health and the well-being of the earth. Based on this trend, entire districts, known as eco-communities, are being designed with green initiatives in mind. Dockside Green in Victoria, British Columbia, Canada is one of these communities. Its goal is to become the world's first zero-emissions neighborhood.

Builders of Dockside Green have the environment in mind with every choice they make. They ensure proper ventilation, and guarantee residents 100% fresh indoor air. Interior and exterior building materials, such as paints and wood, are natural and non-toxic. Eco-conscious builders use bamboo wherever possible because it is durable and does not require pesticides to grow.

Energy efficiency is one of the top priorities in eco-communities, such as Dockside Green. Not only do energy-efficient appliances and light fixtures reduce the environmental impact of heating and hot water, they also save residents and business owners money. Dockside Green claims that home owners will use 55% less energy than average residents in Canada. Though they are sharing space by investing in condo-style living, residents will have individual utility metres. Studies show that people use approximately 20% less energy when they are billed for exactly what they use. In addition, water is treated at Dockside Green and reused on site for flushing toilets.

Planners of eco-communities such as Dockside Green must take the future into account. Dockside Green will reuse 90% of its construction waste. They also plan to continue using local suppliers for all of their transport and maintenance needs. This is a great way to reduce emissions. Dockside residents will be encouraged to make use of a mini transit system and buy into the community's car share program. Finally, plans are in the works for a high-tech heating system that will use renewable biomass instead of fossil fuels.`,

    pertanyaan: "By saying 'Today's buzz words, which include global warming and zero/emissions, are causing everyday people to look for ways to reduce their carbon footprint.' in lines 1-3, the author implies that ....",

    pilihan: {
        A: "environmental issues have made people more cautious of their actions",
        B: "global warming and zero emissions become everyone's concern",
        C: "people have to take care of their greenhouses carefully",
        D: "eco-friendly environmental programs should be strongly enforced",
        E: "all people around the world are aware of global warming"
    },

    jawaban: "A",

    pembahasan: "Pilihan A merupakan jawaban yang tepat karena kepedulian dan perhatian masyarakat terhadap isu lingkungan ditunjukkan melalui tindakan nyata."
},

{
    id: 6,
    kode: "SBMPTN/2018/534/84",
    teksId: "LBE_TEKS2",

    pertanyaan: "Which of the following best restates the sentence 'The green movement is catching on in many pockets of the world.' in line 1?",

    pilihan: {
        A: "Many people consider it crucial to have eco-friendly environments.",
        B: "People who are aware of environmental issues love safe and healthy surroundings.",
        C: "House designers should consider the importance of green materials.",
        D: "Everyone should understand the effect of global warming and zero emissions well.",
        E: "Environmentalists are concerned with the green environment."
    },

    jawaban: "B",

    pembahasan: "Frasa pada pilihan B paling sesuai untuk menyatakan kembali gagasan bahwa gerakan peduli lingkungan semakin berkembang di berbagai wilayah dunia."
},

{
    id: 7,
    kode: "SBMPTN/2018/534/85",
    teksId: "LBE_TEKS2",

    pertanyaan: "The false idea that the author may hold about Dockside Green is that ....",

    pilihan: {
        A: "it provides all eco-friendly properties",
        B: "it is a good asset to buy a property in it",
        C: "it encourages all houses to utilize efficient energy",
        D: "it reduces global warming and emissions",
        E: "it is where more natural livings can exist"
    },

    jawaban: "B",

    pembahasan: "Berdasarkan kunci jawaban dalam dokumen, pernyataan yang dianggap sebagai gagasan keliru mengenai Dockside Green adalah pilihan B."
},

{
    id: 8,
    kode: "SBMPTN/2018/534/86",
    teksId: "LBE_TEKS2",

    pertanyaan: "The author organizes the ideas in the passage by ....",

    pilihan: {
        A: "describing a new housing trend and providing a detailed example",
        B: "discussing an environmental issue and providing ways to solve the issue",
        C: "identifying a community problem and discussing possible solutions to the problem",
        D: "explaining an environmentally friendly initiative and discussing the impacts of the initiative",
        E: "establishing a new community initiative that is eco-friendly and explaining the ideas behind the initiative"
    },

    jawaban: "A",

    pembahasan: "Pilihan A tepat karena penulis terlebih dahulu menjelaskan tren eco-communities, kemudian memberikan contoh secara terperinci melalui Dockside Green."
},

{
    id: 9,
    kode: "SBMPTN/2018/534/87",
    teksId: "LBE_TEKS3",

    teks: `The explanation shows that life condition is becoming more and more uncondusive for good-quality life. Therefore, today more people than ever are looking for ways to improve their health, increase energy, reduce stress, restore or enhance functionality, relieve aches and pains, balance emotions, and sharpen mental focus. Because of the demands of modern life, most people want those ways to be relatively simple and not time consuming. If you still have not found something to fit your needs, you may want to consider Chinese healing exercises.

Chinese healing exercises make up a branch of Chinese medicine. It is almost never taught as a separate system of healing. Rather, it is used in many practices you probably recognize. Some are part of the oldest of Chinese medical practices, including acupressure and ruina, a type of Chinese massage therapy. Others have their origins in ancient self-healing or spiritual practices, such as Chinese forms of yoga and meditation. They are routinely taught together with more detailed and complex practices, such as taiji (t'ai chi), qigong (chi gung), and other advanced medical, spiritual, or martial practices. They are intended to prepare a student for those more demanding disciplines. They are also conducted as adjunctive exercises that can make some aspects of the main practices easier to perform. Some sources are less well known in the west, like medical qigong and paidagong. They are tapping and patting techniques used to break up qi blockages.

Qi is life force, and is responsible for all healthy functionality, animation, vitality, emotional balance, and mental clarity. Chinese exercises have a unique positive impact on all those qualities. Chinese healing exercises can amplify the benefits from taiji or qigong if you already have such a practice. In that context, they will open targeted areas of physical or energetic restriction, deepen your sensitivity to qi sensations, and increase qi flow. They root you more securely, thereby improving your overall performance.`,

    pertanyaan: "The author's attitude towards the topic in the passage is ....",

    pilihan: {
        A: "Critical",
        B: "Positive",
        C: "Skeptical",
        D: "Doubtful",
        E: "Realistic"
    },

    jawaban: "B",

    pembahasan: "Penulis menunjukkan sikap positif terhadap Chinese healing exercises. Hal ini terlihat dari penjelasan mengenai berbagai manfaat latihan tersebut bagi kesehatan, keseimbangan emosi, vitalitas, dan kemampuan mental."
},

{
    id: 10,
    kode: "SBMPTN/2018/534/88",
    teksId: "LBE_TEKS3",
    teks: null,

    pertanyaan: "What topic does the paragraph preceding the passage most likely discuss?",

    pilihan: {
        A: "Good-quality life",
        B: "Health improvements",
        C: "Sharpening mental condition",
        D: "Ways to increase body energy",
        E: "Adverse life condition"
    },

    jawaban: "A",

    pembahasan: "Topik yang paling tepat adalah good-quality life karena paragraf pertama membahas kondisi kehidupan dan kebutuhan manusia untuk memperoleh kualitas hidup yang lebih baik."
}
],


PM: [
  {
    id: 1,
    kode: "UTBK 2023/TPS/PM/Gel.1/01",
    teksId: "PM_TEKS1",
    teks: `Tabel data pelayanan masyarakat di Kecamatan X pada Desa A, B, dan C adalah sebagai berikut:

Desa A: Jadwal pelayanan setiap 2 hari sekali, dengan jumlah pasien 20 orang.
Desa B: Jadwal pelayanan setiap 4 hari sekali, dengan jumlah pasien 40 orang.
Desa C: Jadwal pelayanan setiap 7 hari sekali, dengan jumlah pasien 50 orang.

Pada tanggal 1 Juni 2023 dilaksanakan pelayanan masyarakat di Kecamatan X secara bersamaan. Jika pada hari libur nasional dan akhir pekan tetap ada layanan kepada masyarakat di Kecamatan X dan biaya administrasi layanan adalah Rp10.000,00.`,
    pertanyaan: "Kapan semua desa melaksanakan pelayanan secara bersamaan kembali?",
    pilihan: {
      A: "14 Juni 2023",
      B: "15 Juni 2023",
      C: "27 Juni 2023",
      D: "28 Juni 2023",
      E: "29 Juni 2023"
    },
    jawaban: "E",
    pembahasan: "Untuk mengetahui jadwal pelayanan bersamaan, cari KPK dari 2, 4, dan 7. KPK ketiganya adalah 28. Karena pelayanan bersama dimulai pada 1 Juni 2023, maka pelayanan berikutnya berlangsung 28 hari setelahnya, yaitu 29 Juni 2023."
  },
  {
    id: 2,
    kode: "UTBK 2023/TPS/PM/Gel.1/02",
    teksId: "PM_TEKS1",
    teks: null,
    pertanyaan: "Jumlah hari di Kecamatan X tidak ada layanan satu pun pada bulan Juni 2023 adalah ...",
    pilihan: {
      A: "10",
      B: "11",
      C: "12",
      D: "13",
      E: "14"
    },
    jawaban: "D",
    pembahasan: "Desa A melayani setiap 2 hari sekali sebanyak 15 kali. Desa B melayani setiap 4 hari sekali sebanyak 8 kali, tetapi jadwalnya bertepatan dengan Desa A. Desa C melayani setiap 7 hari sekali sebanyak 5 kali. Jadwal Desa A dan C bertepatan setiap 14 hari, sebanyak 3 kali. Jadi, jumlah hari tanpa pelayanan adalah 30 - 15 - 5 + 3 = 13 hari."
  },
  {
    id: 3,
    kode: "UTBK 2023/TPS/PM/Gel.1/03",
    teksId: "PM_TEKS1",
    teks: null,
    pertanyaan: "Jumlah semua pasien yang dilayani selama bulan Juni 2023 adalah ...",
    pilihan: {
      A: "745",
      B: "780",
      C: "870",
      D: "900",
      E: "950"
    },
    jawaban: "C",
    pembahasan: "Desa A melayani 15 kali dengan 20 pasien setiap pelayanan, sehingga 300 pasien. Desa B melayani 8 kali dengan 40 pasien, sehingga 320 pasien. Desa C melayani 5 kali dengan 50 pasien, sehingga 250 pasien. Total seluruh pasien adalah 300 + 320 + 250 = 870 pasien."
  },

  {
    id: 4,
    kode: "UTBK 2023/TPS/PM/Gel.1/04",
    teksId: "PM_TEKS1",
    teks: null,
    pertanyaan: "Jika di Desa C maksimum melayani pasien 25 orang pada bulan Juni, berapa maksimum biaya administrasi seluruh desa pada bulan Juni?",
    pilihan: {
      A: "Rp7.000.000,00",
      B: "Rp7.250.000,00",
      C: "Rp7.450.000,00",
      D: "Rp7.500.000,00",
      E: "Rp8.000.000,00"
    },
    jawaban: "C",
    pembahasan: "Desa A: 15 kali × 20 pasien = 300 pasien. Desa B: 8 kali × 40 pasien = 320 pasien. Desa C: 5 kali × 25 pasien = 125 pasien. Total pasien = 300 + 320 + 125 = 745 pasien. Biaya administrasi = 745 × Rp10.000,00 = Rp7.450.000,00."
  },
  {
    id: 5,
    kode: "UTBK 2023/TPS/PM/Gel.1/01",
    teksId: "PM_TEKS2",
    teks: `Toko Maju menerima kiriman minyak goreng dari tiga pemasok dengan jadwal sebagai berikut:

Merek A: Setiap 3 hari sekali, sebanyak 10 liter.
Merek B: Setiap 4 hari sekali, sebanyak 15 liter.
Merek C: Setiap x hari sekali, sebanyak 20 liter.

Pada tanggal 1 April 2023, Toko Maju menerima kiriman minyak goreng merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
    pertanyaan: "Jika Toko Maju akan menerima kiriman minyak goreng merek A, B, dan C pada hari yang sama untuk ke-11 kalinya pada 120 hari setelah 1 April 2023, nilai x adalah ...",
    pilihan: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
      E: "9"
    },
    jawaban: "B",
    pembahasan: "Dari kebersamaan pertama hingga kebersamaan ke-11 terdapat 10 kali jarak perulangan. Jarak setiap kebersamaan adalah 120 ÷ 10 = 12 hari. Dengan demikian, KPK (3, 4, x) = 12. Nilai x yang sesuai adalah 6."
  },

    {
      id: 6,
      kode: "UTBK 2023/TPS/PM/Gel.1/02",
      teksId: "PM_TEKS2",
      teks: `Toko Maju menerima kiriman minyak goreng dari tiga pemasok untuk dijual kembali dengan jadwal sebagai berikut.

Merek A: Setiap 3 hari sekali, sebanyak 10 liter.
Merek B: Setiap 4 hari sekali, sebanyak 15 liter.
Merek C: Setiap x hari sekali, sebanyak 20 liter.

Pada tanggal 1 April 2023, Toko Maju menerima kiriman minyak goreng merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      pertanyaan: "Volume minyak goreng merek A dan B yang diterima Toko Maju pada bulan April 2023 adalah ... liter.",
      pilihan: {
        A: "120",
        B: "150",
        C: "180",
        D: "220",
        E: "245"
      },
      jawaban: "D",
      pembahasan: "Merek A dikirim setiap 3 hari sekali. Jumlah pengiriman selama April = 30 ÷ 3 = 10 kali. Volume A = 10 × 10 = 100 liter. Merek B dikirim setiap 4 hari sekali, sehingga jumlah pengiriman = 30 ÷ 4 dibulatkan ke atas = 8 kali. Volume B = 8 × 15 = 120 liter. Total volume = 100 + 120 = 220 liter."
    },
    {
      id: 7,
      kode: "UTBK 2023/TPS/PM/Gel.1/03",
      teksId: "PM_TEKS2",
      teks: `Toko Maju menerima kiriman minyak goreng dari tiga pemasok untuk dijual kembali dengan jadwal sebagai berikut.

Merek A: Setiap 3 hari sekali, sebanyak 10 liter.
Merek B: Setiap 4 hari sekali, sebanyak 15 liter.
Merek C: Setiap x hari sekali, sebanyak 20 liter.

Pada tanggal 1 April 2023, Toko Maju menerima kiriman minyak goreng merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      pertanyaan: "Jumlah hari Toko Maju tidak menerima satu pun kiriman minyak goreng merek A ataupun B pada bulan April 2023 adalah ...",
      pilihan: {
        A: "16",
        B: "15",
        C: "14",
        D: "13",
        E: "12"
      },
      jawaban: "B",
      pembahasan: "Merek A dikirim sebanyak 10 kali dan merek B sebanyak 8 kali. Pengiriman A dan B bersamaan setiap KPK (3, 4) = 12 hari, yaitu sebanyak 3 kali. Jumlah hari yang memiliki pengiriman A atau B = 10 + 8 − 3 = 15 hari. Hari tanpa pengiriman = 30 − 15 = 15 hari."
    },
    {
      id: 8,
      kode: "UTBK 2023/TPS/PM/Gel.1/04",
      teksId: "PM_TEKS2",
      teks: `Toko Maju menerima kiriman minyak goreng dari tiga pemasok untuk dijual kembali dengan jadwal sebagai berikut.

Merek A: Setiap 3 hari sekali, sebanyak 10 liter.
Merek B: Setiap 4 hari sekali, sebanyak 15 liter.
Merek C: Setiap x hari sekali, sebanyak 20 liter.

Pada tanggal 1 April 2023, Toko Maju menerima kiriman minyak goreng merek A, B, dan C secara bersamaan untuk pertama kalinya.`,
      pertanyaan: "Mulai 1 Mei 2023, volume minyak goreng merek A ditambah menjadi 15 liter pada setiap kali pengiriman. Selisih volume minyak goreng merek A yang diterima Toko Maju pada bulan Mei dan April adalah ...",
      pilihan: {
        A: "50",
        B: "55",
        C: "65",
        D: "70",
        E: "75"
      },
      jawaban: "C",
      pembahasan: "Bulan April: jumlah pengiriman A = 30 ÷ 3 = 10 kali. Volume = 10 × 10 = 100 liter. Bulan Mei: jumlah pengiriman = 31 ÷ 3 dibulatkan ke atas = 11 kali. Volume = 11 × 15 = 165 liter. Selisih volume = 165 − 100 = 65 liter."
    },
    {
      id: 9,
      kode: "UTBK 2023/TPS/PM/Gel.1/56",
      teksId: "PM_TEKS3",
      teks: `Dinas Kebersihan Kota Jakarta mempunyai tiga truk pengangkut sampah dengan jadwal pengangkutan dan volume sampah sebagai berikut.

Truk A: Setiap 2 hari sekali, sebanyak 5 m³.
Truk B: Setiap 3 hari sekali, sebanyak 7 m³.
Truk C: Setiap 5 hari sekali, sebanyak 10 m³.

Ketiga truk sampah tersebut mulai dioperasikan pada tanggal 1 Maret 2023.`,
      pertanyaan: "Total volume sampah yang akan terangkut pada bulan Maret 2023 adalah ... m³.",
      pilihan: {
        A: "205",
        B: "210",
        C: "212",
        D: "215",
        E: "227"
      },
      jawaban: "E",
      pembahasan: "Truk A beroperasi 16 hari, sehingga volumenya 16 × 5 = 80 m³. Truk B beroperasi 11 hari, sehingga volumenya 11 × 7 = 77 m³. Truk C beroperasi 7 hari, sehingga volumenya 7 × 10 = 70 m³. Total volume sampah = 80 + 77 + 70 = 227 m³."
    },
    {
      id: 10,
      kode: "UTBK 2023/TPS/PM/Gel.1/57",
      teksId: "PM_TEKS3",
      teks: `Dinas Kebersihan Kota Jakarta mempunyai tiga truk pengangkut sampah dengan jadwal pengangkutan sebagai berikut.

Truk A: Setiap 2 hari sekali.
Truk B: Setiap 3 hari sekali.
Truk C: Setiap 5 hari sekali.

Ketiga truk mulai dioperasikan pada tanggal 1 Maret 2023.`,
      pertanyaan: "Selama bulan Maret 2023, Dinas Kebersihan Kota Jakarta tidak menjadwalkan pengangkutan sampah sebanyak ... hari.",
      pilihan: {
        A: "5 hari",
        B: "6 hari",
        C: "7 hari",
        D: "8 hari",
        E: "9 hari"
      },
      jawaban: "D",
      pembahasan: "Tanggal yang tidak memiliki jadwal pengangkutan adalah 2, 8, 12, 14, 18, 20, 24, dan 30 Maret. Jumlahnya adalah 8 hari."
    }
  ]
};

