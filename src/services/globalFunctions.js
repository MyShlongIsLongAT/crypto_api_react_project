export let digitLimiter = (number) =>{
    let limitedNumber="";
    let numberArray = Array.from(number);
    for (let i = 0; i < 7; i++) {
        limitedNumber+=numberArray[i].toString();
    };
    return limitedNumber;
}