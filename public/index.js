//$("circle").velocity({ fill: "#ff0000" }, {duration: 1500});

//$(loop);

window.setInterval(loop, 1000);
//"framerate" of 1000 doesn't differ much from 100
//*seems like fr just have to be average speed
//*** interesting... loop interval can be LESS than animation duration

var transValue = 3;
var radMin = 0.25;
var radVar = 0.50;
var speedMin = 500;
var speedVar = 1000;
var isColor = false;

function loop(){
  $("#Layer_1 g g g").children("circle").each(function() {
    //var xpos = $(this).attr("cx");
    //var ypos = $(this).attr("cy");
    //console.log(xpos + " " + ypos);

    $(this).velocity({
      //cx: "+=' + Math.random() + '",
      translateX: Math.random()*transValue-(transValue/2),
      translateY: Math.random()*transValue-(transValue/2),
      //cy: ypos + (Math.random()*1)-0.5,
      r: radMin+(Math.random()*(radVar))
    },{
      //duration: Math.random()*500
      duration: speedMin+Math.random()*(speedVar)
      //duration: 100+Math.random()*100
      //complete: loop
    });

    if (isColor) {
      $(this).velocity({
        fillRed: Math.random()*255,
        fillBlue: Math.random()*255,
        fillGreen: Math.random()*255
      },{
        duration: speedMin+Math.random()*(speedVar)
      });
    }

  });
}

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
