const sumDate = (data, max, extra = null) => {
  let h = 0;
  let m = 0;
  let s = 0;
  data.forEach((task) => {
    if (task.seconds === null) {
      return;
    }
    h += task.hours;
    m += task.minutes;
    s += task.seconds;
  });

  h *= 3600;
  m *= 60;

  const time = h + m + s + extra;
  const maxT = 3600 * max;
  return time / maxT;
};

export default sumDate;
