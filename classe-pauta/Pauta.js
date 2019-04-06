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
    //criando as linhas, cada uma com seu identificador...
    for (let i = 5, y1 = primeiraLinha, y2 = y1; linha < i; i-- , y1 = y1 + espacamento, y2 = y1) {
        createLine(0, y1, 100, y2, "line" + i, idDiv, "%", "linha");
    }
    createClaveSol(idDiv);
    compasso(4, idDiv);
    //criando as linhas adicionais superiores...
    for (let i = 5, y1 = 15, y2 = y1; linha < i; i-- , y1 = y1 + espacamento, y2 = y1) {
        createLine(0, y1, 100, y2, "additional-sup-" + i, "idSVG" + NumDiv, "%", "suplementar", "createLineAdditional(event,id)", "createLineTemp(event,id)", "deleteLine(id)");
    }
    //cirando as linhas adicionais infeires...
    for (let i = 5, y1 = 85, y2 = y1; linha < i; i-- , y1 = y1 - espacamento, y2 = y1) {
        createLine(0, y1, 100, y2, "additional-inf-" + i, "idSVG" + NumDiv, "%", "suplementar", "createLineAdditional(event,id)", "createLineTemp(event,id)", "deleteLine(id)");
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
    i++;
}