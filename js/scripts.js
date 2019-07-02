// Business Logic for Contacts

function Ticket(title, time, age) {
  this.movieTitle = title,
  this.movieTime = time,
  this.age = age
};

// user interface logic

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();

    var movieTitle = ($("#movieTitle").val())
    var movieTime = ($("#movieTime").val())
    var age = ($("#age").val())
    console.log(movieTitle, movieTime, age)

  });
});

var newTicket = new Ticket(movieTitle, movieTime, age);
console.log(newTicket);
