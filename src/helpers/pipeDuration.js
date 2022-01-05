export const convertMinutesIntoHours = (n) => {
  const num = n;
  const hours = num / 60;
  let roundedHours = Math.floor(hours);
  const minutes = (hours - roundedHours) * 60;
  let roundedMinutes = Math.round(minutes);
  if (roundedHours < 10) {
    roundedHours = `0${roundedHours}`;
  }
  if (roundedMinutes < 10) {
    roundedMinutes = `0${roundedMinutes}`;
  }
  return `${roundedHours}:${roundedMinutes}`;
};
