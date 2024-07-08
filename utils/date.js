export const formatTime = (time) => {
  let millieseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / 60000) % 60;

  if (millieseconds < 10) {
    millieseconds = "0" + millieseconds;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds + ":" + millieseconds;
};
