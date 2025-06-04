class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, " + this.name + "!");
    }
}


const Fox = new Person('Fox', 20);

Fox.greet();