const btnSubmit = document.getElementById('btnSubmit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnSubmit.onclick = async () => {
  const response = await axios.post('http://localhost:3001/auth/register', {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  location.href = '/';
}