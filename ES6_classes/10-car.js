export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Define the species for cloning compatibility
  static get [Symbol.species]() {
    return this;
  }

  // Return a new empty instance of the current constructor/species
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
