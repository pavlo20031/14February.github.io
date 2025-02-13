document.getElementById("surpriseButton").addEventListener("click", function() {
    const container = document.querySelector('.flowers');
    container.innerHTML = '';  

    // Додаємо квіти
    for (let i = 0; i < 10; i++) {
        let flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.top = `${Math.random() * 200}px`;
        flower.style.left = `${Math.random() * 90}%`;
        container.appendChild(flower);
    }

    // Запускаємо музику, якщо вона ще не грає
    let audio = document.getElementById("backgroundMusic");
    if (audio.paused) {
        audio.play().catch(error => console.log("Автоматичне відтворення заблоковано: " + error));
    }
});