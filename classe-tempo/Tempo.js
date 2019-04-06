/**
 * classe para o processamento da linha vertical para o tempo
 * @author anderson dos santos de barros
 */

var x = 0;

window.addEventListener("load", function time() {
    //id da linha...
    var i = 0;
    var inter = setInterval(function aux() {
        i++;
        createLine(x, 40, x, 60, "time" + i, "idSVG0", "%", "time", "", "", "");
        x = x + 0.18;
        $('#time' + (i - 1) + '-idSVG0').remove();
        if (x >= 100) {
            //clearInterval(inter);
            x = 0;
        }
    }, 40);


});