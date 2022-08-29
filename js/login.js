const btnSubmit = document.getElementById('btnSubmit');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnSubmit.onclick = async () => {
  const response = await axios.post('http://localhost:3001/auth/login', {
    email: email.value,
    password: password.value,
  });

  localStorage.setItem('token', response.data.token);
  location.href = '/list.html';
}