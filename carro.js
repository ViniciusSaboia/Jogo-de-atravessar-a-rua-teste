let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40 , 96, 150, 210, 262 , 318];
let velocidadeCarros = [2, 2.5, 3.5, 5, 3.3, 2.7];
let comprimentoCarros = 50;
let alturaCarros = 40;




function mostraCarro() {
  for (i = 0; i < imagemCarros.length; i ++){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}
function movimentaCarro() {
  for (i = 0; i < xCarros.length; i ++){
      xCarros[i] -= velocidadeCarros[i]
  }
}
function verificaEixoXCarros() {
  for (i = 0; i < xCarros.length; i ++){
      if (xCarros[i] < -40){
        xCarros[i] = 500
      }
  }
}

