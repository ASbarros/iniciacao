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

function createClaveFa(idDiv) {
    let claveFa = document.createElementNS(svgNS, "path");
    let circuloDeCima = document.createElementNS(svgNS, "path");
    let circuloDeBaixo = document.createElementNS(svgNS, "path");

    let NumDiv = idDiv.substring(5, 6);

    claveFa.setAttributeNS(null, "id", "ClaveFa" + NumDiv);
    claveFa.setAttributeNS(null, "stroke", "#000");
    claveFa.setAttributeNS(null, "d", "M3252 11014 c-949 -103 -1759 -550 -2204 -1214 -87 -130 -195 -350 -242 -495 -179 -540 -118 -1200 144 -1580 66 -94 223 -246 326 -314 586 -388 1408 -351 1820 81 108 113 182 246 226 408 20 75 23 106 22 270 0 168 -3 194 -27 283 -33 123 -90 254 -153 349 -55 84 -221 253 -309 315 -78 56 -203 117 -285 140 -95 26 -309 23 -510 -7 -101 -15 -202 -24 -290 -24 -125 -1 -139 1 -185 24 -42 21 -55 35 -80 84 -38 76 -47 200 -20 293 135 472 967 928 1770 969 448 23 862 -111 1177 -380 311 -266 569 -781 667 -1331 48 -273 56 -374 56 -745 -1 -270 -5 -392 -18 -510 -84 -747 -250 -1337 -552 -1956 -589 -1211 -1557 -2209 -3305 -3404 -460 -315 -522 -361 -632 -479 -37 -39 -80 -95 -95 -124 -70 -135 -4 -267 135 -267 147 0 555 198 1237 602 928 549 1222 728 1545 939 349 229 776 538 1066 771 1276 1027 2059 2181 2293 3382 175 895 50 1718 -365 2408 -287 477 -755 904 -1284 1173 -365 185 -744 295 -1175 340 -178 19 -580 18 -753 -1z");    //apendando o elemento no corpo do svg...
    document.getElementById(idDiv).appendChild(claveFa);
    circuloDeCima.setAttributeNS(null, "id", "circuloDeCima" + NumDiv);
    circuloDeCima.setAttributeNS(null, "stroke", "#000");
    circuloDeCima.setAttributeNS(null, "d", "M1025.722,361.05c49.595-0.051,86.899,40.302,87.366,94.509   c0.474,55.003-38.034,97.991-87.497,97.67c-49.092-0.31-87.053-41.365-87.709-94.88   C937.175,403.325,975.289,361.123,1025.722,361.05z");
    //apendando o elemento no corpo do svg...
    document.getElementById(idDiv).appendChild(circuloDeCima);

    circuloDeBaixo.setAttributeNS(null, "id", "circuloDeBaixo" + NumDiv);
    circuloDeBaixo.setAttributeNS(null, "stroke", "#000");
    circuloDeBaixo.setAttributeNS(null, "d", "M1027.158,676.769c48.828,0.6,86.134,42.431,85.988,96.421   c-0.146,54.796-39.492,97.453-88.919,96.358c-48.763-1.086-86.411-43.227-86.331-96.658   C937.984,718.021,976.871,676.17,1027.158,676.769z");
    //apendando o elemento no corpo do svg...
    document.getElementById(idDiv).appendChild(circuloDeBaixo);
}

var idSeminima = 0;



var idColcheia = 0;

function createNota(name) {
    alert(vetId);
    $('#' + vetId).one('click', function createSeminima(event) {
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
    nota.addEventListener('click', '');
}