export class book {

  //globals
  private _course:string;
  private _isbn :number;
  private _price:number;
  private _info :string;

  constructor(course:string, isbn:number, price:number) {
    this._course = course;
    this._isbn  = isbn;
    this._price = price;
  }

  getTitle(): string {
    return this._course;
  }

  setTitle(course: string) {
    this._course = course;
  }

  getIsbn(): number {
    return this._isbn;
  }

  setIsbn(value: number) {
    this._isbn = value;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(value: number) {
    this._price = value;
  }

  toString(){
      this._info =
        ("Title: " + this._course + "     " +
          "ISBN: " + this._isbn +  "     " +
          "Price: " + this._price);
    return this._info;
  }
}
