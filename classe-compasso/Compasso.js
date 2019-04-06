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
    createLine(0.1, y1, 0.1, y2, "compasso" + id, idDiv, "%", "compasso", "");
    id++;
    for (let i = 1; i < NumCompasso; i++ , EspaCompasso += TamCompasso, id++) {
        createLine(EspaCompasso, y1, EspaCompasso, y2, "compasso" + id, idDiv, "%", "compasso", "");
    }
    createLine(99.9, y1, 99.9, y2, "compasso" + id, idDiv, "%", "compasso", "");
}