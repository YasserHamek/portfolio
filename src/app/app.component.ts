import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticData, IMGSRC, LOGOIMGSRC, PROFILIMG, TITLE } from './model/static-data';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { BehaviorSubject, ReplaySubject, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Education, Experience, Project, Tech } from './model/model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig]
})
export class AppComponent implements OnInit, OnDestroy {
  title = TITLE;
  imgSrc = IMGSRC;
  logoImgSrc = LOGOIMGSRC;
  profilImg = PROFILIMG;

  projects: ReplaySubject<Project[]> = new ReplaySubject(1);
  loadingProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  educations: ReplaySubject<Education[]> = new ReplaySubject(1);
  loadingEducations: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  techs: ReplaySubject<Tech[]> = new ReplaySubject(1);
  loadingTechs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  experiences: ReplaySubject<Experience[]> = new ReplaySubject(1);
  loadingExperiences: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  subscription: Subscription = new Subscription();

  indexOfImageToShow: number[] = [];
  projectsLenght: number = 0;

  ngOnInit(): void {

    //filling project
    this.projects.next(StaticData.projects);

    // //filling education
    this.educations.next(StaticData.educations);

    // //filling tech
    this.techs.next(StaticData.techs);

    //filling experiences
    this.experiences.next(StaticData.experiences);

    this.subscription.add(
      this.projects.pipe(
        tap((projects) => {
          //filling image index
          this.projectsLenght = projects.length - 1;
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

    this.subscription.add(
      this.experiences.pipe(
        tap((experiences) => {
          //filling image index
          for(let i = 0; i< experiences.length; i++){
            this.indexOfImageToShow.push(0);
          }
        }),
        tap(() => this.loadingExperiences.next(false)),
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeImg(isToMoveRight: boolean, imgArrLength: number, indexOfProject: number): void{
    console.log(" this is indexOfProject : ", indexOfProject);
    if(isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = (this.indexOfImageToShow[indexOfProject] + 1) % imgArrLength
    } else if (!isToMoveRight){
      this.indexOfImageToShow[indexOfProject] = this.indexOfImageToShow[indexOfProject] == 0 ? imgArrLength - 1 : this.indexOfImageToShow[indexOfProject] - 1 ;
    }
    console.log(" this.indexOfImageToShow : ", this.indexOfImageToShow);
  }
}

