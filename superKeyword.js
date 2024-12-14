//  super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
//  this = this object
//  super = the parent

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

class Hawk extends Animal {
  constructor(name, wingspan) {
    super(name);
    this.wingspan = wingspan;
  }
}

const rabbit = new Rabbit("White Rabbit", "white");
console.log(rabbit.name); // White Rabbit

const fish = new Fish("Goldfish", "small");
console.log(fish.name); // Goldfish

const hawk = new Hawk("Eagle", "long");
console.log(hawk.name); // Eagle
