import { Project, Education, Tech, Experience } from "./model";

export const IMGSRC = "assets/img/";
export const LOGOIMGSRC = "assets/img/logo/";
export const PROFILIMG: string = "profil-picture.jpg";
export const TITLE: string = 'portfolio';


export class StaticData {
  //project
  public static projects: Project[] = [
  //   {
  //   title: "Single Page Application Naviexploit",
  //   images: ["Naviexploit-picture-1.png","Naviexploit-picture-2.png","Naviexploit-picture-3.png","Naviexploit-picture-4.png",
  //   "Naviexploit-picture-5.png","Naviexploit-picture-6.png","Naviexploit-picture-7.png","Naviexploit-picture-8.png",
  //   "Naviexploit-picture-9.png","Naviexploit-picture-10.png","Naviexploit-picture-11.png","Naviexploit-picture-12.png",
  //   "Naviexploit-picture-13.png","Naviexploit-picture-14.png"],
  //   descriptions: ["L’application Naviexploit est utilisé par les agents de terrain qui effectuent des opérations de vérification sur les trains avant leurs départ, l’application est adaptable tablette et présente en français et en anglais."+
  //   "Le frontend de l’application est développé avec Angular, et le backend est développé avec Spring sous format d’une API REST." ,
  //   "Au sein d'une équipe de 8 personne travaillant en méthode agile kanban, j’ai commencé le développement de l’application par la définition de l’architecture du frontend et celle du backend, ensuite j’ai implémenté la configuration et ajouté les dépendances associées à l’aide de npm et Maven, puis j’ai développé l’authentification des utilisateurs avec Spring Security et JWT. J’ai créé la page associée avec Angular Material, ensuite j’ai développé le frontend et le backend "+
  //   "de plusieurs pages notamment pour la création et la recherche d’utilisateurs, recherche et affichage des planches ainsi que la réalisation de l’opération de la RAT. Pour ces pages, j’ai utilisé plusieurs technologies en frontend, notamment la librairie RxJS pour effectuer les appelles http asynchrones et le tableau d’Angular Material qui permet d’ajouter facilement la pagination et le tri des données. En backend j’ai utilisé Spring Data JPA pour la communication avec la base de données et pour l’extraction de données sous format de page. Le développement de NaviExploit s’est fait en respectant les normes de développement orientées objet notamment les principes SOLID, DRY et DDD."],
  //   technologies: ["Java 8/11", "JavaScript", "Typescript", "HTML", "SCSS", "Spring", "Spring Boot", "Spring Data JPA",
  //   "Spring Sécurity", "Hibernate", "SQL", "Angular Material", "JWT", "RxJS", "FlexLayout", "SVN", "Maven", "REST",
  //   "Spring WebTestClient", "Spring MockMvc", "Eclipse", "Visual Studio Code"],
  //   cat: "cat1"
  // },
  {
    title: "Realtor REST API",
    images: [],
    descriptions: ["Développement d'une API REST avec NodeJs et le Framework NestJs ainsi Mongoose et MongoDB pour la base de données, "+
    "cette application s’appelle realtor-app, elle représente la partie backend d’une agence immobilière, je me suis inspiré d’une vrais agence immobilière pour le développement "+
    "des fonctionnalités, on retrouve comme fonctionnalités la gestion des maisons et les images associers, la gestion des utilisateurs, l’envoi des messages entre les "+
    "utilisateurs, l’authentification avec JWT, j’ai implémenter aussi une gestion de permission à base de rôle pour 3 type d’utilisateurs : agent immobilier, acheteur et admin."],
    technologies: ["NodeJs", "NestJs", "Mongoose", "MongoDB","Jest", "JWT", "GitHub", "Visual Studio Code", "REST API"],
    cat: "cat2"
  },
  {
    title: "Expense REST API",
    images: [],
    descriptions: ["Développement d'une API REST avec NodeJs et le Framework NestJs et Prisma comme ORM et la base de données postgreSQL, l’application s’appelle expanse-app, elle permet la gestion des revenus et dépenses"],
    technologies: ["NodeJs", "NestJs", "Prisma", "PostgreSQL","Jest", "GitHub", "Visual Studio Code", "REST API"],
    cat: "cat2"
  },
  {
    title: "Cafeteria Online",
    images: ["Cafeteria-online-1.png", "Cafeteria-online-2.png", "Cafeteria-online-3.png", "Cafeteria-online-4.png"],
    descriptions: [" l’API RESTFul de la cafeteria online expose des end points pour la manipulation des données, j’ai créé 3 Controller, un Controller pour les utilisateurs, un Controller pour les produits et un Controller pour les paniers, chaque Controller expose les méthode CRUD classique d’une API REST notamment POST, GET, PUT, DELETE, pour chaque méthode on peut l’utiliser soit avec un identifiant ou sans identifiant, si on utilise un id ça sera pour un seul Object, par contre si on l’utilise sans id, ça sera alors pour un ensemble d’objet"],
    technologies: ["Java 8", "Spring", "Spring Boot", "Spring Data JPA", "Git", "Maven", "Swagger",
    "REST", "Eclipse"],
    cat: "cat2"
  },{
    title: "Tableau Kanban",
    images: ["Kanban.png"],
    descriptions: ["L’application c’est un tableau kanban simple, qui contient 3 colonnes, une colonne de statue en attente, "+
    "une de statue en cours et une de statue terminer, chaque colonne regroupe un ensemble d’items, "+
    "on peut ajouter ou supprimer un item et on peut aussi changer le statut d’un item ce qui vas générer "+
    "le déplacement de l’item d’une colonne à une autre."],
    technologies: ["Java 8", "JavaScript", "Typescript", "HTML", "SCSS", "Spring","Spring Boot", "Spring Data JPA",
    "Angular Material", "FlexBox", "Git", "Maven", "REST", "Eclipse", "Visual Studio Code"],
    cat: "cat2"
  },
  // new Project({
  //   title: "Justificateur de text",
  //   descriptions: ["Cette application est une API REST qui fournis deux end point, le premier permet de justifier un texte introduis dans les paramètres et le second permet de générer des JWT Token."],
  //   technologies: ["NodeJS", "ExpressJS", "JWT", "Git","REST", "Visual Studio Code"],
  //   cat: "cat2"
  // }),{
  //   title: "Javascript Chart",
  //   images: ["Vanilla-javascript-chart.png","Vanilla-javascript-chart2.png"],
  //   descriptions: ["Dans ce projet, j'ai développé une charte graphique avec Vanilla Javascript, la charte affiche le score des joueurs à travers le temps, si on appuie une fois sur la barre, on aura le score qui s'affiche au-dessus de la barre, et si on appuie pour la 2e fois le score disparait."],
  //   technologies: ["JavaScript","HTML", "CSS", "FlexBox", "Visual Studio Code"],
  //   cat: "cat2"
  // }
]

