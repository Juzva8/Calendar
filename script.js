$(document).ready(function(){
$("#datetime").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
$(".saveButton").on("click", function(){
    var time = $(this).parent().attr("id")
    var textvalue = $(this).siblings(".description").val()
    localStorage.setItem(time, textvalue)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))

function updateColor(){
    var now = moment().hours()
$(".time-block").each(function(){
    var hour = parseInt ($(this).attr("id").split("-")[1])
if (hour < now){ $(this).addClass("past")

} else if (hour === now){
    $(this).removeClass("past")
    $(this).addClass("present")
}   else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}
})
}
updateColor()
})