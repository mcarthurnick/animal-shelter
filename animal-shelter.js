const animal_data = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger=50){
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger
    }
    
    greet(){
        console.log(`Hi, I'm ${this.name} the ${this.species}`)
    }

    feed(){
        this.hunger = this.hunger - 20;
        console.log('Yum, I love food')
    }

}

class AnimalShelter {
    constructor(){
        this.animals = []
    }
    addAnimal(animal){
        this.animals.push(animal);
    }

    adopt(animal){
       const adoptedIndex = this.animals.indexOf(animal);
       this.animals.splice(adoptedIndex, 1)
    }

    getAnimalsBySpecies(type){
        return this.animals.filter(animal => animal.species === type);
    }
}

const shelter = new AnimalShelter();


for(let i = 0; i < animal_data.length; i++){
    let an = animal_data[i];
    const animal = new Animal(an.name, an.species, an.color, an.hunger = 50)
    shelter.addAnimal(animal);
}

console.log('shelter.getAnimalsBySpecies', shelter.getAnimalsBySpecies('dog'));
