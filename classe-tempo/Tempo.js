/**
 * classe para o processamento da linha vertical para o tempo
 * @author anderson dos santos de barros
 */

var x = 5;
const tempo = 10;
let a = 0.3;
var idSVG = 0;

function time() {
    //createAudio(0);
    var idTime = 0;
    //id da linha...
    createCircle('grande' + idSVG, 1.5);
    //criando o timer, composto por dois circulos...
    createCircle(idSVG, 0.3);

    var timer = setInterval(() => {
        //timer...
        document.getElementById('circle-' + idSVG).setAttributeNS(null, 'r', a + '%');
        a += 0.1;
        if (a > 1.5) a = 0.1;
    }, tempo * 2.5);

    setTimeout(() => {
        //linha passando...
        var Tscroll = 350;
        //variavel para incrementar o scroll...
        var inter = setInterval(() => {
            try {
                idTime++;
                createLine(x, 40, x, 60, "time" + idTime, "idSVG" + idSVG, "time");
                x = x + 0.18;
                var id = 'time' + (idTime - 1) + '-idSVG' + idSVG;
                //id da linha ...
                remove_id(id);
                if (x >= 98.3) {
                    //voltando ao inicio da pauta...
                    window.scrollTo(0, Tscroll);
                    Tscroll = Tscroll + 350;
                    x = 5;
                    remove_id("time" + idTime + "-idSVG" + idSVG);
                    //removendo a linha...
                    remove_id('circle-grande' + idSVG);
                    //removendo o timer, composto por dois circulos...
                    remove_id('circle-' + idSVG);
                    idSVG++;
                    //incremento...
                    createCircle('grande' + idSVG, 1.5);
                    //criando o proximo timer...
                    createCircle(idSVG, 0.3);
                }
            } catch (e) {
                clearInterval(inter);
                clearInterval(timer);
                idSVG = 0;
            }
        }, tempo);
        //deley...
    }, 300);
}

function createCircle(_i, _r) {
    var circle = document.createElementNS(svgNS, "circle");
    circle.setAttributeNS(null, "id", 'circle-' + _i);
    circle.setAttributeNS(null, "cx", '50%');
    circle.setAttributeNS(null, "cy", '92%');
    circle.setAttributeNS(null, "r", _r + '%');
    circle.setAttributeNS(null, "class", 'circle');
    document.getElementById('idSVG' + idSVG).appendChild(circle);
}