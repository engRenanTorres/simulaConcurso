


export default function FiltroQuestoes(ano) {
    if(ano==undefined) return require('../../dados/questoes.json');

    const bancoDeQuestoesOriginal = require('../../dados/questoes.json');
    const bancoDeQuestoes = bancoDeQuestoesOriginal.filter((questao)=>questao.ano==ano);
    // console.log(bancoDeQuestoes[2].ano);
    // if (quantidadeDeQuestoesPorVez > bancoDeQuestoes.length) setQuantidadeDeQuestoes(bancoDeQuestoes.length);
    return bancoDeQuestoes;
}

export function FiltroAssunto(assunto) {
    if(assunto==undefined) return require('../../dados/questoes.json');

    const bancoDeQuestoesOriginal = require('../../dados/questoes.json');
    const bancoDeQuestoes = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto==assunto);
    // console.log(bancoDeQuestoes[2].ano);
    // if (quantidadeDeQuestoesPorVez > bancoDeQuestoes.length) setQuantidadeDeQuestoes(bancoDeQuestoes.length);
    return bancoDeQuestoes;
}



function AssuntosUnicos(bancoDeQuestoes) {
let arr = []
bancoDeQuestoes.forEach((item,index)=>arr[index]=item.assunto);
let novaArr = arr.filter(function(este, i) {
     return arr.indexOf(este) === i;
});
console.log(novaArr);
}