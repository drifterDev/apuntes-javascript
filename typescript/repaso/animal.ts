//Visibilidad
//Parametros por defecto

interface SerVivo {
  getReino(): string;
  setReino(reino: string): void;
}

class Animal implements SerVivo {
  protected raza: string;
  public reino: string;
  // constructor(raza=null) {
  constructor(raza: string) {
    if (raza == null) {
      this.raza = "Anfibio";
    } else {
      this.raza = raza;
    }
  }

  public getReino(): string {
    return this.reino;
  }

  public setReino(reino: string): void {
    this.reino = reino;
  }

  protected getRaza(): string {
    return this.raza;
  }

  protected setRaza(raza: string): void {
    this.raza = raza;
  }
}

//Sobreescritura de metodos

class Gato extends Animal {
  public pelaje: string;
  constructor(raza: string, pelaje: string) {
    super(raza);
    this.pelaje = pelaje;
  }

  protected getRaza(): string {
    return "Esta es la raza " + this.raza;
  }

  protected setRaza(raza: string): void {
    this.raza = raza + ".";
  }
}
