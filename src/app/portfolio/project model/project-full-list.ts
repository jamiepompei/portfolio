import {  Project } from './project';

export const projects: Project[] = [

    {
        projectId: 1,
        frontendRepoUrl: 'https://github.com/nicolepompei/cats-casino',
        backendRepoUrl: '',
        hostedUrl: '',
        title: "casino games",
        description: 'Worked as part of a team of 5 to develop a Java based gaming application designed with the Decorator pattern that allows users to log into a Casino with a new account and play various gambling and non-gambling card and dice games (Blackjack, Go Fish, Craps, Snake Eyes). Responsible for the delivery of the card deck and Blackjack and Go Fish games and JUnit tests for these card games. Pair coded the game menus and participated in code reviews and debugging.',
        mainImagePath: ['assets/imgs/casino.png'],
        technologies: ['Java', 'Interfaces', 'Game logic', 'JUnit Testing', 'Decorator Pattern']
    },


    {
        projectId: 2,
        frontendRepoUrl: 'https://github.com/nicolepompei/game-boy-drum-machine',
        backendRepoUrl: '',
        hostedUrl: 'https://game-boy-drum-machine.vercel.app/',
        title: "gameboy drum machine",
        description: 'Independently developed a keyboard key press event based web drum machine with gameboy sound design and custom CSS.',
        mainImagePath: ['assets/imgs/gameboy-drum-machine.png'],
        technologies: ['Javascript', 'HTML5', 'CSS3', 'Key Events', 'Event Handling']
    },

    {
        projectId: 3,
        frontendRepoUrl: 'https://github.com/nicolepompei/angular-password-generator',
        backendRepoUrl: '',
        hostedUrl: 'https://password-generator-gilt-five.vercel.app/',
        title: "password generator",
        description: 'Angular11 and Bulma based password generator that only generates a password when a user enters a valid length and chooses at least one option for type of characters. Passwords are a random sequence of letters, numbers, and special characters based on the user input.',
        mainImagePath: ['assets/imgs/pg.png'],
        technologies: ['Angular11', 'HTML5', 'CSS3', 'Typescript', 'Bulma', 'Event Binding', 'Property Binding']
    },
    {
        projectId: 4,
        frontendRepoUrl: 'https://github.com/nicolepompei/angular-typing-game',
        backendRepoUrl: '',
        hostedUrl: 'https://angular-typing-game-six.vercel.app/',
        title: "typing game",
        description: 'Angular11 and Bulma based typing game with a randomly generated sentence. The colors of the letters in the randomly generated sentence change based on user input. Pending input remains gray, correct input turns green and incorrect input turns red. If a user types all chracters successfully, a success message displays.',
        mainImagePath: ['assets/imgs/typinggame.png'],
        technologies: ['Angular11', 'HTML5', 'CSS3', 'Typescript', 'Bulma', 'Structural Directives', 'Event Binding', 'Property Binding', 'Interpolation']
    },
    {
        projectId: 5,
        frontendRepoUrl: 'https://github.com/nicolepompei/drum-machine-javascript-html-css',
        backendRepoUrl: '',
        hostedUrl: 'https://drum-machine-javascript-html-css.vercel.app/',
        title: "drum machine",
        description: ' Independently produced a web-based drum machine app using HTML, CSS, and JavaScript. Utilized the FlexBox model and music samples from Splice. The web application features dynamically generated drum pads based on the user selected library. Users can operate the drum machine via key press or mouse click.',
        mainImagePath: ['assets/imgs/drum-machine.png'],
        technologies: ['HTML5', 'CSS3', 'Javascript', 'Event Handling', 'Key Events', 'Click Events']
    },
    {
        projectId: 6,
        frontendRepoUrl: 'https://github.com/nicolepompei/blogprojectfrontend',
        backendRepoUrl: 'https://github.com/nicolepompei/blog_project',
        hostedUrl: "https://blog-project-frontend.herokuapp.com/",
        title: 'blrb',
        description: 'Created with an Agile team of 6, "blrb" is a full stack blog application based on Medium and tumblr. I was personally responsible for contributing to the backend architecture, JWT functionality on the front end and backend, BlogPost Service and Auth Controller Tests with JUnit5 and Mockito, HTTP Interceptor and error handling on the front end, tagbar linking functionality, and front end styling with custom CSS.',
        mainImagePath: ['assets/imgs/blrb-full-post.png'],
        technologies: ['Spring Boot', 'Angular11', 'Typescript', 'HTML5', 'CSS3', 'Bootstrap', 'MVC', 'RESTful Services', 'JWT', 'AWS S3 Cloud Storage', 'MySQL', 'CRUD', 'Builder Pattern', 'Heroku Deployment']
    }

]


