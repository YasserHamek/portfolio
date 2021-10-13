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
    description: ["L’application Naviexploit est utilisé par les agents de terrain qui effectuent des opérations de vérification sur les trains avant leurs départ, l’application est adaptable tablette et présente en français et en anglais."+
    "Le frontend de l’application est développé avec Angular, et le backend est développé avec Spring sous format d’une API REST." ,
    "J’ai commencé le développement de l’application par la définition de l’architecture du frontend et celle du backend, ensuite j’ai implémenté la configuration et ajouté les dépendances associées à l’aide de npm et Maven, puis j’ai développé l’authentification des utilisateurs avec Spring Security et JWT. J’ai créé la page associée avec Angular Material, ensuite j’ai développé le frontend et le backend "+
    "de plusieurs pages notamment pour la création et la recherche d’utilisateurs, recherche et affichage des planches ainsi que la réalisation de l’opération de la RAT. Pour ces pages, j’ai utilisé plusieurs technologies en frontend, notamment la librairie RxJS pour effectuer les appelles http asynchrones et le tableau d’Angular Material qui permet d’ajouter facilement la pagination et le tri des données. En backend j’ai utilisé Spring Data JPA pour la communication avec la base de données et pour l’extraction de données sous format de page. Le développement de NaviExploit s’est fait en respectant les normes de développement orientées objet notamment les principes SOLID, DRY et DDD."],
    technologies: ["Java 8/11", "JavaScript", "Typescript", "HTML", "SCSS", "Spring", "Spring Boot", "Spring Data JPA",
    "Spring Sécurity", "Hibernate", "SQL", "Angular Material", "JWT", "RxJS", "FlexLayout", "SVN", "Maven", "REST",
    "Spring WebTestClient", "Spring MockMvc", "Eclipse", "Visual Studio Code"]
  },{
    title: "Cafeteria Online",
    images: ["Cafeteria-online-1.PNG", "Cafeteria-online-2.PNG", "Cafeteria-online-3.PNG", "Cafeteria-online-4.PNG"],
    description: [" l’API RESTFul de la cafeteria online expose des end points pour la manipulation des données, j’ai créé 3 Controller, un Controller pour les utilisateurs, un Controller pour les produits et un Controller pour les paniers, chaque Controller expose les méthode CRUD classique d’une API REST notamment POST, GET, PUT, DELETE, pour chaque méthode on peut l’utiliser soit avec un identifiant ou sans identifiant, si on utilise un id ça sera pour un seul Object, par contre si on l’utilise sans id, ça sera alors pour un ensemble d’objet"],
    technologies: ["Java 8", "Spring", "Spring Boot", "Spring Data JPA", "Git", "Maven", "Swagger",
    "REST", "Eclipse"]
  },{
    title: "Tableau Kanban",
    images: ["Kanban.jpg"],
    description: ["L’application c’est un tableau kanban simple, qui contient 3 colonnes, une colonne de statue en attente, "+
    "une de statue en cours et une de statue terminer, chaque colonne regroupe un ensemble d’items, "+
    "on peut ajouter ou supprimer un item et on peut aussi changer le statut d’un item ce qui vas générer "+
    "le déplacement de l’item d’une colonne à une autre."],
    technologies: ["Java 8", "JavaScript", "Typescript", "HTML", "SCSS", "Spring","Spring Boot", "Spring Data JPA",
    "Angular Material", "FlexBox", "Git", "Maven", "REST", "Eclipse", "Visual Studio Code"]
  },new Project({
    title: "Justificateur de text",
    description: ["Cette application est une API REST qui fournis deux end point, le premier permet de justifier un texte introduis dans les paramètres et le second permet de générer des JWT Token."],
    technologies: ["NodeJS", "ExpressJS", "JWT", "Git","REST", "Visual Studio Code"]
  }),{
    title: "Javascript Chart",
    images: ["Vanilla-javascript-chart.PNG","Vanilla-javascript-chart2.PNG"],
    description: ["Dans ce projet, j'ai développé une charte graphique avec Vanilla Javascript, la charte affiche le score des joueurs à travers le temps, si on appuie une fois sur la barre, on aura le score qui s'affiche au-dessus de la barre, et si on appuie pour la 2e fois le score disparait."],
    technologies: ["JavaScript","HTML", "CSS", "FlexBox", "Visual Studio Code"]
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
        " ",
        "Algorithmique",
        "Programmation orienté objet : Java",
        "Systèmes d'information (Merise, UML, méthode Agile),",
        "Systèmes mono-utilisateur",
        "Base de données (MySQL)",
        "Développement web (JavaScript, HTML, CSS, SQL",
        "Introduction aux Réseaux",
        "Systèmes multi-usagers",
        "Ingénierie des langages informatiques",
        "Conception d'architectures à Objets et services (API REST)"
      ]
    },new Education({
      universityLogo: "University_of_Lille.svg",
      diplome: "Master 1 Génie Mécanique",
      university: "Universit de Lille",
      year: "2017 - 2018"
    }),new Education({
      universityLogo: "USTHB.png",
      diplome: "Master 2 Génie Mécanique",
      university: "Universit de USTHB",
      year: "2015 - 2017"
    })
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
      logo: "TypeScript.png",
      name: "TypeScript"
    },{
      logo: "HTML.png",
      name: "HTML"
    },{
      logo: "CSS.png",
      name: "CSS"
    },{
      logo: "SCSS.png",
      name: "SCSS"
    },{
      logo: "MySQL.png",
      name: "MySQL"
    },{
      logo: "OracleSQL.png",
      name: "OracleSQL"
    },{
      logo: "Python.png",
      name: "Python"
    },{
      logo: "Spring.png",
      name: "Spring"
    },{
      logo: "Angular.png",
      name: "Angular"
    },{
      logo: "Spring Boot.png",
      name: "Spring Boot"
    },{
      logo: "Spring Data JPA.png",
      name: "Spring Data JPA"
    },{
      logo: "Spring Security.png",
      name: "Spring Security"
    },{
      logo: "Hibernate.png",
      name: "Hibernate"
    },{
      logo: "Junit.png",
      name: "Junit"
    },{
      logo: "NodeJS.png",
      name: "NodeJs"
    },{
      logo: "Flutter.png",
      name: "Flutter"
    },{
      logo: "Vue.png",
      name: "Vue"
    },{
      logo: "Git.png",
      name: "Git"
    },{
      logo: "SVN.png",
      name: "SVN"
    },{
      logo: "Heroku.png",
      name: "Heroku"
    },{
      logo: "UML.png",
      name: "UML"
    },{
      logo: "Swagger.png",
      name: "Swagger"
    },{
      logo: "API REST.png",
      name: "API REST"
    },{
      logo: "Scrum.png",
      name: "Scrum"
    },{
      logo: "Kanban.png",
      name: "Kanban"
    }
  ]
}
