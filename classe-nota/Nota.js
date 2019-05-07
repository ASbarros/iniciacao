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

var vetObjNote = [],
    //vetor para atualizar a posicao das notas,
    //guarda os ids das notas...
    vetObjLine,
    //vetor para guardar as linhas de uniao entre as notas...
    id = 0;

function createNote(_name) {
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
            nota.setAttributeNS(null, 'name', _name);
            nota.setAttributeNS(null, "stroke", "#000");
            nota.setAttributeNS(null, "class", "nota");
            nota.setAttributeNS(null, "d", objNota.imagem);
            nota.setAttributeNS(null, "lineOrigin", e.target.id);
            nota.setAttributeNS(null, 'transform', 'translate(' + (x - objNota.x) +
                ' ' + (y - objNota.y) + ')');
            nota.setAttributeNS(null, 'x', armazenaX);
            nota.setAttributeNS(null, 'y', (y - objNota.y));
            document.getElementById(idDiv.substring(idDiv.length - 6, idDiv.length))
                .appendChild(nota);
            vetObjNote.push('nota' + id);
            //armazenado id do obj...
            id++;
        } else createNote(_name);
        //se o click nao for em cima da linha, ja chamar a funcao novamente...
    });
}

function join() {
    //funcao para juntar as notas, colocar uma linha em cima delas...
    let Notas = [];
    //vetor para guadar as notas selecionadas...
    let numeroDeNotas = 0;
    //variavel numeroDeNotas para garantir que duas notas sejam selecionadas...
    $('.svg').one('click', (e) => {
        //pegando a primeira nota...
        if (e.target && e.target.classList.contains('nota')) {
            //nota encontrada...
            if (Notas.indexOf(e.target.id) == -1) {
                //se a nota ainda nao tiver sido selecionada...
                Notas.push(e.target.id);
                //nota adicionada...
                numeroDeNotas++;
            }
            if (numeroDeNotas < 2) {
                $('.svg').one('click', (e) => {
                    //pegando a segunda nota...
                    if (e.target && e.target.classList.contains('nota')) {
                        //nota encontrada...
                        if (Notas.indexOf(e.target.id) == -1) {
                            //se a nota ainda nao tiver sido selecionada...
                            Notas.push(e.target.id);
                            //nota adicionada...
                            numeroDeNotas++;
                        }
                        if (numeroDeNotas == 2) {
                            let nota1 = document.getElementById(Notas[0]),
                                trans = nota1.getAttributeNS(null, 'transform', this.localName),
                                a = trans.split(' '),
                                x1 = returnPositionX_porcentagemSVG(apenasNumeros(a[0])),
                                y1 = returnPositionY(nota1.getAttributeNS(null, 'lineOrigin', this.localName)) - 13.5;

                            let nota2 = document.getElementById(Notas[1]);
                            trans = nota2.getAttributeNS(null, 'transform', this.localName);
                            let b = trans.split(' '),
                                x2 = returnPositionX_porcentagemSVG(apenasNumeros(b[0]));
                            y2 = returnPositionY(nota2.getAttributeNS(null, 'lineOrigin', this.localName)) - 13.5;
                            if (x2 < x1) {
                                //se a segunda nota for clikada primeiro...
                                let aux = x2;
                                x2 = x1;
                                x1 = aux;
                                aux = y2;
                                y2 = y1;
                                y1 = aux;
                            }
                            let obj = {
                                name: nota1.getAttributeNS(null, 'name', this.localName),
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2,
                                mom: nota1.getAttributeNS(null, 'lineOrigin', this.localName)
                            };
                            obj.mom = apenasNumeros(obj.mom.substring(obj.mom.length - 3, obj.mom.length));
                            if (changeNote(nota2) && changeNote(nota1)) createLineJoin(obj);
                            //se a troca das duas notas for bem suscedida, cria a linha de uniao entre elas...
                            else remove_id(nota2.id), remove_id(nota1.id);
                        }
                    }
                });
            }
        }
    });
}

function changeNote(_note) {
    //funcao para trocar as notas...
    try {
        let objSeminima = new getImagem('seminima');
        _note.removeAttributeNS(null, 'd', this.localName);
        _note.setAttributeNS(null, 'd', objSeminima.imagem);
        let trans = _note.getAttributeNS(null, 'transform', this.localName),
            a = trans.split(' '),
            x = apenasNumeros(a[0]),
            y = apenasNumeros(a[1]);
        if (_note.getAttributeNS(null, 'name', this.localName) === 'colcheia') {
            x -= 5;
            _note.removeAttributeNS(null, 'transform', this.localName);
            //removendo o atributo antigo...
            _note.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
            //inserindo um novo atributo com a posicao atual
            return true;
        } else if (_note.getAttributeNS(null, 'name', this.localName) === 'semicolcheia') {
            x = x - 5;
            _note.removeAttributeNS(null, 'transform', this.localName);
            //removendo o atributo antigo...
            _note.setAttributeNS(null, 'transform', 'translate(' + x + ' ' + y + ')');
            //inserindo um novo atributo com a posicao atual
            return true;
        }
    } catch {
        //se acontecer algum erro...
        return false;
    }
}

function createLineJoin(_obj) {
    if (_obj.name == 'colcheia') {
        createLine(_obj.x1 + 2.55, _obj.y1, _obj.x2 + 2.5, _obj.y2,
            'join' + _obj.name, 'idSVG' + _obj.mom, 'linejoincolcheia');
    } else if (_obj.name == 'semicolcheia') {
        createLine(_obj.x1 + 2.55, _obj.y1 - 1, _obj.x2 + 2.5, _obj.y2 - 1,
            'join' + _obj.name, 'idSVG' + _obj.mom, 'linejoinsemicolcheia');
        createLine(_obj.x1 + 2.55, _obj.y1 + 1, _obj.x2 + 2.5, _obj.y2 + 1,
            'join' + _obj.name, 'idSVG' + _obj.mom, 'linejoinsemicolcheia');
    }
}
window.onresize = () => {
    //sempre que houver mudanças no tamanho da tela...
    for (let i = 0; i < vetObjNote.length; i++) {
        let a = document.getElementById(vetObjNote[i]);
        a.removeAttributeNS(null, 'transform', this.localName);
        //removendo o atributo antigo...
        a.setAttributeNS(null, 'transform',
            //inserindo um novo atributo com a posicao atual
            'translate(' + ((returnPositionX_px(a.getAttributeNS(null, 'x', this.localName))) - 5) +
            ' ' + a.getAttributeNS(null, 'y', this.localName) + ')'
        );
    }
}