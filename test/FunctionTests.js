let checkChange = (change) =>{
  changeAsArray = [...change];
  if(changeAsArray[0]==='-'){
      return false;
  }
  return true;
}