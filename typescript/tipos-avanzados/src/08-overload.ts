function parseStr(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.split('');
  } else {
    return input.join('');
  }
}

console.log(parseStr('mateo'));
console.log(parseStr(['m', 'a', 't', 'e', 'o']));
