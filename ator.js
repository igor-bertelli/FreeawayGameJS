//codigo do ator
let xAtor = 85;
let yAtor = 366;
let alturaAtor = 40;
let larguraAtor = 40;
let hit = false
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, alturaAtor, larguraAtor);
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (voltaAtor()){
    yAtor += 3;
    }
  }
}
function verificaColisao(){
  for ( let i =0; i < imagemCarros.length; i++){     
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15) 
  if(colisao){
    voltaAtorAoInicio();
    somColisao.play();
    if(pontosMaiorQZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorAoInicio(){
  yAtor = 366;
}

function meuPlacar (){
  textAlign(CENTER);
  textSize(27);
  fill(color(128,0,0));
  text(meusPontos, width / 5, 27);
}

function marcaPonto (){
 if (yAtor < 15){
   meusPontos += 1;
   voltaAtorAoInicio();
   somPonto.play();
 }
}
function pontosMaiorQZero (){
  return meusPontos > 0;
}

function voltaAtor(){
  return (yAtor < 366)
}
