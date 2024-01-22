function cadenaAdn(adn) {
    if (adn === '') {
       return '';
    }
    let adnProcesado = '';
    for (let i = 0; i < adn.length; i++) {
       let base = adn[i];
       if (base === 'C' || base === 'T' || base === 'A' || base === 'G') {
         adnProcesado += base;
       }
    }
    return adnProcesado;
   }

   module.exports = cadenaAdn;