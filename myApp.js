module.exports = {

  parseDate: function(date) {
    let parsedDate = new Date(date);
    if (parsedDate.toUTCString() === "Invalid Date" ) {
      let dateAsInteger = new Date(Number(date));
      if (dateAsInteger.toUTCString() != "Invalid Date") {
        return dateAsInteger;
      }
      return false;
    }
    else {
     return parsedDate; 
    }
  },
  
  dateToLocalTime: function(date) {
    let offset = (date.getTimezoneOffset() * -60000);
    return new Date(date.getTime() + offset);
  }
    
  }