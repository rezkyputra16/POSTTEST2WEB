// Mendapatkan data dari form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nama = document.querySelector('#nama').value;
  const email = document.querySelector('#email').value;
  const jenisKelamin = document.querySelector('#jenis-kelamin').value;
  const pendidikanTerakhir = document.querySelector('input[name="sama"]:checked').id;
  const alamat = document.querySelector('#alamat').value;
  const genreBuku = [];
  document.querySelectorAll('input[name="buku"]:checked').forEach(function(checkbox) {
    genreBuku.push(checkbox.value);
  });
  

  // Menyimpan data ke session storage
  const member = {
    nama: nama,
    email: email,
    jenisKelamin: jenisKelamin,
    pendidikanTerakhir: pendidikanTerakhir,
    alamat: alamat,
    genreBuku: genreBuku
  };
  const memberArray = JSON.parse(sessionStorage.getItem('members')) || [];
  memberArray.push(member);
  sessionStorage.setItem('members', JSON.stringify(memberArray));

  // Redirect ke halaman lain
  alert('Pendaftaran berhasil!')
  window.location.href = 'profil.html';
});


