export class Education {
  diplome: string;
  university: string;
  year: string;
  universityLogo: string;
  descriptions: string[];

  constructor(init? : Partial<Education>){
    Object.assign(this, init);
  }
}
