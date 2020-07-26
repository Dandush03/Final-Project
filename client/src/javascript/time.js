const time = (startingTime) => {
  const time = new Date(startingTime);
  const now = new Date();
  const ms = now - time;
  const hrs = Math.floor((ms / 60000) / 60);
  const tempMin = Math.floor((ms / 60000) % 60);
  const min = tempMin.toString().length === 1 ? `0${tempMin}` : tempMin;
  const tempSec = Math.floor((ms / 1000) % 60);
  const sec = tempSec.toString().length === 1 ? `0${tempSec}` : tempSec;
  return `${hrs}:${min}:${sec}`;
};

export default time;
