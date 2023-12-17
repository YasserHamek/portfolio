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
    images: ["realtor-api-1.PNG", "realtor-api-2.PNG", "realtor-api-3.PNG"],
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
    descriptions: [" Développement d'une API RESTFul d'une' cafeteria online qui expose des end points pour la manipulation des données, j’ai créé 3 Controller, un Controller pour les utilisateurs, un Controller pour les produits et un Controller pour les paniers, chaque Controller expose les méthode CRUD classique d’une API REST notamment POST, GET, PUT, DELETE, pour chaque méthode on peut l’utiliser soit avec un identifiant ou sans identifiant, si on utilise un id ça sera pour un seul Object, par contre si on l’utilise sans id, ça sera alors pour un ensemble d’objet"],
    technologies: ["Java 8", "Spring", "Spring Boot", "Spring Data JPA", "Git", "Maven", "Swagger", "REST", "Eclipse"],
    cat: "cat2"
  },{
    title: "Tableau Kanban",
    images: ["Kanban.png"],
    descriptions: ["Development of an application of a simple kanban board, which contains 3 columns, a pending statue column, "
    + "One of statue in progress and one of statue finishing, each column groups a set of items, "
    + "We can add or delete an item and we can also change the status of an item which will generate "
    + "moving the item from one column to another."],
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

public static projectsENG: Project[] = [
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
    images: ["realtor-api-1.PNG", "realtor-api-2.PNG", "realtor-api-3.PNG"],
    descriptions: ["Development of a REST API with NodeJs and the NestJs Framework as well as Mongoose and MongoDB for the database, "+
    "This application is called Realtor-App, it represents the backend part of a real estate agency, I was inspired by a real real estate agency for development"+
    "of features, we find as features the management of houses and associated images, user management, sending messages between"+
    "users, authentication with JWT, I also implemented role-based permission management for 3 types of users: real estate agent, buyer and admin."],
    technologies: ["NodeJs", "NestJs", "Mongoose", "MongoDB","Jest", "JWT", "GitHub", "Visual Studio Code", "REST API"],
    cat: "cat2"
  },
  {
    title: "Expense REST API",
    images: [],
    descriptions: ["Development of a REST API with NodeJs and the NestJs Framework and Prisma as ORM and postgreSQL database, the application is called expanse-app, it allows the management of income and expenses"],
    technologies: ["NodeJs", "NestJs", "Prisma", "PostgreSQL","Jest", "GitHub", "Visual Studio Code", "REST API"],
    cat: "cat2"
  },
  {
    title: "Cafeteria Online",
    images: ["Cafeteria-online-1.png", "Cafeteria-online-2.png", "Cafeteria-online-3.png", "Cafeteria-online-4.png"],
    descriptions: [" Development of a REST API of an online cafeteria that exposes end points for data manipulation, I created 3 Controllers, a Controller for users, a Controller for products and a Controller for baskets, each Controller exposes the classic CRUD method of a REST API including POST, GET, PUT, DELETE, for each method it can be used either with an identifier or without identifier, if we use an id it will be for a single Object, on the other hand if we use it without id, it will then be for a set of objects"],
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
      title: "Développeur Fullstack NodeJs/NestJs/React",
      descriptions: [
        `Développement d'une application web avec le NodeJs et ReactJs, l'application s'appelle AKRILI DAR, elle permet de louer, acheter ou vendre des biens immobiliers.`,
        `Création de l'architecture du backend et du frontend.`,
        `Développement de la recherche et filterage des maisons.`,
        `Développement d'un système de messagerie entre les utilisateurs.`,
        `Développement de la gestion du compte utilisateur.`,
        `Développement d'un dashboard pour la création et modification des biens immobiliers.`,
        `Impémentation des test techniques et fonctionnels.`,
      ],
      technologies: ['NodeJs', 'ReactJs 18', 'Redux','NestJs','JavaScript', 'TypeScript', 'MongoDB', 'Mongoose','Material UI','Bootstrap', 'Figma', 'HTML', 'SCSS', 'GitHub', 'Jest'],
      company: "Freelance",
      companyLogo: ['Akrili_Dar_Logo.png'],
      year: "02/2023 - Aujourd'hui",
      images: ["1-Login.jpg","2-Sing In.jpg","3-1- Home page.jpg","3-2- Home page.jpg","3-3- Home page.jpg","3-4- Home page.jpg"
      ,"4-1- Searching page.jpg","4-2- Searching page.jpg","4-3- Searching page.jpg","4-4- Searching page.jpg","5-1- Property details.jpg","5-2- Property details.jpg"
      ,"5-3- Property details.jpg","5-4- Property details.jpg","5-5- Property details when logged in.jpg","6-1- My Account My info section.jpg","6-2- My Account Security section.jpg","7-1- Messages.jpg"
      ,"7-2- Messages with popup opened.jpg","8-1- Dashboard.jpg","8-2- Dashboard.jpg","8-3- Dashboard creating new house.jpg","8-4- Dashboard creating new house.jpg","9-1- Property modification.jpg"
      ,"9-2- Property modification.jpg","9-3- Property modification.jpg","10-1- Favorites.jpg","10-2- Favorites.jpg"]
    },
    {
      title: "Développeur Fullstack Java/Spring/Angular",
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
      title: "Développeur Fullstack Java/Spring/Angular",
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

  public static experiencesENG: Experience[] = [
    {
      title: "Fullstack NodeJs/NestJs/React developer",
      descriptions: [
          `AKRILI DAR it's startup idea of creating a platform that allows users
          to rent, buy or sell real estate properties. I created the application
          from scratch, starting from defining the product specification after
          that I created the application design with Figma, then I translated the
          specification and design into a clear, maintainable and efficient code
          using NodeJs and ReactJs.`,
        'Full-stack development using ReactJs, NodeJs, NestJs and MongoDB',
        'Creating the backend and frontend architecture.',
        'Development user authentication and account creation.',
        'Development of propeties research and filtering.',
        'Development of a messaging system between users.',
        'Development of user account management.',
        'Development of a dashboard for proprties creation and modification.',
        'Creating the application design with Figma.',
        'Impementation of technical and functional tests.',
      ],
      technologies: ['NodeJs', 'ReactJs 18', 'Redux','NestJs','JavaScript', 'TypeScript', 'MongoDB', 'Mongoose','Material UI','Bootstrap', 'Figma', 'HTML', 'SCSS', 'GitHub', 'Jest'],
      company: "Freelance",
      companyLogo: ['Akrili_Dar_Logo.png'],
      year: "02/2023 - Now",
      images: ["1-Login.jpg","2-Sing In.jpg","3-1- Home page.jpg","3-2- Home page.jpg","3-3- Home page.jpg","3-4- Home page.jpg"
      ,"4-1- Searching page.jpg","4-2- Searching page.jpg","4-3- Searching page.jpg","4-4- Searching page.jpg","5-1- Property details.jpg","5-2- Property details.jpg"
      ,"5-3- Property details.jpg","5-4- Property details.jpg","5-5- Property details when logged in.jpg","6-1- My Account My info section.jpg","6-2- My Account Security section.jpg","7-1- Messages.jpg"
      ,"7-2- Messages with popup opened.jpg","8-1- Dashboard.jpg","8-2- Dashboard.jpg","8-3- Dashboard creating new house.jpg","8-4- Dashboard creating new house.jpg","9-1- Property modification.jpg"
      ,"9-2- Property modification.jpg","9-3- Property modification.jpg","10-1- Favorites.jpg","10-2- Favorites.jpg"]
    },
    {
      title: "Fullstack Java/Spring/Angular Developer",
      descriptions: [
          `Using scrum agile methodology, within a team of 17 people (8
            developers, 5 product owners, 2 testers, a scrum master and a project
            manager) I did develop and support new features and I was actively
            improving existing systems and infrastructure : `,
        `Full-stack web development using Java, Type Script, Spring Boot,
          Angular and PostgreSQL.`,
        `Reduced boilerplate code by developing reusable generic
          Full-stack component.`,
        `Increased application performance by developing dynamic
          loading of pages, tab and component.`,
        `Improved remarks and responses loading and posting time by
        reviewing and refactoring actual implementation.`,
        `Created application sub module search and filter feature by
        Implementing a scalable search engine Solr.`,
        `Development of REST API end points with Spring.`,
        `Creation and modification of Data Base table and query with SQL,
        Spring Data JPA and PostgreSQL.`,
        `Ensured maintainability and code none regression by creating
        technical and functional testing.`,
        `Developed application front-end pages using Angular Material,
        Type Script, HTML, SCSS.`,
        `Redaction of technical documentation.`,
        `Delivering a clean code and actively improving existing systems
        and infrastructure by doing code review and refactoring.`,
        `Deployment of new feature using Jenkins.`,
        `User story estimation.`,
        `Technical and functional testing.`,
        `Continuous integration with Gitlab and Jenkins.`,
        `Responsive design with CSS Grid et Flexbox.`,
        `Implementation of permissions and habilitations.`,
        `Implementation of pagination.`,
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
      title: "Fullstack Java/Spring/Angular Developer",
      images: ["Naviexploit-picture-1.png","Naviexploit-picture-2.png","Naviexploit-picture-3.png","Naviexploit-picture-4.png",
      "Naviexploit-picture-5.png","Naviexploit-picture-6.png","Naviexploit-picture-7.png","Naviexploit-picture-8.png",
      "Naviexploit-picture-9.png","Naviexploit-picture-10.png","Naviexploit-picture-11.png","Naviexploit-picture-12.png",
      "Naviexploit-picture-13.png","Naviexploit-picture-14.png"],
      descriptions: [
          `Digital transformation of train verification procedure by creating a new
        web application using Java, Spring and Angular, we were a team of 8
        people working with Kanban Agile methodology : `,
      `Full-stack development using Spring Boot, Angular, and Oracle
        SQL.`,
      "Front-end and back-end architecture and configuration.",
      "Authentification and Autorisation with Spring Sécurity and JWT.",
      "Development of project REST API end points.",
      "Creation of data model and DataBase with Oracle SQL.",
      "Integration of the back-end with front-end.",
      "Development of Unit and Integration tests.",
      "Development of pages using Angular Material, HTML, SCSS and FlexLayout for responsive Design.",
      "Development of pages with two languages : French and English.",
      "Development integration test.",],
      technologies: ["Java 8/11", "JavaScript", "Typescript", "HTML", "SCSS", "Spring", "Spring Boot", "Spring Data JPA",
      "Spring Sécurity", "Hibernate", "SQL", "Angular Material", "JWT", "RxJS", "FlexLayout", "SVN", "Maven", "REST",
      "Spring WebTestClient", "Spring MockMvc", "Eclipse", "Visual Studio Code"],
      company: "Tata Consulting Service, Client Naviland",
      companyLogo: ['TCS_Logo.png', 'NAVILAND_Logo.png'],
      year: "03/2022 - 09/2022",
    }
  ]

  //tech Postgresql
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
      logo: "JSX.png",
      name: "JSX"
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
      logo: "Postgresql.png",
      name: "Postgresql"
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
      logo: "Solr.png",
      name: "Apache Solr"
    },{
      logo: "Maven1.png",
      name: "Maven"
    },{
      logo: "Tomcat.png",
      name: "Tomcat"
    },{
      logo: "Gradle.png",
      name: "Gradle"
    },{
      logo: "Angular.png",
      name: "Angular"
    },{
      logo: "Angular Material.png",
      name: "Angular Material"
    },{
      logo: "NgRx.png",
      name: "NgRx"
    },{
      logo: "RxJs.png",
      name: "RxJs"
    },{
      logo: "NgXs.png",
      name: "NgXs"
    },{
      logo: "Git.png",
      name: "Git"
    },{
      logo: "Github.png",
      name: "Github"
    },{
      logo: "Gitlab.png",
      name: "Gitlab"
    },{
      logo: "NodeJS.png",
      name: "NodeJs"
    },{
      logo: "NestJs.png",
      name: "NestJs"
    },{
      logo: "Express.png",
      name: "Express"
    },{
      logo: "Mongoose.png",
      name: "Mongoose"
    },{
      logo: "MongoDB.png",
      name: "MongoDB"
    },{
      logo: "React.png",
      name: "React"
    },{
      logo: "Redux.png",
      name: "Redux"
    },{
      logo: "React Hooks.png",
      name: "React Hooks"
    },{
      logo: "Material UI.png",
      name: "Material UI"
    },{
      logo: "Junit.png",
      name: "Junit"
    },{
      logo: "Jest.png",
      name: "Jest"
    },{
      logo: "Vue.png",
      name: "Vue"
    },{
      logo: "Confluence.png",
      name: "Confluence"
    },{
      logo: "Jira.png",
      name: "Jira"
    },{
      logo: "Kubernetes.png",
      name: "Kubernetes"
    },{
      logo: "Docker.png",
      name: "Docker"
    },{
      logo: "Jenkins.png",
      name: "Jenkins"
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
    },{
      logo: "UI UX Design.png",
      name: "UI UX Design"
    },{
      logo: "GraphQL.png",
      name: "GraphQL"
    },{
      logo: "Material Design.png",
      name: "Material Design"
    },{
      logo: "Figma.png",
      name: "Figma"
    },{
      logo: "Bootstrap.png",
      name: "Bootstrap"
    },{
      logo: "mRemoteNG.png",
      name: "mRemoteNG"
    },{
      logo: "DBeaver.png",
      name: "DBeaver"
    },{
      logo: "AWS.png",
      name: "AWS"
    },{
      logo: "Prisma.png",
      name: "Prisma"
    },{
      logo: "VSCode.png",
      name: "VSCode"
    },{
      logo: "Eclipse.png",
      name: "Eclipse"
    },{
      logo: "Intellij.png",
      name: "Intellij"
    },{
      logo: "Flutter.png",
      name: "Flutter"
    }
  ]
}
