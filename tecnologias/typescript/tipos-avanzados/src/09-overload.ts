export function parseStr(input: string[]): string;
export function parseStr(input: string): string[];

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  }
}

//Ahora typescript reconoce el retorno al invocar la función
console.log(parseStr('mateo'));
console.log(parseStr(['m', 'a', 't', 'e', 'o']));
