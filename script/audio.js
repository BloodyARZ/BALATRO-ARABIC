const musicToggle = document.getElementById('musicToggle');
const audioPlayer = document.getElementById('audioPlayer');

// Play music by default when the page loads
window.addEventListener('load', function () {
    audioPlayer.play().then(() => {
        musicToggle.textContent = 'إيقاف';
    }).catch(error => {
        console.error('Audio play error:', error);
    });
});

// Handle music toggle button click
musicToggle.addEventListener('click', function () {
    if (audioPlayer.paused) {
        musicToggle.textContent = 'تشغيل...';
        audioPlayer.play().then(() => {
            setTimeout(() => {
                musicToggle.textContent = 'إيقاف';
            }, 300); // delay for nicer effect
        }).catch(error => {
            musicToggle.textContent = 'تشغيل';
            console.error('Audio play error:', error);
        });
    } else {
        musicToggle.textContent = 'إيقاف...';
        audioPlayer.pause();
        setTimeout(() => {
            musicToggle.textContent = 'تشغيل';
        }, 300);
    }
});
