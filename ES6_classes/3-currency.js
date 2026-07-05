export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
