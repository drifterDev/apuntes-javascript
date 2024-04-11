//Setters
export class MyDate {
  constructor(
    public year: number = 2004,
    private _month: number = 7,
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

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  //Para hacer un set la propiedad debe ser privada

  set month(n: number) {
    if (n >= 0 && n <= 11) {
      this._month = n;
    }
  }
}

const myDate = new MyDate(2004, 7, 15);
console.log(myDate);
myDate.month = 78;
console.log(myDate);
myDate.month = 4;
console.log(myDate);
