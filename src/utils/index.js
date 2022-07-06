const formatTime = (time) => {
  if (time < 60) {
    return `${time} Detik`;
  } else {
    return Math.floor(time / 60) + " Menit " + (time % 60) + " Detik";
  }
};

export { formatTime };
