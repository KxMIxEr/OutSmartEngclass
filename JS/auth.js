// Redirect to index.html if not authenticated
(function() {
    // ใช้ sessionStorage เพื่อจำสถานะ index
    if (window.location.pathname.endsWith('index.html')) return;
    if (!sessionStorage.getItem('isAuth')) {
        window.location.replace('index.html');
    }
})();
