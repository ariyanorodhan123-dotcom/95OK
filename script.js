function showTab(tab) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (tab === 0) {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
  }
}

function handleLogin() {
  const username = document.getElementById('username').value.trim();
  
  if (username === "") {
    alert("Please enter your username");
    return;
  }

  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('success-screen').classList.remove('hidden');
}

function handleRegister() {
  alert("Registration Successful!\n\nএখন Login করতে পারবেন।");
  showTab(0);
}

function resetToLogin() {
  document.getElementById('success-screen').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

// ডিফল্টভাবে লগইন ট্যাব দেখাবে
showTab(0);
