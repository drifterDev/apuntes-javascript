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
