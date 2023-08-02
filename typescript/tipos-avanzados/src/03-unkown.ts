let anyVar: any;
anyVar = 2341;
anyVar = 'haola';
anyVar = true;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

//El unkown es mejor que es any al verificar el tipado primero
let unknowVar: unknown;
unknowVar = 2341;
unknowVar = true;
unknowVar = [];
unknowVar = {};
unknowVar = 'haola';

if (typeof unknowVar === 'string') {
  console.log(unknowVar.toUpperCase());
}

if (typeof unknowVar === 'boolean') {
  let isNew2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
