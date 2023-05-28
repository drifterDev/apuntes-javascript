//Interfaces
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
}());
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
}(Persona));
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
