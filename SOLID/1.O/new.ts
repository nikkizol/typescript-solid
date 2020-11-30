class Dog {
    private _name;

    // MAKE SOUND VIA CONSTRUCTOR
    // private readonly makeSound: string;
    // constructor(makeSound: string) {
    //     this.makeSound = makeSound;
    // }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    get makeSound() {
        return 'Woef';
    }
}

class Cat {
    private _name;

    // MAKE SOUND VIA CONSTRUCTOR
    // private readonly makeSound: string;
    // constructor(makeSound: string) {
    //     this.makeSound = makeSound;
    // }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    get makeSound() {
        return 'Miauw';
    }
}

class Parrot {
    private _name;

    // MAKE SOUND VIA CONSTRUCTOR
    // private readonly makeSound: string;
    // constructor(makeSound: string) {
    //     this.makeSound = makeSound;
    // }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    get makeSound() {
        return 'I am a pirate';
    }
}

class Zoo {
    private _animals: Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

}

let zoo = new Zoo;

// MAKE SOUND VIA CONSTRUCTOR
// zoo.addAnimal(new Dog("Woef"));
// zoo.addAnimal(new Cat("Miauw"));
// zoo.addAnimal(new Parrot("I am a pirate"));
// zoo.animals.forEach((animal) => {
//     document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");

zoo.addAnimal(new Dog);
zoo.addAnimal(new Cat);
zoo.addAnimal(new Parrot);
zoo.animals.forEach((animal: any) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");

})
