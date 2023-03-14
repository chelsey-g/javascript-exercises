// PLAIN OLD JAVASCRIPT OBJECT (POJO)

let person = {
  name: "Samuel L Jackson",
  title: "Badass Motherfucker",
  age: 55,
  location: "Log Angeles",
  whatIsMyName: function () {
    return this.name;
  },
  whatIsMyNameBitch: function () {
    return this.name.toUpperCase();
  },
};

// ES6 WAY

class Person {
  // name = 'Samuel L Jackson'
  // title = 'Badass Motherfucker'
  // age = 55
  // location = 'Los Angeles'
  constructor(opts) {
    this.name = opts.name;
    this.title = opts.title;
    this.age = opts.age;
    this.location = opts.location;
    this.alive = true;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  whatIsMyName() {
    return this.name;
  }
  whatIsMyNameBitch() {
    return this.name.toUpperCase();
  }
  eligibleForBenefits() {
    if (this.age > 63 && this.alive) {
      return true;
    } else {
      return false;
    }
  }
}

let person1 = new Person({
  name: "Samuel L Jackson",
  title: "Badass Motherfucker",
  age: 55,
  location: "Log Angeles",
});

let person2 = new Person({
  name: "Chelsey",
  title: "Badass Motherfucker",
  age: 30,
  location: "Killingworth",
});

let owner = "phishy";
let repo = "testRepo";

let commits = octokit.rest.repos.listCommits({
  owner,
  repo,
});
