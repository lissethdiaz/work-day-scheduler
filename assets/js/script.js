var currentDay = moment().format("dddd, MMMM Do");

var h9 = moment().hour(9);
var h10 = moment().hour(10);
var h11 = moment().hour(11);
var h12 = moment().hour(12);
var h13 = moment().hour(13);
var h14 = moment().hour(14);
var h15 = moment().hour(15);
var h16 = moment().hour(16);
var h17 = moment().hour(17);
var h18 = moment().hour(18);

var hours = [h9, h10, h11, h12, h13, h14, h15, h16, h17];

var timeSlot9 = JSON.parse(localStorage.getItem('hour9')) || "";
var timeSlot10 = JSON.parse(localStorage.getItem('hour10')) || "";
var timeSlot11 = JSON.parse(localStorage.getItem('hour11')) || "";
var timeSlot12 = JSON.parse(localStorage.getItem('hour12')) || "";
var timeSlot13 = JSON.parse(localStorage.getItem('hour13')) || "";
var timeSlot14 = JSON.parse(localStorage.getItem('hour14')) || "";
var timeSlot15 = JSON.parse(localStorage.getItem('hour15')) || "";
var timeSlot16 = JSON.parse(localStorage.getItem('hour16')) || "";
var timeSlot17 = JSON.parse(localStorage.getItem('hour17')) || "";

$.each(hours, function (index, value) {
    events = [timeSlot9, timeSlot10, timeSlot11, timeSlot12, timeSlot13, timeSlot14, timeSlot15, timeSlot16, timeSlot17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-1 save saveBtn' id='save" + (index + 9) + "'><i class='fas fa-save i:hover' title='Save Event'></i></div></div>");
});

$("#currentDay").text(currentDay);

var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");

  // h9
    if (moment().isBetween(h9, h10)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(h10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }

    // h10
    if (moment().isBetween(h10, h11)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(h11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

    // h11
    if (moment().isBetween(h11, h12)) {
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(h12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

    // h12
    if (moment().isBetween(h12, h13)) {
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(h13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    // h13
    if (moment().isBetween(h13, h14)) {
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(h14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

    // h14
    if (moment().isBetween(h14, h15)) {
        $("#timeblock14").addClass("present");
    }
    else if (moment().isAfter(h15)) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("#timeblock14").addClass("future");
    }

    // h15
    if (moment().isBetween(h15, h16)) {
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(h16)) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }

    // h16
    if (moment().isBetween(h16, h17)) {
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(h17)) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }

    // h17
    if (moment().isBetween(h17, h18)) {
        $("#timeblock17").addClass("present");
    }
    else if (moment().isAfter(h18)) {
        $("#timeblock17").addClass("past");
    }
    else {
        $("#timeblock17").addClass("future");
    };
}



$("#save9").on("click", function () {
    var event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})
$("#save10").on("click", function () {
    var event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})
$("#save11").on("click", function () {
    var event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})
$("#save12").on("click", function () {
    var event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})
$("#save13").on("click", function () {
    var event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})
$("#save14").on("click", function () {
    var event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})
$("#save15").on("click", function () {
    var event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})
$("#save16").on("click", function () {
    var event16 = $("#eventblock16").val().trim();
    localStorage.setItem('hour16', JSON.stringify(event16));
})
$("#save17").on("click", function () {
    var event17 = $("#eventblock17").val().trim();
    localStorage.setItem('hour17', JSON.stringify(event17));
})


setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
    });

}, (60000));

auditTime();