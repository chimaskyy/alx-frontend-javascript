export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cloned = new this.constructor(this._brand, this._motor, this._color);
    return cloned;
  }
}
