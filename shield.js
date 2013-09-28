/**
 * Created with JetBrains PhpStorm.
 * User: hev
 * Date: 28.09.13
 * Time: 19:45
 * To change this template use File | Settings | File Templates.
 */

function shield(){

    //canvas Size
    var width = 200;
    var height = 200;

    //shield Size
    var shieldWidth = 124;
    var shieldHeight = 140;

    var coatCanvas = document.getElementById('coats');

    coatCanvas.width = width;
    coatCanvas.height = height;

    var context = coatCanvas.getContext('2d');

    //adding shadow to shield
    context.shadowColor = '#000';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;

    var max =12;
    var min = 1;

    var randShield = Math.floor(Math.random() * max)+min;
    randShield = 1;
    switch (randShield){
        //drawing round shield
        case 1:
            context.fillStyle = color();
            context.arc(width/2,height/2,height/2.5,0,2*Math.PI,false);
            context.fill();
        break;
        //drawing square shield
        case 2:
            context.fillStyle = color();
            context.rect(0,0,shieldHeight,shieldHeight);
            context.fill();
            break;

    }



}
