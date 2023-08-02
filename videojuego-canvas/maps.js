// MIT License

// Copyright (c) 2023 Mateo Álvarez Murillo

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

"use strict";
/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  "-": " ",
  O: "🏯",
  X: "💣",
  I: "🍓",
  Q: "💥",
  PLAYER: "🐱‍👤",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "💀",
  W: "🌟",
};
const falla = `
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
QQQQQQQQQQ
`;
const maps = [];
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
`);
maps.push(`
O--XXXXXXX
X--XXXXXXX
XX----XXXX
X--XX-XXXX
X-XXX--XXX
X-XXXX-XXX
X---XX--XX
XX--XXX-XX
XXXX---IXX
XXXXXXXXXX
`);
maps.push(`
I-----XXXX
XXXXX-XXXX
XX----XXXX
XX-XXXXXXX
XX-------X
XXXXXXXX-X
XX-------X
XX-XXXXXXX
XX-----OXX
XXXXXXXXXX
`);
maps.push(`
O---------
-XXXX-XXX-
-X----XX--
-X-XXXXXX-
-X-------X
  --XXXXXX-X
  XX---X---X
  -X-XX--XX-
  -IXX--XX-X
  X----XX--X
  `);
maps.push(`
  XX-----XXX
  X--XXX--XX
  --XXXXX-XX
  -XXXIXX--X
  --X--XXX--
  X---XXXXX-
  XXXXXXXX--
  X----XX--X
  XOXX----XX
  XXXXXXXXXX
  `);

maps.push(`
    WW--WW--WW
    W--WWWW--W
    --WW--WW--
    -WW-WW-WW-
    WW-WWWW-WW
    WW-WWWW-WW
    -WW-WW-WW-
    --WW--WW--
    W--WWWW--W
    WW--WW--WW
  `);
