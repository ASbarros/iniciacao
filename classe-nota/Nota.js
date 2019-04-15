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



var idSeminima = 0;

function createNota(name) {
    $('.svg').one('click', function createSeminima(event) {
        let x = event.clientX - 115;
        var idDiv = event.target.id;
        let y = 120;
        let seminima = document.createElementNS(svgNS, "path");
        seminima.setAttributeNS(null, "id", name + idSeminima);
        seminima.setAttributeNS(null, "stroke", "#000");
        seminima.setAttributeNS(null, "d", getImagem(name));
        seminima.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
        document.getElementById(idDiv).appendChild(seminima);
        idSeminima++;
    });
}