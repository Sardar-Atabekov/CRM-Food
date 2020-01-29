import moment from "moment";
import "moment/locale/ru";
function Time(date) {
  let stillUtc = moment.utc(date);
  let time = moment(stillUtc)
    .local()
    .format("L");
  return time;
}

function TimeHours(date) {
  let stillUtc = moment.utc(date);
  let time = moment(stillUtc)
    .local()
    .format("HH:mm");
  return time;
}

function TimeDate(date) {
  let stillUtc = moment.utc(date);
  let time = moment(stillUtc)
    .local()
    .format("DD.MM.YYYY, HH:mm");
  return time;
}

function TodayDate() {
  let stillUtc = moment.utc();
  let time = moment(stillUtc)
    .local()
    .format("dddd, D MMMM");
  let firstSymbol = time[0].toUpperCase(),
    symbol = time.substring(1, time.length);
  time = firstSymbol.concat(symbol);
  return time;
}

export { Time, TimeHours, TimeDate, TodayDate };
