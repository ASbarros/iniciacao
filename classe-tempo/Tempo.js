/**
 * classe para o processamento da linha vertical para o tempo
 * @author anderson dos santos de barros
 */

var x = 5;
const tempo = 10;
let a = 0.3;
var idSVG = 0;
function time() {
    //id da linha...
    var idTime = 0;
    //criando o timer, composto por dois circulos...
    createCircle('grande' + idSVG, 1.5);
    createCircle(idSVG, 0.3);

    //timer...
    var timer = setInterval(() => {
        document.getElementById('circle-' + idSVG).setAttributeNS(null, 'r', a + '%');
        a += 0.1;
        if (a > 1.5) a = 0.1;
    }, tempo * 2.5);

    //linha passando...
    setTimeout(() => {
        //variavel para incrementar o scroll...
        var Tscroll = 350;
        var inter = setInterval(() => {
            try {
                idTime++;
                createLine(x, 40, x, 60, "time" + idTime, "idSVG" + idSVG, "time");
                x = x + 0.18;
                //id da linha ...
                var id = 'time' + (idTime - 1) + '-idSVG' + idSVG;
                remove_id(id);
                if (x >= 98.3) {
                    window.scrollTo(0, Tscroll);
                    Tscroll = Tscroll + 350;
                    //voltando ao inicio da pauta...
                    x = 5;
                    //removendo a linha...
                    remove_id("time" + idTime + "-idSVG" + idSVG);
                    //removendo o timer, composto por dois circulos...
                    remove_id('circle-grande' + idSVG);
                    remove_id('circle-' + idSVG);
                    //incremento...
                    idSVG++;
                    //criando o proximo timer...
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
        //deley...
    }, 300);
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