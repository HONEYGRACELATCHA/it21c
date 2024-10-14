//Input
const person1 = {
    name: "Honey Gace",
    age: 19,
    hobby: "Reading",
}
//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Hobby: " + person1.hobby);
console.log("--------------------------------");
// Class definition
class Person {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobby: " + this.hobby);
    }
}

