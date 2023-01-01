const targetTime = new Date("March 18, 2023 09:30:00");  // Set the target time
let timeRemaining = targetTime - Date.now();  // Calculate the initial time remaining

// Update the countdown every 1000 milliseconds (1 second)
const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Calculate the time remaining
  timeRemaining = targetTime - Date.now();

  // If the countdown is complete, stop the interval and display a message
  if (timeRemaining < 0) {
    clearInterval(interval);
    console.log("Countdown complete!");
    return;
  }

  // Calculate the number of days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining
  var p = document.getElementById("tid");
  p.innerHTML = days + " dagar, " + hours + " timar, " + minutes + " minutt, og " + seconds + " sekund";
  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
}
