/**
 * classe linha
 * @author anderson dos santos de barros
 */

//definindo o namespace de svg...
const svgNS = "http://www.w3.org/2000/svg";

function createSVG(id, dad) {
    //desenhando a tela a ser pintada...
    var canvasSVG = document.createElementNS(svgNS, "svg");
    canvasSVG.setAttributeNS(null, "id", "idSVG" + id);
    canvasSVG.setAttributeNS(null, "width", "100%");
    canvasSVG.setAttributeNS(null, "height", "100%");
    canvasSVG.setAttributeNS(null, "class", "svg");

    //apendando o elemento no corpo do svg...
    document.getElementById(dad).appendChild(canvasSVG);
    vetId = 'idSVG' + id;
}

//funcao cria linha...
function createLine(x1, y1, x2, y2, idName, idDiv, classe, metodo, metodo2, metodo3) {
    //pegando o valor numerico da div...
    NumDiv = idDiv.substring(5, 6);
    //desenhando um linha...
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttributeNS(null, "id", idName + "-" + idDiv);
    myLine.setAttributeNS(null, "x1", x1 + "%");
    myLine.setAttributeNS(null, "y1", y1 + "%");
    myLine.setAttributeNS(null, "x2", x2 + "%");
    myLine.setAttributeNS(null, "y2", y2 + "%");
    myLine.setAttributeNS(null, "class", classe);
    myLine.setAttributeNS(null, "onclick", metodo);
    myLine.setAttributeNS(null, "onmouseover", metodo2);
    myLine.setAttributeNS(null, "onmouseout", metodo3);

    //apendando o elemento no canvas criado...
    document.getElementById(idDiv).appendChild(myLine);

}

//funcao para criar a linha que fecha a pauta...
function createLastLine(idDiv) {
    let x1 = 98.2, x2 = 98.8, y = 40;
    for (let i = 2; i <= 6; i++ , y += 5) {
        createLine(x1, y, x2, y, "lastLine" + i, idDiv);
    }
    createLine(x2, 40, x2, 60, "lastLine1", idDiv, "lastLine");
}

var idAdditional = 0;
//funcao para criar a linha suplementar, um pedaço de linha...
function createLineAdditional(event, id) {
    //pegando as posicoes...
    let y = returnPositionY(id), x = returnPositionX_porcentagem(event.pageX);
    //obtendo o numero da div...
    let NumDiv = apenasNumeros(id.substring(id.length - 2, id.length));
    //createLine(x - 1.5, y, x + 1, y, "additional" + idAdditional, "idSVG" + NumDiv, "additional");
    idAdditional++;
}

//id das linhas temporarias...
var lineTemp = 0;

//funcao que cria uma linha temporaria assim que o mouse passa sobre a linha adicional...
function createLineTemp(event, id) {
    //pegando as posicoes...
    let y = returnPositionY(id), x = returnPositionX_porcentagem(event);
    //obtendo o numero da div...
    let NumDiv = apenasNumeros(id.substring(id.length - 2, id.length));
    //obtendo o numero da div...
    createLine(x - 1.5, y, x + 1, y, "lineTemp" + lineTemp, "idSVG" + NumDiv);
    lineTemp++;
}

//funcao para apagar a linha temporaria, quando o mouse sair da linha adicional...
function deleteLine(id) {
    let NumDiv = apenasNumeros(id.substring(id.length - 2, id.length));
    lineTemp--;
    //id da linha temporaria...
    let idLine = "lineTemp" + lineTemp + "-idSVG" + NumDiv;
    remove_id(idLine);;
}