  //education
  public static educations: Education[] = [
    {
      universityLogo: "Logo_Université_Rennes_1_.png",
      title: "Master 2 Informatique",
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
      universityLogo: "Logo_Université_Rennes_1_.png",
      title: "Master 1 Informatique",
      university: "Universit de Rennes 1",
      year: "2019 - 2020",
      descriptions: [
        "Parcours compétences complémentaires dans les services du numérique.",
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
      universityLogo: "University_of_Lille.png",
      title: "Master 1 Génie Mécanique",
      university: "Universit de Lille",
      year: "2017 - 2018"
    }),new Education({
      universityLogo: "USTHB.png",
      title: "Master 2 Génie Mécanique",
      university: "Universit de USTHB",
      year: "2015 - 2017"
    })
  ]

  public static experiences: Experience[] = [
    {
      title: "Developpeur Fullstack Java/Spring/Angular",
      descriptions: [
        `En méthodologie agile scrum, dans une équipe de 17 personnes (8 dev,
        5 product owner, 2 tester, 1 scrum master, 1 chef de projet), je fais du
        développement Fullstack sur l'application SIPEDIA de nouvelles fonctionnalités ainsi que la modification et maintenance des fonctionalités existantes avec Spring et
        Angular, SIPEDIA est une application web utilisée en interne et par certains clients d’EDF, elle est composée de 5 modules, par exemple un module regroupe les références des logiciels utilisé
        en interne et leur version recommandé, un autre module permet la gestion dématérialiser des documents et procédures, ci-dessous quelques fonctionnalités développées :`,
        `Développement Fullstack des composants génériques réutilisables.`,
        `Développement du chargement dynamique des pages, onglets et composants pour une meilleur performance.`,
        `Développement des CRUD REST API end points avec Spring.`,
        `Implémentation du moteur de recherche scalable Solr.`,
        `Création et modification des tables et requêtes de la DB avec SQL, Spring Data JPA, PostgreSQL.`,
        `Développement des pages avec Angular Material, TypeScript, HTML, SCSS.`,
        `Intégration continue avec Gitlab et Jenkins.`,
        `Responsive design avec FlexLayout.`,
        `Mise en place des permissions et habilitations.`,
        `Mise en place de la pagination.`,
      ],
      technologies: ['Java 8/11', 'JavaScript', 'Typescript', 'SQL', 'HTML', 'SCSS', 'Spring', 'JPA', 'Hibernate', 'PostgreSQL',
        'Angular Material', 'Solr', 'RxJS', 'FlexLayout', 'Spring MockMvc', 'Jenkins', 'GitLab', 'Visual Studio Code', 'DBeaver',
         'REST API'],
      company: "Key Consulting, Client EDF",
      companyLogo: ['KC_Logo.png', 'EDF_Logo.png'],
      year: "01/2022 - 01/2023",
      images: []
    },
    {
      title: "Developpeur Fullstack Java/Spring/Angular",
      images: ["Naviexploit-picture-1.png","Naviexploit-picture-2.png","Naviexploit-picture-3.png","Naviexploit-picture-4.png",
      "Naviexploit-picture-5.png","Naviexploit-picture-6.png","Naviexploit-picture-7.png","Naviexploit-picture-8.png",
      "Naviexploit-picture-9.png","Naviexploit-picture-10.png","Naviexploit-picture-11.png","Naviexploit-picture-12.png",
      "Naviexploit-picture-13.png","Naviexploit-picture-14.png"],
      descriptions: ["Au sein d'une équipe de 8 personne travaillant en méthode agile kanban, développement d'une application web nommée Naviexploit, L’application est utilisé par les agents de terrain qui effectuent des opérations de vérification sur les trains avant leurs départ."+
      "Création de l'architecture et configuration.",
      "Creation des tables de la base de donnés SQL.",
      "Développement de l'authentification et gestion des autorisations avec Spring Sécurity et JWT.",
      "Développement des REST API end-points du projet",
      "Développement des pages avec Angular Material, HTML, SCSS",
      "Intégration du backend avec le frontend",
      "Responsive Design avec FlexLayout",
      "Développement des pages avec deux langues : Français et Anglais.",
      "Développement des tests d'intégrations",],
      technologies: ["Java 8/11", "JavaScript", "Typescript", "HTML", "SCSS", "Spring", "Spring Boot", "Spring Data JPA",
      "Spring Sécurity", "Hibernate", "SQL", "Angular Material", "JWT", "RxJS", "FlexLayout", "SVN", "Maven", "REST",
      "Spring WebTestClient", "Spring MockMvc", "Eclipse", "Visual Studio Code"],
      company: "Tata Consulting Service, Client Naviland",
      companyLogo: ['TCS_Logo.png', 'NAVILAND_Logo.png'],
      year: "03/2022 - 09/2022",
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
      logo: "Postman.png",
      name: "Postman"
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
