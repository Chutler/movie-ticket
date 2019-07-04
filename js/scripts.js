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
    // console.log(showTitle, showTime, userAge)

    var newTicket = new Ticket(showTitle, showTime, userAge);
    // console.log(newTicket);

    var price = 0

    if (newTicket.movie === "first-run"){
      price += 15;
    } else {
      price += 10;
    }

    if (newTicket.time === "matinee"){
      price += 2
    } else {
       price += 5
    }

    if (newTicket.age === "adult"){
      price += 5
    }

    $("#results").text("Your ticket price for " + newTicket.movie +" movie is $" + price + ".");
  });
});
