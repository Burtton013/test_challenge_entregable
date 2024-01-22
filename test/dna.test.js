const cadenaAdn = require("../dna.js");
test("Remover todas las bases no canonicas del adn en la cadena CTtAGgGGTA", () => {
    expect("CTAaGGgGTA").toMatch(/CTAGGGTA/);
  });
