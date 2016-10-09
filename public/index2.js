//$("circle").velocity({ fill: "#ff0000" }, {duration: 1500});

//$(loop);

var transValue = 5;
var radMin = 0.00;
var radVar = 2.00;
//var speedMin = 500;
var speedVar = 1000;
var isColor = false;

window.setInterval(loop, speedVar);
//"framerate" of 1000 doesn't differ much from 100
//*seems like fr just have to be average speed
//*** interesting... loop interval can be LESS than animation duration

function loop(){
  $("#Layer_1").children("circle").each(function() {
    //var xpos = $(this).attr("cx");
    //var ypos = $(this).attr("cy");
    //console.log(xpos + " " + ypos);

    $(this).velocity({
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      r: radMin+(Math.random()*(radVar)),
      //r: 0.4
      //fillOpacity: Math.random()
    },{
      duration: (speedVar/2)+Math.random()*(speedVar)

      //duration: Math.random()*500
      //duration: 100+Math.random()*100
      //complete: loop
    });

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
