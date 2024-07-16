document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    const validEmail = '123@gmail.com';
    const validPassword = '62jtanyg';

    if (email === validEmail && password === validPassword) {
        error.textContent = '';
        alert('Login successful!');
        window.location.href = 'system.html';
        // Redirect to another page or perform other actions here
    } else {
        error.textContent = 'Invalid email or password';
    }
});
