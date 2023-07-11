//Sería como paquetes en java o python
var Universidad;
(function (Universidad) {
  var Facultad = /** @class */ (function () {
    function Facultad(nombre) {
      this.nombre = nombre;
      console.log("Facultad " + nombre);
    }
    return Facultad;
  })();
  Universidad.Facultad = Facultad;
  var Salon = /** @class */ (function () {
    function Salon(sitio) {
      this.sitio = sitio;
      console.log("Salon en " + sitio);
    }
    return Salon;
  })();
  Universidad.Salon = Salon;
})(Universidad || (Universidad = {}));
var Facultad = Universidad.Facultad;
var minas = new Facultad("Minas");
