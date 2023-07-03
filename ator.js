let xAtor = 100;
let yAtor = 366;
let colisao = false
let meusPontos = 0;

function mostraAtor () {
  image(imagemDoAtor, xAtor, yAtor, 30, 30); 
}

function movimentaAtor() {
 if (keyIsDown(UP_ARROW)) {
   yAtor -= 3;
 }
  if (keyIsDown(DOWN_ARROW)) {
   yAtor += 3;
 }
}

function verificaColisao() {
  for (i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 10)
    if (colisao){
      voltaAtorPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos -=1
      }
    }
  }
}
function colidiu() {
  voltaAtorPosicaoInicial();
  //somColisao.play();
}
function voltaAtorPosicaoInicial(){
    yAtor = 366
}
function verificaEixoYAtor(){
  if (yAtor > 400){
    voltaAtorPosicaoInicial();
  }
}
function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}
function marcaPontos(){
  if(yAtor < 0){
    meusPontos += 1;
    //somPonto.play();
    voltaAtorPosicaoInicial();
  }
}
function pontosMaiorQueZero() {
  return meusPontos > 0
}
