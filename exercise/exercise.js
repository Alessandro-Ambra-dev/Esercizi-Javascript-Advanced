const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = "Simon";



// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);



// La copia di un oggetto, può essere fatta in due modi:

// 1. Copia by reference => Ovvero si crea un oggetto, partendo da quello iniziale, senza che il nuovo oggetto vada a 
//  sovrascrivere quello che abbiamo appena copiato; Viene perciò creato il nuovo oggetto in un diverso slot di memoria del nostro PC;

// 2. Copia by value => Con la copia by value, creiamo un clone del primo oggetto, quando andiamo a cambiare i valori del secondo oggetto,
// questi influenzeranno anche l'oggetto di partenza, poiché i due oggetti occupano lo stesso slot di memmoria;