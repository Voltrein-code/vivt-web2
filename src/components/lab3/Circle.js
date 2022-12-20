/* eslint-disable no-underscore-dangle */
export default class Circle {
  constructor(x, y, d) {
    this._x = x;
    this._y = y;
    this._d = d;
  }

  /*
  в JavaScript не предусмотрена перегрузка классов, поэтому в качестве второго способа
  создан метод получения данных
  */

  // getData(x, y, d) {

  // }

  getCircleArea() {
    this.result = ((3.14 ** 2) * this._d) / 2;
    return this.result;
  }
}
