const regex = /(\d{2})-(\d{2})-(\d{4})/;
const matchers = regex.exec("15-08-2004");
console.table(matchers);
