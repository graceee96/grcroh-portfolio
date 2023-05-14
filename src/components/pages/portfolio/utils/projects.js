// import images
import techBlog from 'src/assets/images/tech-blog.png';
import weatherDashboard from 'src/assets/images/weather-dashboard.png';
import thankYou from 'src/assets/images/tyfbaf.png';
import cineman from 'src/assets/images/cineman.png';
import codeQuiz from 'src/assets/images/code-quiz.png';
import noteTaker from 'src/assets/images/note-taker.png'

export const projects = [
    {
        "id": 1,
        "project_title": "Tech•Prose•Poetry Blog",
        "image": techBlog,
        "github_url": "https://github.com/graceee96/tech-blog",
        "deployed_url": "https://evening-fjord-90217.herokuapp.com/",
        "description": "A CMS-style blog that provides a space for developers to write about coding. Developers can not only share their knowledge about technical concepts, recent advancements, and new technologies, but also can share prose and poetry to express their feelings about coding."
    },
    {
        "id": 2,
        "project_title": "Weather Dashboard",
        "image": weatherDashboard,
        "github_url": "https://github.com/graceee96/weather-dashboard",
        "deployed_url": "https://graceee96.github.io/weather-dashboard",
        "description": "Accessed weather forecast data from OpenWeather API to render onto page. Use local storage so that previous searches can be accessed again in the future. Use Bootstrap to format structure of webpage and CSS to add additional styling."
    },
    {
        "id": 3,
        "project_title": "Thank You For Being a Friend",
        "image": thankYou,
        "github_url": "https://github.com/jjjgm/gg-get-icecream.git",
        "deployed_url": "https://lit-ocean-94336.herokuapp.com/login",
        "description": "A social networking application for dogs to make new dog friends in their area. Main responsibilities were to create Handlebars page and to render data onto page. Added formatting and ensured that pages were responsive. Assisted with adding front-end JavaScript."
    },
    {
        "id": 4,
        "project_title": "Cineman",
        "image": cineman,
        "github_url": "https://github.com/b-reddington/Cineman",
        "deployed_url": "https://b-reddington.github.io/Cineman/",
        "description": "An application that uses YelpAPI and WatchMode API to create an entertainment (movie or television show) and restaurant pairing for users. Was responsible for creating functionality to create entertainment recommendations by accessing Watchmode API. Assisted with creating HTML forms and CSS formatting."
    },
    {
        "id": 5,
        "project_title": "Code Quiz",
        "image": codeQuiz,
        "github_url": "https://github.com/graceee96/code-quiz",
        "deployed_url": "https://graceee96.github.io/code-quiz",
        "description": "Quiz game that tests coding bootcamp students on their knowledge of HTML, CSS, and JavaScript. Users can then see the list of high scores in the end to compare their progress with that of their peers."
    },
    {
        "id": 6,
        "project_title": "Note Taker",
        "image": noteTaker,
        "github_url": "https://github.com/graceee96/note-taker",
        "deployed_url": "https://intense-beach-84145.herokuapp.com/",
        "description": "A note-taking application to help users keep track of their tasks. Users can write notes, access past notes, and delete notes."
    }
];