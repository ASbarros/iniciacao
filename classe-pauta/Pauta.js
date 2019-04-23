/**
 * classe pauta
 * @author anderson dos santos de barros
 */

//funcao para criar a pauta...
function createPauta(idDiv) {
    //espacamento entre as linhas...
    const espacamento = 5;
    //numero de linhas..
    const linha = 0;
    //onde sera a primeira linha...
    let primeiraLinha = 40;
    let x2 = 98.2;
    let x1 = 0.7;
    //criando as linhas, cada uma com seu identificador...
    for (let i = 5, y1 = primeiraLinha, y2 = y1; linha < i; i-- , y1 = y1 + espacamento, y2 = y1) {
        createLine(x1, y1, x2, y2, "line" + i, idDiv, "linha");
    }
    createClaveSol(idDiv, 'claveSol');
    compasso(4, idDiv);
    //criando as linhas adicionais ...
    for (let i = 29, y1 = 15, y2 = y1; linha < i; i-- , y1 = y1 + (espacamento / 2), y2 = y1) {
        createLine(7, y1, x2, y2, "additional" + i, "idSVG" + NumDiv, "suplementar",
            "createLineAdditional(event,id)");
    }
}
var i = 0;
//funcao para criar mais pautas...
function createDiv() {
    //cria um elemento "div"...
    var div = document.createElement('div');
    div.setAttribute('id', 'div' + i);
    div.setAttribute('class', 'corpo');
    div.setAttribute("width", "100%");
    div.setAttribute("height", "500px");

    //anexa a "div" criada com o novo conteúdo 
    document.body.appendChild(div);

    createSVG(i, "div" + i);
    createPauta("idSVG" + i);
    lastLine(i);
    i++;
}

function lastLine(id) {
    for (let index = 1; index <= 6; index++) {
        removeLine('lastLine' + index + '-idSVG' + (id - 1));
    }
    createLastLine("idSVG" + id);
}