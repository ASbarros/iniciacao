/**
 * classe linha
 * @author anderson dos santos de barros
 */

const svgNS = "http://www.w3.org/2000/svg";
//definindo o namespace de svg...

function createSVG(_id, _dad) {
    var canvasSVG = document.createElementNS(svgNS, "svg");
    //desenhando a tela a ser pintada...
    canvasSVG.setAttributeNS(null, "id", "idSVG" + _id);
    canvasSVG.setAttributeNS(null, "width", "100%");
    canvasSVG.setAttributeNS(null, "height", "100%");
    canvasSVG.setAttributeNS(null, "class", "svg");
    canvasSVG.setAttributeNS(null, "version", "1.1");
    canvasSVG.setAttribute(null, 'xmlns', "http://www.w3.org/2000/svg");
    canvasSVG.setAttribute(null, 'xmlns:xlink',"http://www.w3.org/1999/xlink");

    document.getElementById(_dad).appendChild(canvasSVG);
    //apendando o elemento no corpo do svg...
}

//funcao cria linha...
function createLine(x1, y1, x2, y2, idName, idDiv, classe) {
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