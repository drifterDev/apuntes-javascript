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

"use strict";
let name = "Mateo"; //Scope de bloque
const pi = 3.14616; //Si no cambia
var age = 24; //Si no respeta el scope

//Nombres pronunciables y expresivos.
// Preferentemente en inglés usando camelCase, evitando guiones - o _ y abreviaturas.

//Nombres sin información técnica.
// Evitar nombres con relación a la tecnología (tipo de datos, clases, etc). Ej. “arrayNames” --> “namesList”

//Usar lenguaje ubicuo: aquel que se construye a partir del lenguaje que usan los expertos
// Es decir: crear un lenguaje en común para desarrolladores e interesados, determinando palabras de uso común.

// Arrays: Plural.
const nums = [1, 2, 3, 4, 5];
const names = ["Cande", "Alex", "Mariana"];
const colors = ["red", "green", "blue"];

// Booleanos: Con prefijos “is”, “has” y “can”. (“es verdadero”, “tiene/contiene x”, “puede hacer x”).
const isActive = true;
const isCorrect = false;
const canWrite = true;
const hasUser = false;

// Números: Con prefijos “min”, “max” y “total”.
let totalResult = 3543;
const minNumber = 20;
const PI = 3.14159;

// Funciones: Verbo + sustantivo/s (ya que son acciones).
// sendAlert()
// createObject()
// setPassword()
// getResults()

//Clases:
class School {}
class Service {}
class Account {}

// …de Acceso: get + sustantivo
// …de Modificación: set + sustantivo;
// …de Predicado: is + sustantivo;

// Clases: Sustantivos (no genéricos)
