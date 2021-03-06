//to Check validity of date provided
function checkDateFormat(startDate){
  if(startDate.length<1){
    console.log("\nGetting Tweets without restrictions  Start Date = NULL\n".bold.green );
    return true;    
  }
  else if(startDate.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || startDate.toLowerCase()==="y"){
    console.log("\nGetting tweets  starting at "+ startDate+"\n".bold.green);
    return true;
  }
  else{
    console.log("\n INVALID DATE FORMAT!  Date Format should be: 2001-11-23 (YYYY-MM-DD) or hit ENTER to ignore\n".bold.red );
    return false;
  }
}

//TEST for edge cases
function checkUserID(userID){
  AcceptedChar = "^[a-zA-Z0-9\s_]+$";
  if(userID === null){
    console.log("\n invalid input \n".bold.red);
    return false;
  }
  else if(userID.length>15){
    console.log("\n UserID cannot be more than 15 characters \n".bold.red);
    return false;
  }
  else if(!(userID.match("^[a-zA-Z0-9\s_]+$"))){
    console.log("\n UserID should be composed only of A-Z, 0-9 and _(underscore) \n".bold.red);
    return false
  }
  else{
    return true;
  }
}


module.exports = {
    checkUserID:checkUserID,
    checkDateFormat:checkDateFormat
}