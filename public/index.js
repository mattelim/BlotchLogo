//$("circle").velocity({ fill: "#ff0000" }, {duration: 1500});

//$(loop);

window.setInterval(loop, 33);
//*** interesting... loop interval can be LESS than animation duration

function loop(){
  $("#Layer_1 g g g").children("circle").each(function() {
    //var xpos = $(this).attr("cx");
    //var ypos = $(this).attr("cy");
    //console.log(xpos + " " + ypos);
    $(this).velocity({
      //cx: "+=' + Math.random() + '",
      translateX: Math.random()*3-1.5,
      translateY: Math.random()*3-1.5,
      //cy: ypos + (Math.random()*1)-0.5,
      r: 0.25+(Math.random()*0.50)
      //fillRed: Math.random()*255,
      //fillBlue: Math.random()*255,
      //fillGreen: Math.random()*255
    },{
      //duration: Math.random()*500
      duration: 500+Math.random()*1000
      //duration: 100+Math.random()*100
      //complete: loop
    });
  });
}



/*
function blotch_anim() {
  $(this).velocity({ fill: "#ff0000" }, {duration: 1500});
}
*/
