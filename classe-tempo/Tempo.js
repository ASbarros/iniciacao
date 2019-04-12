/**
 * classe para o processamento da linha vertical para o tempo
 * @author anderson dos santos de barros
 */

var x = 5;
function time() {
    //id da linha...
    var idTime = 0;
    var idSVG = 0;
    var inter = setInterval(function aux() {
        try {
            idTime++;
            createLine(x, 40, x, 60, "time" + idTime, "idSVG" + idSVG, "time", "", "", "");
            x = x + 0.18;
            //id da linha ...
            var id = 'time' + (idTime - 1) + '-idSVG' + idSVG;
            removeLine(id);
            if (x >= 98.3) {
                x = 5;
                removeLine("time" + idTime + "-idSVG" + (idSVG));
                idSVG++;
            }
        }
        catch (e) {
            clearInterval(inter);
        }
    }, 30)

}