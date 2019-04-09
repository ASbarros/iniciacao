/**
 * classe auxiliar
 * para metodos que nao estao em uma classe especifica
 * @author anderson dos santos de barros
 */

function returnPositionY(id) {
    if (id.substring(11, 14) == 'sup') {
        if (id.substring(15, 16) == 1) {
            return 132;
        }
        if (id.substring(15, 16) == 2) {
            return 112;
        }
        if (id.substring(15, 16) == 3) {
            return 95;
        }
        if (id.substring(15, 16) == 4) {
            return 75;
        }
        if (id.substring(15, 16) == 5) {
            return 55;
        }
    }
    else {
        if (id.substring(15, 16) == 1) {
            return 244;
        }
        if (id.substring(15, 16) == 2) {
            return 263;
        }
        if (id.substring(15, 16) == 3) {
            return 282;
        }
        if (id.substring(15, 16) == 4) {
            return 300;
        }
        if (id.substring(15, 16) == 5) {
            return 319;
        }
    }
}

//funcao que remove...
function removeLine(id) {
    //usando jquery...
    $('#' + id).remove();
}