function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  verificaEixoXCarros();
  verificaColisao();
  verificaEixoYAtor();
  incluiPontos();
  marcaPontos()
}

