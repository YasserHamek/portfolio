export class Model{
  title: string;
  descriptions: string[];

  constructor(init? : Partial<Model>){
    Object.assign(this, init);
  }
}

export class Education extends Model{
  university: string;
  year: string;
  universityLogo: string;

  constructor(init? : Partial<Education>){
    super(init);
    Object.assign(this, init);
  }
}

export class Project extends Model{
  images: string[];
  technologies: string[];
  cat: string;

  constructor(init? : Partial<Project>){
    super(init);
    Object.assign(this, init);
  }
}

export class Tech {
  logo: string;
  name: string;

  constructor(init? : Partial<Tech>){
    Object.assign(this, init);
  }
}

export class Experience extends Model {
  companyLogo: string[];
  company: string;
  year: string;
  technologies: string[];
  images?: string[];

  constructor(init? : Partial<Experience>){
    super(init);
    Object.assign(this, init);
  }
}
