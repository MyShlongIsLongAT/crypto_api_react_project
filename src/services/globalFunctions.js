import moment from "moment";

export let digitLimiter = (number) => {
  let limitedNumber = "";
  let numberArray = Array.from(number);
  for (let i = 0; i < 8; i++) {
    if(numberArray.length <= i){
      return limitedNumber;
    }
    limitedNumber += numberArray[i];
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

export let checkChange = (change) =>{
  let changeAsArray = [...change];
  if(changeAsArray[0]==='-'){
      return false;
  }
  return true;
}

export let addPlus = (changeValue) =>{
  let changeAsArray = [...changeValue];
  let checkedValue = changeValue;
  if(changeAsArray[0]!=='-'){
    changeAsArray.unshift("+");
    checkedValue = changeAsArray.join("");
  }
  return checkedValue;
}
