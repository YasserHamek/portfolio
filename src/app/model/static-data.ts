import { Education } from "./education";
import { Project } from "./project";
import { Tech } from "./tech";

export class StaticData {

  //project
  public static projects: Project[] = [{
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
  },{
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
  }]

  //education
  public static educations: Education[] = [
    {
      universityLogo: "Logo_Université_Rennes_1_.svg",
      diplome: "Master 2 Informatique",
      university: "Universit de Rennes 1",
      year: "2020 - 2021",
      descriptions: [
        "les Cours, TD et TP du Master sont en commun avec le parcours Ingénierie Logicielle.",
        "Techniques avancées pour les architectures logicielles (Spring, JPA, Hibernate, SQL)",
        "Architecture Objets Canoniques ( Design Pattern : Active Object, Proxy, Adapter, Strategy, Decorator)",
        "Génie logiciel pour les IHM (Angular, Vue.js)",
        "Modélisation de problèmes scientifiques (Python)",
        "Outils pour la construction d'IHM (Flutter, méthode Agile Scrum)",
        "Interfaces, GUI, utilisabilité (fluidUI)",
        "Interactions avancées (réalité augmentée, interaction 3D, Tactile)",
        "Multimédia Mobile (Android studio, Flutter, Firebase)",
        "Modélisation, animation, rendu 3D (Unity)"
      ]
    },{
      universityLogo: "Logo_Université_Rennes_1_.svg",
      diplome: "Master 1 Informatique",
      university: "Universit de Rennes 1",
      year: "2019 - 2020",
      descriptions: [
        "les Cours, TD et TP du Master sont en commun avec le parcours Ingénierie Logicielle.",
        "Techniques avancées pour les architectures logicielles (Spring, JPA, Hibernate, SQL)",
        "Architecture Objets Canoniques ( Design Pattern : Active Object, Proxy, Adapter, Strategy, Decorator)",
        "Génie logiciel pour les IHM (Angular, Vue.js)",
        "Modélisation de problèmes scientifiques (Python)",
        "Outils pour la construction d'IHM (Flutter, méthode Agile Scrum)",
        "Interfaces, GUI, utilisabilité (fluidUI)",
        "Interactions avancées (réalité augmentée, interaction 3D, Tactile)",
        "Multimédia Mobile (Android studio, Flutter, Firebase)",
        "Modélisation, animation, rendu 3D (Unity)"
      ]
    },{
      universityLogo: "Logo_Université_Rennes_1_.svg",
      diplome: "Master 1 Informatique",
      university: "Universit de Rennes 1",
      year: "2019 - 2020",
      descriptions: [
        "les Cours, TD et TP du Master sont en commun avec le parcours Ingénierie Logicielle.",
        "Techniques avancées pour les architectures logicielles (Spring, JPA, Hibernate, SQL)",
        "Architecture Objets Canoniques ( Design Pattern : Active Object, Proxy, Adapter, Strategy, Decorator)",
        "Génie logiciel pour les IHM (Angular, Vue.js)",
        "Modélisation de problèmes scientifiques (Python)",
        "Outils pour la construction d'IHM (Flutter, méthode Agile Scrum)",
        "Interfaces, GUI, utilisabilité (fluidUI)",
        "Interactions avancées (réalité augmentée, interaction 3D, Tactile)",
        "Multimédia Mobile (Android studio, Flutter, Firebase)",
        "Modélisation, animation, rendu 3D (Unity)"
      ]
    }
  ]

  //tech
  public static techs: Tech[] = [
    {
      logo: "Java.png",
      name: "Java"
    },{
      logo: "JavaScript.png",
      name: "JavaScript"
    },{
      logo: "TypeScript.svg",
      name: "TypeScript"
    },{
      logo: "HTML.svg",
      name: "HTML"
    },{
      logo: "CSS.svg",
      name: "CSS"
    },{
      logo: "MySQL.png",
      name: "MySQL"
    },{
      logo: "OracleSQL.svg",
      name: "OracleSQL"
    },{
      logo: "Python.svg",
      name: "Python"
    },{
      logo: "Spring.png",
      name: "Spring"
    },{
      logo: "Angular.svg",
      name: "Angular"
    },{
      logo: "Spring Boot.png",
      name: "Spring Boot"
    },{
      logo: "",
      name: "Spring MVC"
    },{
      logo: "",
      name: "Spring Data JPA"
    },{
      logo: "",
      name: "Spring Security"
    },{
      logo: "",
      name: "Hibernate"
    },{
      logo: "",
      name: "Junit"
    },{
      logo: "",
      name: "NodeJs"
    },{
      logo: "",
      name: "ExpressJs"
    },{
      logo: "",
      name: "Flutter"
    },{
      logo: "",
      name: "Vue"
    },{
      logo: "",
      name: "Git"
    },{
      logo: "",
      name: "SVN"
    },{
      logo: "",
      name: "UML"
    },{
      logo: "",
      name: "API REST"
    },{
      logo: "",
      name: "Scrum"
    },{
      logo: "",
      name: "Kanban"
    }
  ]
}
