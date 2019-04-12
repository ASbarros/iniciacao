/**
 * classe auxiliar
 * para metodos que nao estao em uma classe especifica
 * @author anderson dos santos de barros
 */

function returnPositionY(id) {
    if (id.substring(11, 14) == 'sup') {
        if (id.substring(15, 16) == 1) {
            return 35;
        }
        if (id.substring(15, 16) == 2) {
            return 30;
        }
        if (id.substring(15, 16) == 3) {
            return 25;
        }
        if (id.substring(15, 16) == 4) {
            return 20;
        }
        if (id.substring(15, 16) == 5) {
            return 15;
        }
    }
    else {
        if (id.substring(15, 16) == 1) {
            return 65;
        }
        if (id.substring(15, 16) == 2) {
            return 70;
        }
        if (id.substring(15, 16) == 3) {
            return 75;
        }
        if (id.substring(15, 16) == 4) {
            return 80;
        }
        if (id.substring(15, 16) == 5) {
            return 85;
        }
    }
}
function returnPositionX(event) {
    //retorna a posicao do click em porcentagem para qualquer tela...
    let x = (event.pageX * 100) / $(window).width();
    return x;
}

//funcao que remove...
function removeLine(id) {
    //usando jquery...
    $('#' + id).remove();
}
function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}