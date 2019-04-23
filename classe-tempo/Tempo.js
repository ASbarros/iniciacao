/**
 * classe para o processamento da linha vertical para o tempo
 * @author anderson dos santos de barros
 */

var x = 5;
const tempo = 20;
let a = 0.3;
var idSVG = 0;
function time() {
    //id da linha...
    var idTime = 0;
    createCircle('grande' + idSVG, 1.5);
    createCircle(idSVG, 0.3);
    var timer = setInterval(() => {
        document.getElementById('circle-' + idSVG).setAttributeNS(null, 'r', a + '%');
        a += 0.1;
        if (a > 1.5) a = 0.1;
    }, tempo * 2.5);
    setTimeout(() => {
        var inter = setInterval(() => {
            try {
                idTime++;
                createLine(x, 40, x, 60, "time" + idTime, "idSVG" + idSVG, "time");
                x = x + 0.18;
                //id da linha ...
                var id = 'time' + (idTime - 1) + '-idSVG' + idSVG;
                removeLine(id);
                if (x >= 98.3) {
                    x = 5;
                    removeLine("time" + idTime + "-idSVG" + idSVG);
                    removeLine('circle-grande' + idSVG);
                    removeLine('circle-' + idSVG);
                    idSVG++;
                    createCircle('grande' + idSVG, 1.5);
                    createCircle(idSVG, 0.3);
                }
            }
            catch (e) {
                clearInterval(inter);
                clearInterval(timer);
                idSVG = 0;
            }
        }, tempo);
    }, 3000);
}
function createCircle(i, r) {
    var circle = document.createElementNS(svgNS, "circle");
    circle.setAttributeNS(null, "id", 'circle-' + i);
    circle.setAttributeNS(null, "cx", '50%');
    circle.setAttributeNS(null, "cy", '92%');
    circle.setAttributeNS(null, "r", r + '%');
    circle.setAttributeNS(null, "class", 'circle');
    document.getElementById('idSVG' + idSVG).appendChild(circle);
}