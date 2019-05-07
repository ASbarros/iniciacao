/**
 * classe compasso
 * @author anderson dos santos de barros
 */

//funcao para criar o compasso(as linhas verticais)...
function compasso(NumCompasso, idDiv) {
    //variavel responsavel por comtrolar o espacamento dos compassos...
    var EspaCompasso = 100 / NumCompasso;
    //para garantir o mesmo espacamento...
    var TamCompasso = EspaCompasso;

    let y1 = 40;
    let y2 = 60;

    let id = 0;
    id++;
    for (let i = 1; i < NumCompasso; i++, EspaCompasso += TamCompasso, id++) {
        createLine(EspaCompasso, y1, EspaCompasso, y2, "compasso" + id, idDiv, "compasso");
    }
    createLine(98.2, y1, 98.2, y2, "compasso" + id, idDiv, "compasso");
}