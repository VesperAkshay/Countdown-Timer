document.addEventListener("DOMContentLoaded", function () {
    const eventNameInput = document.getElementById("eventName");
    const eventDateInput = document.getElementById("eventDate");
    const eventTimeInput = document.getElementById("eventTime");
    const startButton = document.getElementById("startButton");
    const countdown = document.getElementById("countdown");
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");
    const warning = document.getElementById("warning");

    // Function to start the countdown
    function startCountdown() {
        // Validate inputs (you can implement this part)
        
        // Calculate the target date and time
        // Example: '2023-12-31T23:59:59'
        const targetDate = `${eventDateInput.value}T${eventTimeInput.value || '00:00'}`;
        const targetTime = new Date(targetDate).getTime();
        
        // Calculate the remaining time in milliseconds
        let countdownInterval = setInterval(function () {
            const now = new Date().getTime();
            const remainingTime = targetTime - now;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                daysSpan.innerText = hoursSpan.innerText = minutesSpan.innerText = secondsSpan.innerText = "00";
                alert("Event has started!");
            } else {
                const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                daysSpan.innerText = days < 10 ? `0${days}` : days;
                hoursSpan.innerText = hours < 10 ? `0${hours}` : hours;
                minutesSpan.innerText = minutes < 10 ? `0${minutes}` : minutes;
                secondsSpan.innerText = seconds < 10 ? `0${seconds}` : seconds;
            }
        }, 1000);
    }

    // Event listener for the Start button
    startButton.addEventListener("click", function () {
        // Validate and start countdown
        startCountdown();
    });
});
