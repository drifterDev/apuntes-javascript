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

//Interfaces
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
//Clases
var Persona = /** @class */ (function () {
  function Persona(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }
  Persona.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
  };
  Persona.prototype.getNombre = function () {
    return this.nombre;
  };
  Persona.prototype.setCedula = function (cedula) {
    this.cedula = cedula;
  };
  Persona.prototype.getCedula = function () {
    return this.cedula;
  };
  return Persona;
})();
//Herencia
var Trabajador = /** @class */ (function (_super) {
  __extends(Trabajador, _super);
  function Trabajador(nombre, apellidos, edad, trabajo) {
    var _this = _super.call(this, nombre, apellidos, edad) || this;
    _this.trabajo = trabajo;
    return _this;
  }
  Trabajador.prototype.setTrabajo = function (trabajo) {
    this.trabajo = trabajo;
  };
  Trabajador.prototype.getTrabajo = function () {
    return this.trabajo;
  };
  return Trabajador;
})(Persona);
//Decoradores
// function educacion(nivel: string) {
//   return function (target: Function) {
//     target.prototype.promover = function (): void {
//       console.log("El estudiante tiene nivel educativo de: " + nivel);
//     };
//   };
// }
// @educacion("Bachiller")
// class Estudiante {
//   public nombre: string;
//   constructor(nombre: string) {
//     this.nombre = nombre;
//   }
// }
// var estudiante = new Estudiante("Mateo");
// estudiante.promover();
