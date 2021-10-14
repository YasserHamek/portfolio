export class Project {
  title: string;
  images: string[];
  description: string[];
  technologies: string[];
  cat: string;

  constructor(init? : Partial<Project>){
    Object.assign(this, init);
  }
}
