// mendapatkan elemen form pada halaman registrasi
const formRegister = document.querySelector('.form-wrapper.sign-up form');

// ketika form registrasi disubmit
formRegister.addEventListener('submit', (event) => {
  event.preventDefault(); // mencegah form submit

  // mendapatkan nilai input dari elemen form
  const username = formRegister.querySelector('input[type="text"]').value;
  const email = formRegister.querySelector('input[type="email"]').value;
  const password = formRegister.querySelector('input[type="password"]').value;

  // cek apakah data sudah terdaftar sebelumnya
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  const isUserExist = registeredUsers.some(user => user.username === username || user.email === email);
  if (isUserExist) {
    alert('Username or Email already registered!');
    return;
  }

  // menambahkan data baru ke local storage
  registeredUsers.push({ username, email, password });
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

  alert('Registration successful');

    // Mengosongkan input
  formRegister.querySelector('input[type="text"]').value = '';
  formRegister.querySelector('input[type="email"]').value = '';
  formRegister.querySelector('input[type="password"]').value = '';
});

// mendapatkan elemen form pada halaman login
const formLogin = document.querySelector('.form-wrapper.sign-in form');

// ketika form login disubmit
formLogin.addEventListener('submit', (event) => {
  event.preventDefault(); // mencegah form submit

  // mendapatkan nilai input dari elemen form
  const username = formLogin.querySelector('input[type="text"]').value;
  const password = formLogin.querySelector('input[type="password"]').value;

  // mendapatkan data user dari local storage
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  const user = registeredUsers.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Login successful');
    
    window.location.href = 'posttest2.html';
    // melakukan redirect ke halaman dashboard atau halaman lainnya
  } else {
    alert('Invalid credentials');
  }
});
