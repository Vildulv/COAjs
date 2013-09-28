/**
 * Created with JetBrains PhpStorm.
 * User: hev
 * Date: 28.09.13
 * Time: 23:15
 * To change this template use File | Settings | File Templates.
 */

function color(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}