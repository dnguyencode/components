// class == a structure of object being created
// Instance properties == what's inside the object
// Instance method == what the class does
class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
    }
}

let myrectangle1 = new Rectangle(6, 5, 'blue');
let myrectangle2 = new Rectangle(10, 12, 'red');

// Getters and Setters

class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    // get area() {
    //     this.numOfRequestsForArea++;
    //     return (
    //         this.width * this.height
    //     )
    // }

    // set area(area) {
    //     this.width = Math.sqrt(area);
    //     this.height = this.width;
    // }

    // static method
    static equals(a, b) {
        return (a.width * a.height === b.width * b.height)
    }

    static isValidDimensions(width, height) {
        return (width === height);
    }
}

// let square1 = new Square(25);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// square1.area = 64;
// console.log(square1.height);

// console.log(square1.numOfRequestsForArea);

// Static methods: doesn't need instance of class

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6))

// Inheritance

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age); // call constructor of person

        //Custom behavior
        this.yearsOfExperience = _yearsOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`)
    }
}

// let person1 = new Person("Jeff", 45);
// let programmer1 = new Programmer("Dom", 56, 12);

const programmers = [
    new Programmer("Dom", 56, 12),
    new Programmer("Jeff", 24, 4)
]

// console.log(person1);
// console.log(programmer1)

function developSoftware(programmers) {
    // Develop Software
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);


// Polymorphism

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic Animal Sound!')
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound(); // call generic parent function
        console.log('Woof woof'); // call class specific function
    }
}

const a1 = new Animal('Dom');
const a2 = new Dog("Jeff");

a1.makeSound()
a2.makeSound()


// List Binding
const myList = document.getElementById("myList");

class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [
            'dcode',
            'is',
            'not bad'
        ];
    }

    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li; // makes an li tag with the text content
    }

    update() {
        // Remove existing <li> tags
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // Fill ul tags with li

        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.splice(index, 1);// remove item at index and number
        this.update()
    }
}

const listBinding1 = new ListBinding(myList);