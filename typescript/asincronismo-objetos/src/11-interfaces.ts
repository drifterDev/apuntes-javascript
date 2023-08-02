export interface Driver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 342,
// };

export class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(): boolean {
    //code
    return true;
  }
  connect(): void {
    //code
  }
}

export class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(): boolean {
    //code
    return true;
  }
  connect(): void {
    //code
  }
}
