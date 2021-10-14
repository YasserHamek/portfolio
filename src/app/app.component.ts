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
  indexOfImageToShow: number = 0;

  ngOnInit(): void {


    //filling project
    this.projects.push(...StaticData.projects);

    //filling education
    this.educations.push(...StaticData.educations);

    //filling tech
    this.techs.push(...StaticData.techs);
  }

  changeImg(isToMoveRight: boolean, imgArrLength: number): void{
    if(isToMoveRight){
      this.indexOfImageToShow = (this.indexOfImageToShow + 1) % imgArrLength
    } else if (!isToMoveRight){
      this.indexOfImageToShow = this.indexOfImageToShow == 0 ? imgArrLength - 1 : this.indexOfImageToShow - 1 ;
    }
  }
}
