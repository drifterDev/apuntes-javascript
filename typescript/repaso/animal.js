//  MIT License
//
// Copyright (c) 2023 Mateo Álvarez Murillo
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// This software and associated files are subject to the terms and conditions of
// the MIT License and are included in this distribution. A copy of the license
// can be found in the file LICENSE in the root of this distribution.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//Visibilidad
//Parametros por defecto
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  // constructor(raza=null) {
  function Animal(raza) {
    if (raza == null) {
      this.raza = "Anfibio";
    } else {
      this.raza = raza;
    }
  }
  Animal.prototype.getReino = function () {
    return this.reino;
  };
  Animal.prototype.setReino = function (reino) {
    this.reino = reino;
  };
  Animal.prototype.getRaza = function () {
    return this.raza;
  };
  Animal.prototype.setRaza = function (raza) {
    this.raza = raza;
  };
  return Animal;
})();
//Sobreescritura de metodos
var Gato = /** @class */ (function (_super) {
  __extends(Gato, _super);
  function Gato(raza, pelaje) {
    var _this = _super.call(this, raza) || this;
    _this.pelaje = pelaje;
    return _this;
  }
  Gato.prototype.getRaza = function () {
    return "Esta es la raza " + this.raza;
  };
  Gato.prototype.setRaza = function (raza) {
    this.raza = raza + ".";
  };
  return Gato;
})(Animal);
