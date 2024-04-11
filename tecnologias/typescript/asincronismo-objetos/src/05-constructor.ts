//Constructor
//Se evita escribir más codigo
//Siempre se pone el nivel de acceso del atributo
export class MyDate {
  constructor(
    public year: number = 2004,
    public month: number = 7,
    private day: number = 15
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2004, 7, 15);
console.log('(2004,7,15)=>', myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('()=>', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022)=>', myDate3.printFormat());
