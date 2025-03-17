import Karma from '../assets/Karma.png';
import PlanAndTrack from '../assets/PlanAndTrack.png';

export const PersonalProjectList = [
    {
        name: "Time Management App",
        image: PlanAndTrack,
        tech: "Flutter, Supabase",
        highlights: "This was my first time using Supabase, and I've enjoyed the convenience of being able to quickly prototype database designs while building the app front-end.",
        role: "This is a solo development project.",
        objectives: "To create a cross-platform web application to address two gaps in personal productivity apps: 1. ability to time block initially at a broad level, then optionally assign specific tasks to time blocks at a later point, and 2. concurrent time planning and tracking.",
        design: "I designed the app to be responsive, but with a focus on mobile use since this is likely to be the primary device for accessing the application. The app is divided into three sections for easy navigation; one for scheduling time blocks, one for reviewing time spent and one for viewing project progress. For convenience, time entries and tasks can be managed from multiple sections.",
        development: "I created the app using Flutter and Supabase as a fast way to prototype functionality. With Flutter the app can be built for multiple platforms, including mobile, from the same code base. The app is currently deployed to the web using Netlify.",
        outcome: "The app is still under development, however I am currently using the app to schedule design, development, marketing, art and sound production tasks for a commercial game I plan to release in 2025. Key features to be added prior to full launch include integration with Toggl and Xero APIs for time tracking, and support for task editing and scheduling in bulk.",
        url: "https://fancy-sherbet-5468c3.netlify.app/",
        tags: ['Flutter', 'Supabase', 'Web', 'App', 'Solo']
    },
    {
        name: "Web Game",
        image: Karma,
        tech: "Godot, gdscript",
        highlights: "Won first place in the Super Nintendo Style Graphics Jam",
        role: "This was a solo project where I was responsible for the full design and development of the game. I used freely available art, music and sound assets.",
        objectives: `Create a new game within five weeks to meet the game jam constraints: SNES graphics and "you are not the main character".`,
        design: "Playable as a web build",
        development: "",
        outcome: "I completed the game ahead of the deadline.",
        url: "https://nationalvelvett.itch.io/karma",
        tags: ['Godot', 'gdscript', 'Web', 'Game', 'Solo']
    },

];