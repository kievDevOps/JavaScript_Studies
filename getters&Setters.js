//  getter = special method that makes a property readable
//  setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new Error("Name must be a string");
    }
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Age must be a positive number");
    }
    this._age = value;
  }
}

const person = new Person("John Doe", 30);

console.log(person.name); // John Doe
console.log(person.age); // 25

//  ---------------------------  //
