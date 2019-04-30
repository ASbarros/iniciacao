/**
 * classe onde vai ter todas as funcionalidades das notas
 * @author anderson dos santos de barros
 */
function createCompassFormula(idDiv, name, x, y) {
    let CF = document.createElementNS(svgNS, "path"),
        NumDiv = idDiv.substring(5, 6);
    CF.setAttributeNS(null, "id", name + NumDiv);
    CF.setAttributeNS(null, "stroke", "#000");
    CF.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
    CF.setAttributeNS(null, "d", getImagem(name));
    document.getElementById(idDiv).appendChild(CF);
    //apendando o elemento no corpo do svg...
}

var vetObj = [],
//vetor para atualizar a posicao das notas,
//guarda os ids das notas...
    id = 0;

function createNota(_name) {
    //adicionando um evento ao todos os elementos linhas additional...
    $('.svg').one('click', function (e) {
        //event.target é o elemento clicado...
        if (e.target && e.target.classList.contains('suplementar')) {
            //elemento encontrado...

            let x = e.clientX;
            let idDiv = e.target.id;
            let objNota = new getImagem(_name);
            //objeto...
            let y = returnPositionY_px(idDiv);
            //salvando as coordenadas x, y...
            let armazenaX = returnPositionX_porcentagem(x - objNota.x);
            let nota = document.createElementNS(svgNS, "path");
            nota.setAttributeNS(null, "id", "nota" + id);
            nota.setAttributeNS(null, "stroke", "#000");
            nota.setAttributeNS(null, "d", objNota.imagem);
            nota.setAttributeNS(null, 'transform', 'translate(' + (x - objNota.x)
                + ' ' + (y - objNota.y) + ')');
            nota.setAttributeNS(null, 'x', armazenaX);
            nota.setAttributeNS(null, 'y', (y - objNota.y));
            document.getElementById(idDiv.substring(idDiv.length - 6, idDiv.length))
                .appendChild(nota);
                vetObj.push('nota' + id);
                //armazenado id do obj...
            id++;
        }
        else createNota(_name);
        //se o click nao for em cima da linha, ja chamar a funcao novamente...
    });
}
window.onresize = () => {
    for (let i = 0; i < vetObj.length; i++) {
        let a = document.getElementById(vetObj[i]);
        a.removeAttributeNS(null, 'transform', a.localName);
        //removendo o atributo antigo...
        a.setAttributeNS(null, 'transform',
        //inserindo um novo atributo com a posicao atual
            'translate(' + (returnPositionX_px(a.getAttributeNS(null, 'x', a.localName))) +
            ' ' + a.getAttributeNS(null, 'y', a.localName) + ')'
        );
    }
}