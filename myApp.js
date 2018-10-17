module.exports = {

  parseDate: function(date, done) {
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
    done();
  },
  
  dateToLocalTime: function(date, done) {
    let offset = (date.getTimezoneOffset() / -60);
    return new Date(date.getTime() + offset);
    
  }
    
  }