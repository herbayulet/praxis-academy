function warriors(durability, strength, hp, power) {
  this.durability = durability;
  this.strength = strength;
  this.hp = hp;
  this.power = power;
  this.strong = function () {
    return this.durability--;
  };
  this.item = function () {
    return this.strength++;
  };
  this.health = function () {
    return this.hp--;
  };
  this.damage = function () {
    return this.power++;
  };
  this.max = function (a) {
    if (this.strong <= a) {
      return "jangan jaga line sendirian";
    } else {
      return "udah kuat kan";
    }
  };
  this.min = function (b) {
    if (this.health >= b) {
      return "maju terus";
    } else {
      return "cepet recall";
    }
  };
}
let warriors1 = new warriors(1, 1, 1, 1);
warriors1.strong();
warriors1.item();
warriors1.health();
warriors1.damage();

console.log(warriors1.max(10));
console.log(warriors1.min(6));
