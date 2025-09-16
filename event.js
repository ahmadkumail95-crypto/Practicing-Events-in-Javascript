var setUpEvents = function ()

{
var content = document.getElementById("content");
 var button = document.getElementById("show-more");

  button.onclick = function(){

    if (content.className === "open" ) {
        // shrink
        content.className = "";
        button.innerHTML = "Show More";

    }
    else

     {
       // expan
        content.className = "open";
        button.innerHTML = "Show Less";
    }

  };

  }


  // window on load

  window.onload = function(){

    setUpEvents();
  }

  var myMessage = document.getElementById("message");

  function showMessage(){
    myMessage.className = "show";
  }


  // Set timer 

  setTimeout(showMessage, 3000);

  var colorChanger = document.getElementById("color-changer");
  var colors = ["pink", "red" , "yellow", "silver"];
  var counter = 0;

  // timer in loop

  function changeColor () {

    if (counter >= colors.length) {
      counter = 0;
    }

      colorChanger.style.background = colors[counter];
      counter ++;
  }
  var myTimer = setInterval(changeColor, 3000);
  colorChanger.onclick = function()
  {
    clearInterval(myTimer);
    colorChanger.innerHTML= "timer stopped bro!";

  };

  // extra backchodi


  colorChanger.onclick = function()
  {
    setInterval(myTimer);
    colorChanger.innerHTML= "timer start again!";

  };



  var myForm  = document.forms.myForm;
  var messageee  = document.getElementById("messageee");
  myForm.onsubmit  = 
  function(){
    if(myForm.name.value  == "" ){
      messageee.innerHTML  = "please enter a fucking name";
      return false;

    }
    else {
      messageee.innerHTML ="";
      return true;

    }
  };
var myPara =  document.getElementById("coca-cola").getElementsByTagName("p")[5];
var myPara2 = $("coca-cola p:last-child");


$("#mForm").click(function() {
  $("#box").css("background", "blue").fadeOut(1000);
});

