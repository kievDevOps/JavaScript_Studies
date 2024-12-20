//  this = reference to the object where THIS is used (the object depends on the immediate context)
//  person.name = this.name

const person1 = {
  name: "Spongebob",
  favFood: "Hamburgers",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
  },
  eat: function () {
    console.log(`I am eating ${this.favFood}`);
  },
};

person1.sayHello();
person1.eat();
