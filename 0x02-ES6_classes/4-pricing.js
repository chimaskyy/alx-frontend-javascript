/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (!Number.isInteger(value)) throw TypeError('amount must be a number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw TypeError('amount must be a number');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} ${this.currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
