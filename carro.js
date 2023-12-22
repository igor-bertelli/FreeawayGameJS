// codigo do carro

// altura e largura de todos os carros
let alturaCarro = 35;
let comprimentoCarro = 35;

//posicoes em x e y dos carros em ordem e a velocidade
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5 , 3.2, 5, 3.3, 2.3];

function mostraCarro(){
  for (let i = 0; i< imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i=0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for( let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
      }
    }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}
