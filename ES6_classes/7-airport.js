export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Изменяет строковое представление объекта, например: [object SFO]
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
