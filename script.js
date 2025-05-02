window.addEventListener('scroll', function() {
    const button = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
