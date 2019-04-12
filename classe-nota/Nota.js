/**
 * classe onde vai ter todas as funcionalidades das notas
 * @author anderson dos santos de barros
 */

function createClaveSol(idDiv) {
    let claveSol = document.createElementNS(svgNS, "path");
    let NumDiv = idDiv.substring(5, 6);
    claveSol.setAttributeNS(null, "id", "ClaveSol" + NumDiv);
    claveSol.setAttributeNS(null, "stroke", "#000");
    claveSol.setAttributeNS(null, "d", "M48.688 115.805 c-5.427-0.1409-11.774 12.818-11.563 24.375 0.049 3.52 1.16 10.659 2.781 19.625-10.223 10.581-22.094 21.44-22.094 35.688-0.163 13.057 7.817 29.692 26.75 29.532 2.906-0.02 5.521-0.38 7.844-1 1.731 9.49 2.882 16.98 2.875 20.44 0.061 13.64-17.86 14.99-18.719 7.15 3.777-0.13 6.782-3.13 6.782-6.84 0-3.79-3.138-6.88-7.032-6.88-2.141 0-4.049 0.94-5.343 2.41-0.03 0.03-0.065 0.06-0.094 0.09-0.292 0.31-0.538 0.68-0.781 1.1-0.798 1.35-1.316 3.29-1.344 6.06 0 11.42 28.875 18.77 28.875-3.75 0.045-3.03-1.258-10.72-3.156-20.41 20.603-7.45 15.427-38.04-3.531-38.184-1.47 0.015-2.887 0.186-4.25 0.532-1.08-5.197-2.122-10.241-3.032-14.876 7.199-7.071 13.485-16.224 13.344-33.093 0.022-12.114-4.014-21.828-8.312-21.969zm1.281 11.719c2.456-0.237 4.406 2.043 4.406 7.062 0.199 8.62-5.84 16.148-13.031 23.719-0.688-4.147-1.139-7.507-1.188-9.5 0.204-13.466 5.719-20.886 9.813-21.281zm-7.719 44.687c0.877 4.515 1.824 9.272 2.781 14.063-12.548 4.464-18.57 21.954-0.781 29.781-10.843-9.231-5.506-20.158 2.312-22.062 1.966 9.816 3.886 19.502 5.438 27.872-2.107 0.74-4.566 1.17-7.438 1.19-7.181 0-21.531-4.57-21.531-21.875 0-14.494 10.047-20.384 19.219-28.969zm6.094 21.469c0.313-0.019 0.652-0.011 0.968 0 13.063 0 17.99 20.745 4.688 27.375-1.655-8.32-3.662-17.86-5.656-27.375z");

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

function createSeminima(idDiv, nome) {
    let x = 50, y = 143;
    let seminima = document.createElementNS(svgNS, "path");
    seminima.setAttributeNS(null, "id", "seminima" + idSeminima);
    seminima.setAttributeNS(null, "stroke", "#000");
    seminima.setAttributeNS(null, "d", getImagem(nome));
    seminima.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');

    document.getElementById(idDiv).appendChild(seminima);
    idSeminima++;
}

var idColcheia = 0;
function createColcheia(idDiv) {
    let x = 80, y = 125;
    let colcheia = document.createElementNS(svgNS, "path");
    colcheia.setAttributeNS(null, "id", "colcheia" + idColcheia);
    colcheia.setAttributeNS(null, "stroke", "#000");
    colcheia.setAttributeNS(null, "d", "M 126.929688 76.734375 C 126.929688 75.644531 126.9375 74.792969 126.929688 73.941406 C 126.894531 67.5 126.859375 48.347656 126.816406 41.90625 C 126.789062 37.925781 126.734375 33.949219 126.71875 29.96875 C 126.71875 29.609375 126.417969 28.960938 127.320312 29.046875 C 128.054688 29.113281 129.074219 28.542969 129.425781 29.714844 C 130.789062 34.21875 133.957031 37.730469 138.609375 40.359375 C 141.175781 41.8125 143.394531 43.472656 144.316406 46.007812 C 145.304688 48.714844 144.039062 51.582031 141.1875 53.09375 C 141.023438 53.183594 140.84375 53.246094 140.652344 53.328125 C 141.15625 52.347656 141.777344 51.445312 142.09375 50.476562 C 142.9375 47.910156 141.757812 45.78125 139.535156 44.035156 C 138.074219 42.882812 136.335938 41.96875 134.847656 40.839844 C 133.207031 39.597656 131.710938 38.226562 130.148438 36.910156 C 130.011719 36.796875 129.855469 36.699219 129.484375 36.4375 C 129.484375 37.871094 129.472656 39.113281 129.484375 40.355469 C 129.523438 43.589844 129.589844 46.824219 129.613281 50.058594 C 129.660156 55.984375 129.6875 74.621094 129.714844 80.546875 C 129.734375 84.652344 127.011719 87.570312 122.105469 88.503906 C 117.902344 89.308594 113.9375 88.839844 110.683594 86.34375 C 106.921875 83.453125 107.273438 78.988281 111.351562 76.378906 C 115.457031 73.75 121.699219 73.65625 125.945312 76.164062 C 126.191406 76.308594 126.4375 76.449219 126.929688 76.734375 Z M 126.929688 76.734375 ");
    colcheia.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');

    document.getElementById(idDiv).appendChild(colcheia);
    idColcheia++;
}