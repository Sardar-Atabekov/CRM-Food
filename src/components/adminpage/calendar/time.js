function Time(data) {
  let string = new Date(data).toLocaleTimeString("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
  let firstSymbol = string[0].toUpperCase(),
        symbol =string.substring(1, string.length),
    time = firstSymbol.concat(symbol);
  console.log(time);
  return time;
}



export default Time;

