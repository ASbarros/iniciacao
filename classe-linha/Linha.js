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
    canvasSVG.setAttributeNS(null, "class", "sgv");
    canvasSVG.setAttributeNS(null, "width", "100%");
    canvasSVG.setAttributeNS(null, "height", "100%");

    //apendando o elemento no corpo do svg...
    document.getElementById(dad).appendChild(canvasSVG);
}

//funcao cria linha...
function createLine(x1, y1, x2, y2, idName, idDiv, propriedade, classe, metodo, metodo2, metodo3) {
    //pegando o valor numerico da div...
    NumDiv = idDiv.substring(5, 6);
    //desenhando um linha...
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttributeNS(null, "id", idName + "-" + idDiv);
    myLine.setAttributeNS(null, "x1", x1 + propriedade);
    myLine.setAttributeNS(null, "y1", y1 + propriedade);
    myLine.setAttributeNS(null, "x2", x2 + propriedade);
    myLine.setAttributeNS(null, "y2", y2 + propriedade);
    myLine.setAttributeNS(null, "class", classe);
    myLine.setAttributeNS(null, "onclick", metodo);
    myLine.setAttributeNS(null, "onmouseover", metodo2);
    myLine.setAttributeNS(null, "onmouseout", metodo3);

    //apendando o elemento no canvas criado...
    document.getElementById(idDiv).appendChild(myLine);

}

//funcao para criar a linha que fecha a pauta...
function createLastLine(idDiv) {
    createLine(98.8, 40, 98.8, 60, "lastLine", idDiv, "%", "lastLine", "", "", "");
    createLine(98.2, 40, 98.8, 40, "lastLine2", idDiv, "%", "", "", "", "");
    createLine(98.2, 45, 98.8, 45, "lastLine3", idDiv, "%", "", "", "", "");
    createLine(98.2, 50, 98.8, 50, "lastLine4", idDiv, "%", "", "", "", "");
    createLine(98.2, 55, 98.8, 55, "lastLine5", idDiv, "%", "", "", "", "");
    createLine(98.2, 60, 98.8, 60, "lastLine6", idDiv, "%", "", "", "", "");

}

var idAdditional = 0;
//funcao para criar a linha suplementar, um pedaço de linha...
function createLineAdditional(event, id) {
    //como cada linha é fixa em cada div, os pixes de distancia do top sao os mesmos para todas as divs...
    let y, x = event.pageX;
    //precisa pegar apenas o eixo x...
    let NumDiv = id.substring(22, 23);
    //pegando o numero da div em que houve o click...
    y = returnPositionY(id);
    createLine(x - 30, y, x - 8, y, "additional" + idAdditional, "idSVG" + NumDiv, "px", "additional", "", "");
    idAdditional++;
}

//id das linhas temporarias...
var lineTemp = 0;

//funcao que cria uma linha temporaria assim que o mouse passa sobre a linha adicional...
function createLineTemp(event, id) {
    let x = event.pageX;
    let NumDiv = id.substring(22, 23);
    let y = returnPositionY(id);
    createLine(x - 30, y, x - 8, y, "lineTemp" + lineTemp, "idSVG" + NumDiv, "px", "temp", "", "", "");
    lineTemp++;
}

//funcao para apagar a linha temporaria, quando o mouse sair da linha adicional...
function deleteLine(id) {
    let NumDiv = id.substring(22, 23);
    lineTemp--;
    //id da linha temporaria...
    let idLine = "lineTemp" + lineTemp + "-idSVG" + NumDiv;
    removeLine(idLine);;
}