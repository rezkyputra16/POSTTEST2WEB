// Ambil data dari Session Storage
const memberData = JSON.parse(sessionStorage.getItem('members'));

// Tampilkan data pada halaman profil.html
const memberDataDiv = document.querySelector('#member-data');
if (memberData) {
  let html = '';
  memberData.forEach(function(member, index) {
    html += `
      <div class="member">
        <p><strong>Nama :</strong> ${member.nama}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <p><strong>Jenis Kelamin:</strong> ${member.jenisKelamin}</p>
        <p><strong>Pendidikan Terakhir:</strong> ${member.pendidikanTerakhir}</p>
        <p><strong>Alamat:</strong> ${member.alamat}</p>
        <p><strong>Genre Buku:</strong> ${member.genreBuku.join(', ')}</p>
      </div>
    `;
  });
  memberDataDiv.innerHTML = html;
} else {
  memberDataDiv.innerHTML = '<p>Tidak ada data member.</p>';
}

function logout() {
    // hapus informasi login dari session storage atau cookie
    sessionStorage.removeItem('user');
    alert('Berhasil Logout')
    // arahkan pengguna kembali ke halaman login
    window.location.href = 'index.html';
  }
  

