const prompt = require("prompt-sync")();
let jogarNovamente;

do{

let escolhaSuaJogada;
let jogadaArray = [];
let escolhaQuantRodada;
let lista = ['pedra','papel','tesoura'];
let elementoPc;
let pc = [];
let vitoriaPc = 0;
let vitoriaJogador = 0;

    console.log()
    console.log(`
    Olá, seja bem-vindo(a) ao jogo Jokenpô!`)
    console.log()
    console.log(`
    O jogo funciona da seguinte maneira`)
    console.log()
    console.log(`
    Você poderá escolher entre 3 elementos, e cada
    um deles vence de um, e perde para o outro.
    Pedra ganha da tesoura, mas perde para o papel
    Tesoura ganha do papel, mas perde para a pedra
    Papel ganha da pedra, mas perde para a tesoura`)
    console.log()

    
do{
    console.log()
    escolhaQuantRodada = +prompt(`Informe a quantidade de rodadas você deseja jogar: `)
    console.log()
    if(escolhaQuantRodada < 1 || escolhaQuantRodada > 20 || isNaN(escolhaQuantRodada)){

        console.clear()
        console.log(`Digite uma quantidade possível`)
    }
    else{
        console.log(`Vamos realizar ${escolhaQuantRodada} rodada(s)`)
        break;

    }
}while(true)
  


for(let cont = 0; cont < escolhaQuantRodada; cont ++){

 do{
        console.log()
        escolhaSuaJogada = (prompt(`Informe qual elemento deseja escolher essa vez (Pedra/Papel/Tesoura): `)).toLowerCase()
        console.log()
        
        if(escolhaSuaJogada !== "pedra" && escolhaSuaJogada !== "papel" && escolhaSuaJogada !== "tesoura"){
            
            console.clear()
            console.log(`Você digitou um elemento não existente!`)
                    
        }
        else{

            jogadaArray.push(escolhaSuaJogada)
            console.log(`Seu elemento escolhido para essa rodada foi ${escolhaSuaJogada}!`)
            break;
        }
}while(true)
       
                  

        console.log()
        console.log(`Agora é a minha vez!`)
        console.log()
        elementoPc = lista[Math.floor(Math.random() * lista.length)]
        pc.push(elementoPc)
        console.log(`Eu escolho o elemento ${elementoPc}`)
        console.log()

        if(escolhaSuaJogada == elementoPc){

            console.log(`A jogada deu empate!`)            
        }
        else if(
            escolhaSuaJogada == lista[0] && elementoPc == lista[1]||
            escolhaSuaJogada == lista[1] && elementoPc == lista[2]||
            escolhaSuaJogada == lista[2] && elementoPc == lista[0]){
            vitoriaPc ++

            console.log(`Sinto Muito! Eu venci :)`)
            
        }
        else if(
            escolhaSuaJogada == lista[1] && elementoPc == lista[0]||
            escolhaSuaJogada == lista[2] && elementoPc == lista[1]||
            escolhaSuaJogada == lista[0] && elementoPc == lista[2]){
        
            vitoriaJogador ++
            console.log(`Aeee! Você venceu!`)
            
        }

}     

if(vitoriaPc == vitoriaJogador){
    console.log()
    console.log(`Você ganhou ${vitoriaJogador} rodadas  x  Eu ganhei ${vitoriaPc} rodadas`)
    console.log()
    console.log(`Empatamos!`)
}
else if(vitoriaJogador < vitoriaPc){
    console.log()
    console.log(`Você ganhou ${vitoriaJogador} rodadas  x  Eu ganhei ${vitoriaPc} rodadas`)
    console.log()
    console.log(`Eu ganhei`)
}
else if(vitoriaJogador > vitoriaPc){
    console.log()
    console.log(`Você ganhou ${vitoriaJogador} rodadas  x  Eu ganhei ${vitoriaPc} rodadas`)
    console.log()
    console.log(`Você ganhou!`)
}

console.log()
do{

    jogarNovamente = (prompt(`Você deseja jogar novamente?`)).toLowerCase()

    if(jogarNovamente !== "nao" && jogarNovamente !== "sim"){
        console.clear()
        console.log(`Você digitou errado!`)
    }
    else if(jogarNovamente == "nao"){
        console.clear()
        console.log(`Até mais!`)
    }
           
}while(jogarNovamente !== "nao" && jogarNovamente !== "sim")

}while(jogarNovamente == "sim")