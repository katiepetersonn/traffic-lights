// You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
// The traffic lights are designated (N, S) and (E, W) like a compass.
// You're not required to optimize, just focus on a functional approach to requirements.
// You should provide unit tests for your solution.

// REQUIREMENTS

// The lights change automatically every 5 minutes.

// When switching from green to red, the yellow light must be displayed for 30 seconds prior to it

// switching to red and the opposite direction switching to green from red.

// Provide the output for the light changes which occur during the period between 9am and 9:30am.

//loop to change lights

//change lights

console.log("Hello world");

// Basic scenario: get one traffic light working

//3 states
//red [1]
//yellow [2]
//green [3]

//Green -> Yellow -> Red
//If the light is green
//Green
// for 135 seconds
//Yellow
// for 30 seconds
//Red
//got 135 seconds
//Lights to change every 5 mins

//Red -> Yellow -> Green (REVERSE THE ABOVE)
//If the light is red
//Red
// for 135 seconds
//Yellow
// for 30 seconds
//Green
//got 135 seconds
//Lights to change every 5 mins

//LOGIC

//North-south //East-West
//NS: Red //EW: Red
//NS: Red  //EW: Yellow
//NS: Yellow //EW: Red
//NS: Red //EW: Green
//NS: Green //EW: Red

// document.getElementsByClassName("red").onclick = changeToRed;
//
// var changeToRed = function() {
//   console.log("Red light was clicked");
//   // clearlights();
//   // document.getElementsByClassName("red").style.backgroundColor = "red";
// };

$(document).ready(function() {
  var clearLights = function() {
    document.getElementById("green").style.backgroundColor = "black";
    document.getElementById("yellow").style.backgroundColor = "black";
    document.getElementById("red").style.backgroundColor = "black";
  };

  var changeToRed = function() {
    clearLights();
    console.log("Red light was clicked");
    document.getElementById("red").style.backgroundColor = "red";
  };
  setTimeout(changeToRed, 2000);

  var changeToYellow = function() {
    clearLights();
    console.log("Yellow light was clicked");
    document.getElementById("yellow").style.backgroundColor = "yellow";
  };
  setTimeout(changeToYellow, 3000);

  var changeToGreen = function() {
    clearLights();
    console.log("Green light was clicked");
    document.getElementById("green").style.backgroundColor = "green";
  };
  setTimeout(changeToGreen, 4000);

  var TrafficLightTimer = function() {};
});
