export class Tech {
  logo: string;
  name: string;

  constructor(init? : Partial<Tech>){
    Object.assign(this, init);
  }
}
