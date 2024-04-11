//Getters
export class MyDate {
  constructor(
    public year: number = 2004,
    public month: number = 7,
    private _day: number = 15
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  //Se puede acceder como si fuera una propiedad
  //Pero en realidad es un metodo
  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2004, 7, 15);
console.log('(2004,7,15)=>', myDate.printFormat());
console.log(myDate.day);
// myDate.day=234 ERROR
console.log('2004 is leap year', myDate.isLeapYear);
const myDate2 = new MyDate(2000, 7, 15);
const myDate3 = new MyDate(2001, 7, 15);
console.log('2000 is leap year', myDate2.isLeapYear);
console.log('2001 is leap year', myDate3.isLeapYear);
