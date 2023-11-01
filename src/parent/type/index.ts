export class Parent {
    [x: string]: unknown;
    constructor(
      public id: string,
      public firstname: string,
      public secondname: string,
      public childId: string,
    ) {}
  }
  