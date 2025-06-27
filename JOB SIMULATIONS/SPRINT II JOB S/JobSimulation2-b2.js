function updateClock() {
  let dateTime = new Date();
  let hours = dateTime.getHours();
  let minutes = formatZero(dateTime.getMinutes());
  let seconds = formatZero(dateTime.getSeconds());
  let periodElement = document.getElementById('period');

  if (hours > 12) {
    hours = hours - 12;
    periodElement.innerHTML = 'PM';
  } else {
    periodElement.innerHTML = 'AM';
  }

  document.getElementById('hour').innerHTML = formatZero(hours);
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;
}

function formatZero(num) {
  return num < 10 ? '0' + num : num;
}

setInterval(updateClock, 500);