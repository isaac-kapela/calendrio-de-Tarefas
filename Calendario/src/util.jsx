import dayjs from 'dayjs';

export function getMes(mes = dayjs().month()){
  const ano = dayjs().year()
  const primeiroDiaMes = dayjs( new Date( ano, mes, -1)).day()
    let contagemDoMesAtual = 0 - primeiroDiaMes
  const diasMatriz =  new Array(5).fill([]).map(() => {
   return new Array(7).fill(null).map(() => {
        contagemDoMesAtual++
        return dayjs(new Date(ano, mes, contagemDoMesAtual))
        
    })

})

    return diasMatriz
}