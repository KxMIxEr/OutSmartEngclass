
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('loginError');
    const correctPassword = '67219010004'; // เปลี่ยนรหัสผ่านที่นี่

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (passwordInput.value === correctPassword) {
            errorDiv.style.display = 'none';
            sessionStorage.setItem('isAuth', '1');
            window.location.href = 'Home.html'; // ไปหน้าหลัก
        } else {
            errorDiv.textContent = 'Not Kee Yed!';
            errorDiv.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
});



