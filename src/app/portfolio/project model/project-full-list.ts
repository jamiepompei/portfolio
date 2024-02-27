import {  Project } from './project';

export const projects: Project[] = [

    {
        projectId: 1,
        frontendRepoUrl: 'https://github.com/nicolepompei/game-boy-drum-machine',
        backendRepoUrl: '',
        hostedUrl: 'https://game-boy-drum-machine.vercel.app/',
        title: "gameboy drum machine",
        description: 'Independently developed a keyboard key press event based web drum machine with gameboy sound design and custom CSS.',
        mainImagePath: ['assets/imgs/gameboy-drum-machine.png'],
        technologies: ['Javascript', 'HTML5', 'CSS3', 'Key Events', 'Event Handling']
    },
    {
        projectId: 2,
        frontendRepoUrl: 'https://github.com/nicolepompei/angular-password-generator',
        backendRepoUrl: '',
        hostedUrl: 'https://password-generator-gilt-five.vercel.app/',
        title: "password generator",
        description: 'Angular11 and Bulma based password generator that only generates a password when a user enters a valid length and chooses at least one option for type of characters. Passwords are a random sequence of letters, numbers, and special characters based on the user input.',
        mainImagePath: ['assets/imgs/pg.png'],
        technologies: ['Angular11', 'HTML5', 'CSS3', 'Typescript', 'Bulma', 'Event Binding', 'Property Binding']
    },
    {
        projectId: 3,
        frontendRepoUrl: 'https://github.com/nicolepompei/angular-typing-game',
        backendRepoUrl: '',
        hostedUrl: 'https://angular-typing-game-six.vercel.app/',
        title: "typing game",
        description: 'Angular11 and Bulma based typing game with a randomly generated sentence. The colors of the letters in the randomly generated sentence change based on user input. Pending input remains gray, correct input turns green and incorrect input turns red. If a user types all chracters successfully, a success message displays.',
        mainImagePath: ['assets/imgs/typinggame.png'],
        technologies: ['Angular11', 'HTML5', 'CSS3', 'Typescript', 'Bulma', 'Structural Directives', 'Event Binding', 'Property Binding', 'Interpolation']
    },
    {
        projectId: 4,
        frontendRepoUrl: 'https://github.com/nicolepompei/drum-machine-javascript-html-css',
        backendRepoUrl: '',
        hostedUrl: 'https://drum-machine-javascript-html-css.vercel.app/',
        title: "drum machine",
        description: ' Independently produced a web-based drum machine app using HTML, CSS, and JavaScript. Utilized the FlexBox model and music samples from Splice. The web application features dynamically generated drum pads based on the user selected library. Users can operate the drum machine via key press or mouse click.',
        mainImagePath: ['assets/imgs/drum-machine.png'],
        technologies: ['HTML5', 'CSS3', 'Javascript', 'Event Handling', 'Key Events', 'Click Events']
    },
    {
        projectId: 5,
        frontendRepoUrl: 'https://github.com/nicolepompei/blogprojectfrontend',
        backendRepoUrl: 'https://github.com/nicolepompei/blog_project',
        hostedUrl: "",
        title: 'blrb',
        description: 'Created with an Agile team of 6, "blrb" is a full stack blog application based on Medium and tumblr. I was personally responsible for contributing to the backend architecture, JWT functionality on the front end and backend, BlogPost Service and Auth Controller Tests with JUnit5 and Mockito, HTTP Interceptor and error handling on the front end, tagbar linking functionality, and front end styling with custom CSS.',
        mainImagePath: ['assets/imgs/blrb-full-post.png'],
        technologies: ['Spring Boot', 'Angular11', 'Typescript', 'HTML5', 'CSS3', 'Bootstrap', 'MVC', 'RESTful Services', 'JWT', 'AWS S3 Cloud Storage', 'MySQL', 'CRUD', 'Builder Pattern', 'Heroku Deployment']
    },
    {
        projectId: 6,
        frontendRepoUrl: 'https://github.com/jamiepompei/react-todo-list-app',
        backendRepoUrl: '',
        hostedUrl: "https://react-todo-list-app-delta.vercel.app/",
        title: 'todo list app',
        description: 'This app is a small todo list program that allows a user to add todos, toggle them as complete/incomplete, and delete them from the list. When there are no todo items present, a string of "No todos" will appear in place of a list of todos. The app utilizes the useEffect React Hook to persist todo items in local storage and the useState React Hook to load todo items from local storage. The purpose of this app is to explore React concepts including custom components, hooks, props, and broadly how to write and format React code.',
        mainImagePath: ['assets/imgs/react-todo-list-app.png'],
        technologies: ['React', 'useEffect', 'useState', 'Javascript']
    },
    {
        projectId: 7,
        frontendRepoUrl: '',
        backendRepoUrl: 'https://github.com/jamiepompei/media-inventory-app-server',
        hostedUrl: "",
        title: 'media inventory CRUD app',
        description: 'Independently developing a web-based media CRUD inventory application using Spring Boot, JPA, SQL, Typescript, and React. The application will include functionality for user authentication, login, and logout via JSONWebToken. Users have ADMIN access over their own media collections and can grant VIEW access to their collections to other users. Users can search their top level collections and within an individual collection.',
        mainImagePath: ['assets/imgs/GETBOOKS_media_inventory_app.png'],
        technologies: ['Java', 'Spring Boot', 'Hibernate', 'SQL', 'Typescript', 'React']
    },
    {
        projectId: 8,
        frontendRepoUrl: 'https://github.com/jamiepompei/MERN-AI-ChatBot/tree/main/frontend',
        backendRepoUrl: 'https://github.com/jamiepompei/MERN-AI-ChatBot/tree/main/backend',
        hostedUrl: "",
        title: 'MERN AI Chatbot',
        description: "Independently developed a web-based AI Chatbot application using MERN Stack, OpenAI API, JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains. This application is a customized and secure chatbot with protected routes and verification checks where each user's messages can be retrieved or deleted from the database. The chat display is capable of showing code blocks and is fully responsive across devices.",
        mainImagePath: ['assets/imgs/mernstack-ai-chatbot.png'],
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Typescript', 'Open-AI API', 'Vite', 'Material UI', 'JWT Tokens', 'HTTP-Only Cookies']
    }
]


