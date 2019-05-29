import $ from 'jquery';

var DayChecker = require ('./daychecker.js').daycheckerModule;

$(document).ready(function() {
  $("#btn").click(function() {

    var date = $('#mydate').val();
    var res = date.split("-");
    var year = parseInt(res[0]);
    var month = parseInt(res[1]);
    var day = parseInt(res[2]);
    var dateResult = new DayChecker(year,month,day);
    $('#fullDate').text(date);
    $('#result').text(" " + dateResult.CheckDate());


  });
});
