// Business Logic for Contacts


function Ticket(movieTitle, movieTime, age) {
  this.movieTitle = movieTitle,
  this.movieTime = movieTime,
  this.age = age
}


// user interface logic

$(document).ready(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();

    var movieTitle = ($("#movieTitle").val())
    var movieTime = ($("#movieTime").val())
    var age = ($("#age").val())
    console.log(newTicket);
  });
});

var newTicket = new Ticket(movieTitle, movieTime, age);
