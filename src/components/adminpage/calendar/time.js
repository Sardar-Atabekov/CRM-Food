import moment from "moment";
import  "moment/locale/ru";
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
    .format("LT");
  return time;
}

function TimeDate(date) {
  let stillUtc = moment.utc(date);
  let time = moment(stillUtc)
    .local()
    .format("DD.MM.YYYY, h:mm");
  return time;
}

export { Time, TimeHours, TimeDate };
