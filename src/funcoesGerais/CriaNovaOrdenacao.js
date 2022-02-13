
export default function CriaNovaOrdenacao(tamanhoArray,tamanhoBD) {
    let indexAleatorio;
    let ordemAleatoriaDosIndex= [];
    const ordemProvisoria = [];
    for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
    for(let i=0;i<tamanhoArray;i++) {
        indexAleatorio = Math.floor(Math.random() * tamanhoBD);
        ordemAleatoriaDosIndex.indexOf(indexAleatorio) == -1? ordemAleatoriaDosIndex[i] = indexAleatorio: i--;
    }
    return ordemAleatoriaDosIndex;
}