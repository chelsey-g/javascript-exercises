// class animal {
//   constructor(opts) {
//     this.name = opts.name;
//     this.type = opts.type;
//   }

//   getName() {
//     return this.name;
//   }

//   getType() {
//     return this.type;
//   }
// }

// let animal1 = new animal({
//   name: "tomo",
//   type: "cat",
// });

// class person {
//   constructor(opts) {
//     this.name = opts.name;
//     this.age = opts.age;
//   }

//   introduce() {
//     return this.name + " " + this.age;
//   }
// }

// let person1 = new person({
//   name: "chelsey",
//   age: 30,
// });

// let res = introduce(person1);
// console.log(res);

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }

//   get certifications() {
//     return this._certifications;
//   }

//   addCertification(newCertification) {
//     this._certifications.push(newCertification);
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification("Genetics");
// console.log(nurseOlynyk.certifications);

// https://www.youtube.com/watch?v=2ZphE5HcQPQ

class Rectangle {
  constructor(_width, _height, _color) {
    console.log("The rectangle is being created!");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width + this.height;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}.`
    );
  }
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 5, "red");

console.log(myRectangle1.printDescription());
