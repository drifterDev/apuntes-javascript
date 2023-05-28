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
