var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        // MAKE SOUND VIA CONSTRUCTOR
        // private readonly makeSound: string;
        // constructor(makeSound: string) {
        //     this.makeSound = makeSound;
        // }
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "makeSound", {
        get: function () {
            return 'Woef';
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        // MAKE SOUND VIA CONSTRUCTOR
        // private readonly makeSound: string;
        // constructor(makeSound: string) {
        //     this.makeSound = makeSound;
        // }
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "makeSound", {
        get: function () {
            return 'Miauw';
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        // MAKE SOUND VIA CONSTRUCTOR
        // private readonly makeSound: string;
        // constructor(makeSound: string) {
        //     this.makeSound = makeSound;
        // }
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "makeSound", {
        get: function () {
            return 'I am a pirate';
        },
        enumerable: false,
        configurable: true
    });
    return Parrot;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
// MAKE SOUND VIA CONSTRUCTOR
// zoo.addAnimal(new Dog("Woef"));
// zoo.addAnimal(new Cat("Miauw"));
// zoo.addAnimal(new Parrot("I am a pirate"));
// zoo.animals.forEach((animal) => {
//     document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
zoo.addAnimal(new Dog);
zoo.addAnimal(new Cat);
zoo.addAnimal(new Parrot);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});
