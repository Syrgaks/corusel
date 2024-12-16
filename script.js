const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].getBoundingClientRect().width;

    // Сдвиг влево
    currentIndex = Math.max(currentIndex - 1, 0);
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].getBoundingClientRect().width;

    // Сдвиг вправо
    currentIndex = Math.min(currentIndex + 1, items.length - 4);
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

// Изменение цвета кнопки при нажатии (работает на ползунках)
prevBtn.addEventListener('mousedown', () => {
    prevBtn.style.backgroundColor = '#ff6b6b';  // Цвет при нажатии
});

nextBtn.addEventListener('mousedown', () => {
    nextBtn.style.backgroundColor = '#ff6b6b';  // Цвет при нажатии
});

// Восстановление цвета кнопки после отпускания
prevBtn.addEventListener('mouseup', () => {
    prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

nextBtn.addEventListener('mouseup', () => {
    nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});
