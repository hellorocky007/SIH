document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const mobileLoginForm = document.getElementById('mobile-login-form');
    const googleLoginButton = document.getElementById('google-login');
    const facebookLoginButton = document.getElementById('facebook-login');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can implement your login logic here.
        // For this example, let's assume the correct username is "user" and the correct password is "password".
        if (username === 'user' && password === 'password') {
            // Redirect to a success page or perform any other actions you need.
            alert('Login successful!');
        } else {
            errorMessage.style.display = 'block';
        }
    });

    mobileLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const mobileNumber = document.getElementById('mobile-number').value;

        // You can implement mobile number login logic here.
        // For this example, let's assume the correct mobile number is "1234567890".
        if (mobileNumber === '1234567890') {
            // Redirect to a success page or perform any other actions you need.
            alert('Login with mobile number successful!');
        } else {
            errorMessage.style.display = 'block';
        }
    });

    googleLoginButton.addEventListener('click', function () {
        // You can implement Google login logic here, such as using OAuth.
        // Redirect to the Google login page or perform the necessary actions.
        alert('Redirecting to Google login...');
    });

    facebookLoginButton.addEventListener('click', function () {
        // You can implement Facebook login logic here, such as using OAuth.
        // Redirect to the Facebook login page or perform the necessary actions.
        alert('Redirecting to Facebook login...');
    });
});
