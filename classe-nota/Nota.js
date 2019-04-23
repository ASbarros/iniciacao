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
//vetor para atualizar a posicao das notas,
//guarda os ids das notas...
var vetObj = [];
var armazenaX, y;
var id = 0;
function createNota(name) {
    //adicionando um evento ao todos os elementos linhas additional...
    $('.svg').one('click', function (event) {
        //event.target é o elemento clicado...
        if (event.target && event.target.classList.contains('suplementar')) {
            //elemento encontrado...
            let x = event.clientX - 120;
            let idDiv = event.target.id;
            y = returnPositionY_px(idDiv);
            armazenaX = returnPositionX_porcentagem(event);
            let nota = document.createElementNS(svgNS, "path");
            nota.setAttributeNS(null, "id", "nota" + id);
            nota.setAttributeNS(null, "stroke", "#000");
            nota.setAttributeNS(null, 'width', '10%');
            nota.setAttributeNS(null, "d", getImagem(name));
            nota.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
            nota.setAttributeNS(null, 'x', armazenaX);
            nota.setAttributeNS(null, 'y', y);
            document.getElementById(idDiv.substring(idDiv.length - 6, idDiv.length)).appendChild(nota);
            //armazenado o obj...
            vetObj.push('nota' + id);
            id++;
        }
    });
}
window.onresize = () => {
    for (let i = 0; i < vetObj.length; i++) {
        let a = document.getElementById(vetObj[i]);
        //removendo o atributo antigo...
        a.removeAttributeNS(null, 'transform', a.localName);
        //inserindo um novo atributo com a posicao atual
        a.setAttributeNS(null, 'transform',
            'translate(' + (returnPositionX_px(a.getAttributeNS(null, 'x', a.localName)) - 115) + ' ' + y + ')'
        );
    }
}