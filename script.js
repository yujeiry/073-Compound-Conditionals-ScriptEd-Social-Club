// set the correct username and password combination below
var correctUsername = "day";
var correctPassword = "night";

$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
   if ( username=== correctUsername && password===correctPassword) {
     
 // display this text if the answer is correct
$(".message").text("Correct!");

}else{

    // display this text if the answer is incorrect
    $(".message").text("Wrong! Try again.");   
    }
    
    
    

});