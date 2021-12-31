
export default function CriaNovaOrdenacao(tamanhoArray,tamanhoBD) {
    let indexAleatorio;
    let ordemAleatoriaDosIndex= [];
    const ordemProvisoria = [];
    for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
    for(let i=0;i<tamanhoArray;i++) {
        indexAleatorio = Math.floor(Math.random() * tamanhoBD);
        ordemAleatoriaDosIndex[i] = indexAleatorio;
        // ordemProvisoria.splice(indexAleatorio,1);
    }
    return ordemAleatoriaDosIndex;
}