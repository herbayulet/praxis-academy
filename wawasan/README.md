1. Ruang lingkup software engineering sebagai berikut:

- software Requirements berhubungan dengan spesifikasi kebutuhan dan persyaratan perangkat lunak
- software desain mencakup proses penampilan arsitektur, komponen, antar muka, dan karakteristik lain dari perangkat lunak
- software construction berhubungan dengan detail pengembangan perangkat lunak, termasuk algoritma, pengkodean, pengujian dan pencarian kesalahan
- software testing meliputi pengujian pada keseluruhan perilaku perangkat lunak
- software maintenance mencakup upaya-upaya perawatan ketika perangkat lunak telah dioperasikan
- software configuration management berhubungan dengan usaha perubahan konfigurasi perangkat lunak untuk memenuhi kebutuhan tertentu

2. Keterkaitan software engineering dengan SCM - Software Configuration Management:

- SCM diperlukan guna untuk melacak dan mengendalikan perubahan dalam perangkat lunak sehingga software engineer dapat menentukan apa yang diubah dan siapa yang mengubahnya. Praktik SCM mencakup kontrol revisi dan pembentukan garis dasar.

3. Keterkaitan SCM dengan Version Control dan Distributed Version Control:

- SCM sendiri merupakan aktivitas untuk Revision Control yang mana dalam hal ini dibantu dengan Version Control (VC) dan VC sendiri salah satunya adalah dengan cara Distributed Version Control, yang mana mirip dengan sistem peer-to-peer, sinkronisasi dilakukan dengan mempertukarkan patches-set antar peer. Contoh: git, mercurial, baazar dan lain-lain

4. Git dan keterkaitannya dengan Distributed Version Control:

- Git merupakan VCS dengan kategori DRCS (Distributed Revision Control System) yang awalnya dikembangkan oleh Linus Trovalds untuk pengembangan kernel Linux. Git merupakan proyek opensource dan dapat diperoleh di http://www.git-scm.org.

5. Men-setup Git - Chapter 1 - Getting Started, pastikan juga bahwa git telah terinstall
   di terminal kita dengan mengetik command line sebagai berikut:

- sudo apt-get install git-core
- sudo apt-get install git-gui
- sudo apt-get install git-doc

6. Membuat account GitHub serta membuat repo di GitHub.
   Membuat akun:

- Hal pertama yang perlu di lakukan adalah membuat akun pengguna gratis. Cukup dengan mengunjungi https://github.com, pilih nama pengguna yang belum diambil, sediakan alamat surel dan kata sandi, dan klik tombol “Sign up for GitHub” hijau yang besar.
- Selanjutnya, jika Anda mau, Anda bisa mengganti avatar yang dihasilkan untuk Anda dengan gambar pilihan Anda. Pertama buka tab “Profil” (di atas tab Kunci SSH) dan klik “Upload new picture”.
- Cara GitHub memetakan Git commits Anda ke pengguna Anda adalah melalui alamat surel. Jika Anda menggunakan beberapa alamat surel dalam commits Anda dan Anda ingin GitHub menautkannya dengan benar, Anda perlu menambahkan semua alamat surel yang Anda gunakan ke bagian surel pada bagian admin.

Membuat Repo:

- Di sudut kanan atas halaman mana pun, gunakan menu drop-down, dan pilih repositori baru.
- Secara opsional, untuk membuat repositori dengan struktur direktori dan file dari repositori yang ada, gunakan drop-down Pilih template dan pilih repositori template. Anda akan melihat repositori template yang dimiliki oleh Anda dan organisasi tempat Anda menjadi anggota atau yang telah Anda gunakan sebelumnya. Untuk informasi selengkapnya, lihat "Membuat repositori dari templat."
- Secara opsional, jika Anda memilih untuk menggunakan template, untuk menyertakan struktur direktori dan file dari semua branch dalam template, dan bukan hanya branch default, pilih Sertakan semua branch.
- Di drop-down akun, pilih akun yang ingin Anda buat repositorinya.
- Ketik nama untuk repositori Anda, dan deskripsi opsional.
- Pilih visibilitas repositori. Untuk informasi lebih lanjut, lihat "Tentang repositori."
- Jika tidak menggunakan template, ada item opsional yang dapat Anda isi sebelumnya dengan repositori Anda. Jika Anda mengimpor repositori yang ada ke GitHub, jangan memilih salah satu opsi ini, karena Anda dapat memperkenalkan konflik gabungan. Anda dapat menambahkan atau membuat file baru menggunakan antarmuka pengguna atau memilih untuk menambahkan file baru menggunakan baris perintah nanti. Untuk informasi selengkapnya, lihat "Mengimpor repositori Git menggunakan baris perintah," "Menambahkan file ke repositori," dan "Mengatasi konflik gabungan." Anda dapat membuat README, yang merupakan dokumen yang menjelaskan proyek Anda. Untuk informasi lebih lanjut, lihat "Tentang READMEs." Anda dapat membuat file.gitignore, yang merupakan seperangkat aturan abaikan. Untuk informasi lebih lanjut, lihat "Mengabaikan file." Anda dapat memilih untuk menambahkan lisensi perangkat lunak untuk proyek Anda. Untuk informasi selengkapnya, lihat "Melisensikan repositori."
- Secara opsional, jika akun pribadi atau organisasi tempat Anda membuat menggunakan Aplikasi GitHub apa pun dari GitHub Marketplace, pilih aplikasi apa pun yang ingin Anda gunakan di repositori.
- Click "Create Repository"
-
