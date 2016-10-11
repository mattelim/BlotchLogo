//$("circle").velocity({ fill: "#ff0000" }, {duration: 1500});

//$(loop);
var transValue = $("#scatter").val()/1;
var radMin = $("#radminimum").val()/1;
var radVar = $("#radmaximum").val() - radMin;
var speedVar = 3100 - $("#speedvalue").val();
var isColor = $("#colorRand").prop("checked");
//console.log(isColor);

//storing DOM in cache
var circleDOM = $("#Layer_1 g g g").children("circle");

var intervalID;

$("#scatter").change(function() {
  transValue = $("#scatter").val()/1;
  //console.log("transValue= " + transValue);
  stopStart();
});

$("#radminimum").change(function() {
  radMin = $("#radminimum").val()/1;
  radVar = $("#radmaximum").val() - radMin;
  //console.log("radMin= " + radMin);
  stopStart();
});

$("#radmaximum").change(function() {
  radVar = $("#radmaximum").val() - radMin;
  //console.log("radVar= " + radVar);
  stopStart();
});

$("#speedvalue").change(function() {
  speedVar = 3100 - $("#speedvalue").val();
  //console.log("speedvalue= " + speedVar);
  stopStart();
});

$("#colorRand").change(function() {
  isColor = $("#colorRand").prop("checked");
  //console.log(isColor);
  stopStart();
});

//-----

$("#pauseAnim").click(function() {
  window.clearInterval(intervalID);
});

$("#playAnim").click(function() {
  intervalID = window.setInterval(loop, speedVar);
});

//implement some way to change delay/decay time instead of "natural" increase?

// previous version separated speed into speedMin and speedVar
// setInterval was previously unassociated with speedVar

$(firstStart);

function firstStart() {
  intervalID = window.setInterval(loop, speedVar);
  //console.log("started");
}

function stopStart() {
  window.clearInterval(intervalID);
  //console.log("stopped");
  intervalID = window.setInterval(loop, speedVar);
  //console.log("started");
}

//"framerate" of 1000 doesn't differ much from 100
//*seems like fr just have to be average speed
//*** interesting... loop interval can be LESS than animation duration

function loop(){
  circleDOM.each(function() {
    //var xpos = $(this).attr("cx");
    //var ypos = $(this).attr("cy");
    //console.log(transValue);
    //console.log("radVar= " + radVar);
    //console.log("radMin= " + radMin);

    //var radius = Math.random()*radVar + radMin;

    $(this).velocity({
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      r: Math.random()*radVar + radMin
      //r: 0.4
    },{
      duration: (speedVar/2)+Math.random()*(speedVar)

      //duration: Math.random()*500
      //duration: 100+Math.random()*100
      //complete: loop
    });

    //console.log("radius: " + $(this).attr("r"));

    if (isColor) {
      $(this).velocity({
        fillRed: Math.random()*255,
        fillBlue: Math.random()*255,
        fillGreen: Math.random()*255
      },{
        duration: (speedVar/2)+Math.random()*(speedVar)
      });
    }

  });
}

/*
 * To-do
 *     Leaving a trail
 */

/*
 * Options
 *     multiple random movements with each different timings
 *     single universal timer
 */

/*
function blotch_anim() {
  $(this).velocity({ fill: "#ff0000" }, {duration: 1500});
}
*/
