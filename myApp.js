module.exports = {

    parseDate: function(date, done) {
      let parsedDate = new Date(date);
      if (parsedDate.toUTCString() === "Invalid Date" ) {
        return false;
      }
      else {
       return parsedDate; 
      }
      done();
    }
    
    }