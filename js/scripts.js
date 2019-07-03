// Business Logic for Contacts

function Ticket(title, time, age) {
  this.movie = title,
  this.time = time,
  this.age = age
};

// user interface logic

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();

    var showTitle = $("#movieTitle").val()
    var showTime = $("#movieTime").val()
    var userAge = $("#age").val()
    console.log(showTitle, showTime, userAge)

    var newTicket = new Ticket(showTitle, showTime, userAge);
    console.log(newTicket);
  });
});



