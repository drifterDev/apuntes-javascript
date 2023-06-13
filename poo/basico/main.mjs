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

function videoPlay(id) {
  const urlSecreta = "https://.../" + id;
  console.log("Se esta produciendo " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://.../" + id;
  console.log("Se pausó " + urlSecreta);
}

class clase {
  constructor({ name, videoId }) {
    this.name = name;
    this.videoId = videoId;
  }

  reproducir() {
    videoPlay(this.videoId);
  }

  pausar() {
    videoPlay(this.videoId);
  }
}

//Indicamos que solo esto es accecible con el export
export class Student {
  constructor({ name, age, level }) {
    this.name = name;
    this.age = age;
    this.level = level;
  }

  get name() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }
}

var mateo = new Student({
  name: "Mateo",
  age: 18,
  level: "Universitario",
});
console.log(mateo.name);
