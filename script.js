function copyToClipboard() {
    const promptText = document.getElementById('prompt-text').innerText;
    
    navigator.clipboard.writeText(promptText).then(() => {
        showToast();
    }).catch(err => {
        console.error('복사 실패:', err);
        // Fallback or alert if needed
    });
}

function showToast() {
    const toast = document.getElementById('copy-message');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
