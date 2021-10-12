import { Component, OnInit } from '@angular/core';
import { Education } from './model/education';
import { Project } from './model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'portfolio';
  projects: Project[] = [];
  educations: Education[] = [];
  imgSrc = "assets/img/";
  profilImg: string = "profil-picture.jpg";
  indexOfImageToShow: number = 0;

  ngOnInit(): void {
    this.projects.push({
      title: "Single Page Application Naviexploit",
      images: ["Naviexploit-picture-1.png","Naviexploit-picture-2.png","Naviexploit-picture-3.png","Naviexploit-picture-4.png",
      "Naviexploit-picture-5.png","Naviexploit-picture-6.png","Naviexploit-picture-7.png","Naviexploit-picture-8.png",
      "Naviexploit-picture-9.png","Naviexploit-picture-10.png","Naviexploit-picture-11.png","Naviexploit-picture-12.png",
      "Naviexploit-picture-13.png","Naviexploit-picture-14.png"],
      description: [" L’application Naviexploit sera utilisé par les agents de terrain qui effectuent des opérations de vérification sur les trains avant leurs départ, l’application est adaptable tablette et présente en français et en anglais."+
      "Le frontend de l’application est développé avec Angular, et le backend est développé avec Spring sous format d’une API REST." ,
      "J’ai commencé le développement de l’application par la définition de l’architecture du frontend et celle du backend, ensuite j’ai implémenté la configuration et ajouté les dépendances associées à l’aide de npm et Maven, puis j’ai développé l’authentification des utilisateurs avec Spring Security et JWT. J’ai créé la page associée avec Angular Material, ensuite j’ai développé le frontend et le backend "+
      "de plusieurs pages notamment pour la création et la recherche d’utilisateurs, recherche et affichage des planches ainsi que la réalisation de l’opération de la RAT. Pour ces pages, j’ai utilisé plusieurs technologies en frontend, notamment la librairie RxJS pour effectuer les appelles http asynchrones et le tableau d’Angular Material qui permet d’ajouter facilement la pagination et le tri des données. En backend j’ai utilisé Spring Data JPA pour la communication avec la base de données et pour l’extraction de données sous format de page. Le développement de NaviExploit s’est fait en respectant les normes de développement orientées objet notamment les principes SOLID, DRY et DDD."],
      technologies: ["Java 8/11", "JavaScript", "Typescript", "HTML", "SCSS", "Spring Boot", "Spring Data JPA",
      "Spring Sécurity", "Hibernate", "SQL", "Angular Material", "JWT", "RxJS", "FlexLayout", "SVN", "Maven", "REST",
      "Spring WebTestClient", "Spring MockMvc", "Eclipse", "Visual Studio Code."]
    });
  }

  changeImg(isToMoveRight: boolean, imgArrLength: number): void{
    if(isToMoveRight){
      this.indexOfImageToShow = (this.indexOfImageToShow + 1) % imgArrLength
    } else if (!isToMoveRight){
      this.indexOfImageToShow = this.indexOfImageToShow == 0 ? imgArrLength - 1 : this.indexOfImageToShow - 1 ;
    }
  }
}
