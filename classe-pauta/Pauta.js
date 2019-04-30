/**
 * classe pauta
 * @author anderson dos santos de barros
 */

function createPauta(_idDiv) {
    //funcao para criar a pauta...
    const espacamento = 5,
        //espacamento entre as linhas...
        linha = 0;
    //numero de linhas..
    let primeiraLinha = 40,
        //onde sera a primeira linha...
        x2 = 98.2,
        x1 = 0.7;
    for (let i = 5, y1 = primeiraLinha, y2 = y1; linha < i; i-- , y1 = y1 + espacamento, y2 = y1) {
        //criando as linhas, cada uma com seu identificador...
        createLine(x1, y1, x2, y2, "line" + i, _idDiv, "linha");
    }
    createCompassFormula(_idDiv, 'claveSol', 0, 0);
    createCompassFormula(_idDiv, 'quatro', 50, 105);
    createCompassFormula(_idDiv, 'quatro', 45, 150);
    compasso(4, _idDiv);
    for (let i = 29, y1 = 15, y2 = y1; linha < i; i-- , y1 = y1 + (espacamento / 2), y2 = y1) {
        createLine(7, y1, x2, y2, "additional" + i, "idSVG" + NumDiv, "suplementar");
        //criando as linhas adicionais ...
    }
}
let i = 0;
function createDiv() {
    //funcao para criar mais pautas...
    var div = document.createElement('div');
    //cria um elemento "div"...
    div.setAttribute('id', 'div' + i);
    div.setAttribute('class', 'corpo');
    div.setAttribute("width", "100%");
    div.setAttribute("height", "500px");

    document.body.appendChild(div);
    //anexa a "div" criada com o novo conteúdo 

    createSVG(i, "div" + i);
    createPauta("idSVG" + i);
    lastLine(i);
    i++;
}

function lastLine(_id) {
    for (let index = 1; index <= 6; index++) {
        remove_id('lastLine' + index + '-idSVG' + (_id - 1));
        //remove a linha anterior...
    }
    createLastLine("idSVG" + _id);
}