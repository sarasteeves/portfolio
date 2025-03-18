import Karma from '../assets/Karma.png';
import PlanAndTrack from '../assets/PlanAndTrack.png';

export const PersonalProjectList = [
    {
        name: "Time Management App",
        image: PlanAndTrack,
        tech: "Flutter, Supabase",
        highlights: "This was my first time using Supabase, and I've enjoyed the convenience of being able to quickly prototype database designs while building the app front-end.",
        role: "This is a solo development project.",
        objectives: "To create a cross-platform web app to address two gaps in personal productivity apps: 1. ability to time block initially at a broad level, then optionally assign specific tasks to time blocks at a later point, and 2. concurrent time planning and tracking.",
        design: "I designed the app to be responsive, but with a focus on mobile use since this is likely to be the primary device for accessing the app. The app is divided into three sections for easy navigation; one for scheduling time blocks, one for reviewing time spent and one for viewing project progress. For convenience, time entries and tasks can be managed from multiple sections.",
        development: "I created the app using Flutter and Supabase as a fast way to prototype functionality. With Flutter the app can be built for multiple platforms, including mobile, from the same code base. The app is currently deployed to the web using Netlify.",
        outcome: "The app is still under development, however I am currently using the app to schedule design, development, marketing, art and sound production tasks for a commercial game I plan to release in 2025. Key features to be added prior to full launch include integration with Toggl and Xero APIs for time tracking, and support for task editing and scheduling in bulk.",
        url: "https://fancy-sherbet-5468c3.netlify.app/",
        tags: ['Flutter', 'Supabase', 'Web', 'App', 'Solo']
    },
    {
        name: "Web Game",
        image: Karma,
        tech: "Godot, gdscript",
        highlights: "Won first place in the Super Nintendo Style Graphics Jam.",
        role: "This was a solo project where I was responsible for the full design and development of the game. I used freely available art, music and sound assets.",
        objectives: `Create a new game within five weeks to meet the game jam constraints: SNES graphics and "you are not the main character".`,
        design: "I wanted to design a game where the player is in a supporting role but still has control over how they play, and landed on making the player character a horse with differing gameplay depending on whether they have a rider. For visuals, I used a side-scrolling perspective with parallax to give a sense of distance and speed when moving through environments while being able to keep the scope manageable for the game jam time constraints.",
        development: "As this was a game jam entry, I wanted to release it as a web build so others could play it without needing to download or install the game. This meant avoiding plugins and using the engine's gdscript for development. I first created the combat system and implemented the enemy and player support AI. After I was happy the combat worked well, I spent the bulk of my time setting up the underlying architecture for the game, including state management, character classes and player progression systems. I made frequent builds and tests during development to ensure it would run correctly on the target platform.",
        outcome: "Thanks to using pre-made assets and having well-designed game architecture in place, building out the levels went quickly. I completed the game ahead of the deadline and received positive feedback from those who tried it, particularly for how much content had been included within the development time.",
        url: "https://nationalvelvett.itch.io/karma",
        tags: ['Godot', 'gdscript', 'Web', 'Game', 'Solo']
    },

];