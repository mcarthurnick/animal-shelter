const animal_data = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger=50){
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger
    }
    
    greet(greeting = 'Hi'){
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }

    feed(food = 'food'){
        this.hunger = this.hunger - 20;
        console.log(`Yum, I love ${food}`)
    }

}

class Cat extends Animal {
    constructor(name, color, hunger = 50){
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet(){
        super.greet('Meow')
    }

    feed(){
        super.feed(this.food)
    }

}

class Dog extends Animal {
    constructor(name, color, hunger = 50){
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    greet(){
        super.greet('Woof')
    }

    feed(){
        super.feed(this.food)
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
    let animal;
    const hunger = an.hunger ? an.hunger : 50;
    if(an.species === 'cat'){
        animal = new Cat(an.name, an.color, hunger)
    } else if (an.species === 'dog'){
        animal = new Dog(an.name, an.color, hunger)
    } else {
        animal = new Animal(an.name, an.species, an.color, hunger)
    }
    shelter.addAnimal(animal);
}

for(let animal of shelter.animals){
    animal.greet();
    animal.feed();
}


