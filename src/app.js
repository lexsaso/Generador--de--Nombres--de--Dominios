let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

// 1. A la palabra de esta vuelta la llamamos "pronombreDeLaLista"
pronoun.forEach(function (pronombreDeLaLista) {

  // 2. A la palabra de esta vuelta la llamamos "adjetivoDeLaLista"
  adj.forEach(function (adjetivoDeLaLista) {

    // 3. A la palabra de esta vuelta la llamamos "sustantivoDeLaLista"
    noun.forEach(function (sustantivoDeLaLista) {

      // Juntamos las tres palabras que tenemos en la mano en este momento
      let baseDomain = pronombreDeLaLista + adjetivoDeLaLista + sustantivoDeLaLista;

      // 4. Recorremos las extensiones y las imprimimos con UN SOLO console.log que se ejecuta por cada una
      extensions.forEach(function (extensionDeLaLista) {
        console.log(baseDomain + extensionDeLaLista);
      });
    });
  });