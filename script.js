window.onload = function () {
    // Memainkan suara alarm (bisa diatur jika ingin menambahkan efek suara)
    var audio = new Audio('https://www.soundjay.com/misc/sounds/robot-blip-2.mp3');
    audio.loop = true;
    audio.play();

    // Membuat halaman bergerak-gerak secara acak
    function movePage() {
        window.moveBy(Math.random() * 10 - 5, Math.random() * 10 - 5);
    }

    setInterval(movePage, 100); // Ulangi setiap 100ms
};
