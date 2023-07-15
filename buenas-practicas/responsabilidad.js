// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";
class UserAuth {
  user = "";

  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return true;
  }
}

class UserSettings extends UserAuth {
  settings = "";

  constructor(user, settings) {
    super(user);
    this.settings = settings;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      console.log("Puede modificar su configuración");
    }
    console.log("No tiene acceso");
  }
}
