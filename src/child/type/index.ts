export class Child {
    [x: string]: unknown;
    constructor(
      public id: string,
      public firstname: string,
      public lastname: string,
      public partentId: string,
    ) {}
  }
  