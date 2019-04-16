/**
 * classe onde vai ter todas as funcionalidades das notas
 * @author anderson dos santos de barros
 */

function createClaveSol(idDiv, name) {
    let claveSol = document.createElementNS(svgNS, "path");
    let NumDiv = idDiv.substring(5, 6);
    claveSol.setAttributeNS(null, "id", name + NumDiv);
    claveSol.setAttributeNS(null, "stroke", "#000");
    claveSol.setAttributeNS(null, "d", getImagem(name));

    //apendando o elemento no corpo do svg...
    document.getElementById(idDiv).appendChild(claveSol);
}

//vetor para atualizar a posicao das notas...
var vetObj = [];
var armazenaX;
var id = 0;

function createNota(name) {
    //adicionando um evento ao todos os elementos svg...
    $('svg').one('click', function create(event) {
        this.classList.add('svg');
        let x = event.clientX - 115;
        armazenaX = returnPositionX_porcentagem(event);
        var idDiv = event.target.id;
        let y = 120;
        //event.target é o elemento clicado...
        if (event.target && event.target.classList.contains('svg')) {
            //elemento encontrado...
            let nota = document.createElementNS(svgNS, "path");
            nota.setAttributeNS(null, "id", "nota" + id);
            nota.setAttributeNS(null, "stroke", "#000");
            nota.setAttributeNS(null, "d", getImagem(name));
            nota.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
            nota.setAttributeNS(null, 'x', armazenaX);
            nota.setAttributeNS(null, 'y', y);
            document.getElementById(idDiv).appendChild(nota);
            //armazenado o obj...
            vetObj.push(nota);
            id++;
        }
    });
}
while (true) {
    setTimeout(function verifica() {
        vetObj.forEach(function (element, index, array) {
            element.setAttributeNS(null, 'transform', 'translate(' + returnPositionX_px(x) + ' ' + element.y + ')');
        });
        console.log(returnPositionX_px(x));
    }, 1000);
}