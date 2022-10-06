const listaLivros = require("./array");

function encontraMenores(pivot, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivot.preco) {
      menores++;
    }
  }

  return menores;
}

console.log(encontraMenores(listaLivros[2], listaLivros));
