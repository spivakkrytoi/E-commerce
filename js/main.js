// Встановлюємо початкову тривалість таймера (7 днів у мілісекундах)
const initialDuration = 7 * 24 * 60 * 60 * 1000;

// Функція для запуску таймера
function startTimer() {
  const startTime = Date.now(); // Поточний час
  const endTime = startTime + initialDuration; // Час закінчення

  function updateTimer() {
    const currentTime = Date.now();
    const timeDifference = endTime - currentTime;

    if (timeDifference <= 0) {
      // Якщо час вичерпався, запускаємо таймер заново
      startTimer();
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }

  // Оновлюємо таймер кожну секунду
  setInterval(updateTimer, 1000);

  // Ініціалізуємо таймер відразу
  updateTimer();
}
// Запускаємо таймер
startTimer();
