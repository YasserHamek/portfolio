import { Component, OnDestroy, OnInit } from '@angular/core';
import { Education } from './model/education';
import { Project } from './model/project';
import { StaticData } from './model/static-data';
import { Tech } from './model/tech';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { BehaviorSubject, ReplaySubject, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig]
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'portfolio';

  projects: ReplaySubject<Project[]> = new ReplaySubject(1);
  loadingProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  educations: ReplaySubject<Education[]> = new ReplaySubject(1);
  loadingEducations: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  techs: ReplaySubject<Tech[]> = new ReplaySubject(1);
  loadingTechs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  subscription: Subscription = new Subscription();

  imgSrc = "assets/img/";
  logoImgSrc = "assets/img/logo/";
  profilImg: string = "profil-picture.jpg";
  indexOfImageToShow: number[] = [];

  ngOnInit(): void {

    //filling project
    this.projects.next(StaticData.projects);

    //filling education
    this.educations.next(StaticData.educations);

    //filling tech
    this.techs.next(StaticData.techs);

    this.subscription.add(
      this.projects.pipe(
        tap((projects) => {
          //filling image index
          for(let i = 0; i< projects.length; i++){
            this.indexOfImageToShow.push(0);
          }
        }),
        tap(() => this.loadingProjects.next(false)),
      ).subscribe(),
    )

    this.subscription.add(
      this.educations.pipe(
        tap(() => this.loadingEducations.next(false)),
      ).subscribe()
    )

    this.subscription.add(
      this.techs.pipe(
        tap(() => this.loadingTechs.next(false)),
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeImg(isToMoveRight: boolean, imgArrLength: number, indexOfProject: number): void{
    if(isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = (this.indexOfImageToShow[indexOfProject] + 1) % imgArrLength
    } else if (!isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = this.indexOfImageToShow[indexOfProject] == 0 ? imgArrLength - 1 : this.indexOfImageToShow[indexOfProject] - 1 ;
    }
  }
}

