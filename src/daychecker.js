function DayChecker (year,month,day)
{
  this.year = year;
  this.month = month;
  this.day = day;
}

DayChecker.prototype.CheckDate = function () {

   let daychecker = new Date (this.year,this.month, this.day);
   const days = ['Thursday', 'Friday', 'Saturday','Sunday','Monday', 'Tuesday', 'Wednesday'];
   return days[daychecker.getDay()];
}



exports.daycheckerModule = DayChecker;
