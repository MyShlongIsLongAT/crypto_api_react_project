import moment from "moment";

export let digitLimiter = (number) => {
  let limitedNumber = "";
  let numberArray = Array.from(number);
  for (let i = 0; i < 7; i++) {
    limitedNumber += numberArray[i].toString();
  }
  return limitedNumber;
};

export let timeOneDay = (hoursPerDay) => {
  let time = [];
  var formattedTime;
  for (let i = 0; i < hoursPerDay; i++) {
    formattedTime = moment().subtract(i, "hours").format("hA"); //give the time in format X AM/PM
    time.unshift(formattedTime); //add to beginning of array
  }
  return(time); //do this for all 24 hours
};
