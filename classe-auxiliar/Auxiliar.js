/**
 * classe auxiliar
 * para metodos que nao estao em uma classe especifica
 * @author anderson dos santos de barros
 */

function returnPositionY(id) {
    let resposta = apenasNumeros(id.substring(id.length - 10, id.length - 5));
    return 85 - (2.5 * (resposta - 1))
}

function returnPositionY_px(id) {
    if (id.substring(10, 12) == 29) {
        return -34;
    }
    if (id.substring(10, 12) == 28) {
        return -24;
    }
    if (id.substring(10, 12) == 27) {
        return -14;
    }
    if (id.substring(10, 12) == 26) {
        return -4;
    }
    if (id.substring(10, 12) == 25) {
        return 6;
    }
    if (id.substring(10, 12) == 24) {
        return 16;
    }
    if (id.substring(10, 12) == 23) {
        return 26;
    }
    if (id.substring(10, 12) == 22) {
        return 36;
    }
    if (id.substring(10, 12) == 21) {
        return 46;
    }
    if (id.substring(10, 12) == 20) {
        return 56;
    }
    if (id.substring(10, 12) == 19) {
        return 66;
    }
    if (id.substring(10, 12) == 18) {
        return 76;
    }
    if (id.substring(10, 12) == 17) {
        return 86;
    }
    if (id.substring(10, 12) == 16) {
        return 96;
    }
    if (id.substring(10, 12) == 15) {
        return 100;
    }
    if (id.substring(10, 12) == 14) {
        return 116;
    }
    if (id.substring(10, 12) == 13) {
        return 126;
    }
    if (id.substring(10, 12) == 12) {
        return 126;
    }
    if (id.substring(10, 12) == 11) {
        return 136;
    }
    if (id.substring(10, 12) == 10) {
        return 146;
    }
    if (id.substring(10, 11) == 9) {
        return 156;
    }
    if (id.substring(10, 11) == 8) {
        return 166;
    }
    if (id.substring(10, 11) == 7) {
        return 176;
    }
    if (id.substring(10, 11) == 6) {
        return 186;
    }
    if (id.substring(10, 11) == 5) {
        return 196;
    }
    if (id.substring(10, 11) == 4) {
        return 206;
    }
    if (id.substring(10, 11) == 3) {
        return 216;
    }
    if (id.substring(10, 11) == 2) {
        return 226;
    }
    if (id.substring(10, 11) == 1) {
        return 230;
    }

}

function returnPositionX_porcentagem(event) {
    //retorna a posicao do click em porcentagem para qualquer tela...
    let x = (event.pageX * 100) / $(window).width();
    return x;
}
function returnPositionX_px(porcentagem) {
    //recebe como parametro a porcentagem da tela e retorna a posicao em pixes...
    let px = (porcentagem * $(window).width()) / 100;
    return px;
}

//funcao que remove...
function removeLine(id) {
    //usando jquery...
    $('#' + id).remove();
}
function apenasNumeros(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}