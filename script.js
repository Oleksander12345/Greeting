document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const envelopeOpen = document.getElementById("envelope-open");
    const videoContainer = document.getElementById("video-container");
    const confettiContainer = document.getElementById("confetti-container");
    const heartsContainer = document.getElementById("hearts-container");

    // Додавання анімації конфеті
    function createConfetti() {
        if (!confettiContainer) {
            console.error("Елемент '#confetti-container' не знайдено!");
            return;
        }
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            // Випадкові кольори
            const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            // Випадкові розташування та розміри
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.width = Math.random() * 10 + 5 + "px";
            confetti.style.height = Math.random() * 10 + 5 + "px";
            confetti.style.animationDelay = Math.random() * 3 + "s";
            confettiContainer.appendChild(confetti);
        }
    }

    // Додавання сердець
    function createSideHearts() {
        if (!heartsContainer) {
            console.error("Елемент '#hearts-container' не знайдено!");
            return;
        }
        const heartsPerSide = 20; // Кількість сердець на кожну сторону
    
        // Ліва сторона
        for (let i = 0; i < heartsPerSide; i++) {
            const heart = document.createElement("i");
            heart.classList.add("fa-solid", "fa-heart", "heart");
    
            // Випадкове вертикальне розташування
            heart.style.top = Math.random() * 100 + "vh";
    
            // Ліва сторона
            heart.style.left = "2vw";
    
            // Випадковий розмір і затримка
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            heart.style.animationDelay = Math.random() * 5 + "s";
            heartsContainer.appendChild(heart);
        }
    
        // Права сторона
        for (let i = 0; i < heartsPerSide; i++) {
            const heart = document.createElement("i");
            heart.classList.add("fa-solid", "fa-heart", "heart");
    
            // Випадкове вертикальне розташування
            heart.style.top = Math.random() * 100 + "vh";
    
            // Права сторона
            heart.style.left = "95vw";
    
            // Випадковий розмір і затримка
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            heart.style.animationDelay = Math.random() * 5 + "s";
            heartsContainer.appendChild(heart);
        }
    }
    function createSideBalloons() {
        if (!heartsContainer) {
            console.error("Елемент '#hearts-container' не знайдено!");
            return;
        }
    
        const balloonColors = [
            "#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#d82428", "#f9844a",
            "#9b5de5", "#00c1d4", "#ff009d"
        ]; // Можливі кольори кульок
    
        const balloonsPerSide = 20; // Кількість кульок на кожну сторону
    
        // Функція для вибору випадкового кольору
        function getRandomColor() {
            return balloonColors[Math.floor(Math.random() * balloonColors.length)];
        }
    
        // Ліва сторона (ширший діапазон)
        for (let i = 0; i < balloonsPerSide; i++) {
            const balloon = document.createElement("div");
            balloon.classList.add("balloon");
    
            // Випадкове вертикальне розташування
            balloon.style.top = Math.random() * 100 + "vh";
    
            // Збільшуємо діапазон для лівої сторони
            balloon.style.left = Math.random() * 20 + "vw"; // Від 0vw до 25vw
    
            // Випадковий колір
            balloon.style.background = `radial-gradient(circle at 40% 30%, ${getRandomColor()}, ${getRandomColor()})`;
    
            // Додаткові стилі
            balloon.style.animationDelay = Math.random() * 5 + "s";
            balloon.style.width = Math.random() * 20 + 40 + "px"; // Випадковий розмір
            balloon.style.height = Math.random() * 20 + 60 + "px";
    
            heartsContainer.appendChild(balloon);
        }
    
        // Права сторона (ширший діапазон)
        for (let i = 0; i < balloonsPerSide; i++) {
            const balloon = document.createElement("div");
            balloon.classList.add("balloon");
    
            // Випадкове вертикальне розташування
            balloon.style.top = Math.random() * 100 + "vh";
    
            // Збільшуємо діапазон для правої сторони
            balloon.style.left = Math.random() * 15 + 75 + "vw"; // Від 75vw до 100vw
    
            // Випадковий колір
            balloon.style.background = `radial-gradient(circle at 40% 30%, ${getRandomColor()}, ${getRandomColor()})`;
    
            // Додаткові стилі
            balloon.style.animationDelay = Math.random() * 5 + "s";
            balloon.style.width = Math.random() * 20 + 40 + "px"; // Випадковий розмір
            balloon.style.height = Math.random() * 20 + 60 + "px";
    
            heartsContainer.appendChild(balloon);
        }
    }
    
    // Обробник натискання на конверт
    envelope.addEventListener("click", () => {
        envelope.classList.add("hidden"); // Приховуємо закритий конверт
        envelopeOpen.classList.remove("hidden"); // Показуємо відкритий конверт
        videoContainer.classList.remove("hidden"); // Показуємо контейнер з відео

        // Запускаємо анімації
        createConfetti();
        createSideHearts();
        createSideBalloons();
    });
});
