import { Component, OnInit } from '@angular/core';
import { Education } from './model/education';
import { Project } from './model/project';
import { StaticData } from './model/static-data';
import { Tech } from './model/tech';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig]
})
export class AppComponent implements OnInit {
  title: string = 'portfolio';
  projects: Project[] = [];
  educations: Education[] = [];
  techs: Tech[] = [];
  imgSrc = "assets/img/";
  logoImgSrc = "assets/img/logo/";
  profilImg: string = "profil-picture.jpg";
  indexOfImageToShow: number[] = [];

  ngOnInit(): void {
    //filling project
    this.projects.push(...StaticData.projects);

    //filling image index
    for(let i = 0; i< this.projects.length; i++){
      this.indexOfImageToShow.push(0);
    }

    //filling education
    this.educations.push(...StaticData.educations);

    //filling tech
    this.techs.push(...StaticData.techs);

    /*
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    alert(x + ' × ' + y);*/
  }

  changeImg(isToMoveRight: boolean, imgArrLength: number, indexOfProject: number): void{
    if(isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = (this.indexOfImageToShow[indexOfProject] + 1) % imgArrLength
    } else if (!isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = this.indexOfImageToShow[indexOfProject] == 0 ? imgArrLength - 1 : this.indexOfImageToShow[indexOfProject] - 1 ;
    }
  }
}
