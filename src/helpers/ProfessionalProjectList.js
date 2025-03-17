/* Place in descending order of importance */

export const ProfessionalProjectList = [
    {
        name: "Literature Review App",
        tech: "Angular, NodeJS, Express, PostgreSQL",
        highlights: "I used test-driven development to ensure the core functionality of the app was robust no matter how end users might review articles or what future functionality might be added to the app.",
        role: "This app was developed as a 4-person team. I made the initial app design and prepared front and back-end specifications. I contributed to front and back-end development and reviewed code from the other developers.",
        objectives: "To build a new app that improved on the performance and functionality of an existing company app for literature reviews. The app is used to track the progress of articles through literature reviews, based on eligibility decisions made by the review team. As results of these reviews are often used to support health technology assessments for drug reimbursement, their accuracy is crucial.",
        design: "I conducted workshops with literature review teams and found they often needed to adjust their review methodology to manage increasing review sizes. To account for these changes and future proof the new application I designed a system that would allow for much more flexibility in how users conducted their reviews. This added flexibility caused some design challenges, particularly as it increased the overall complexity of tracking review progress.",
        development: "As the logic driving progression of articles through reviews was both complex and critical for review accuracy, I defined tests for all possible review scenarios before API development was started. This way, the lead back-end developer could create APIs that worked consistently and gave us confidence that making future updates to the app wouldn't compromise the underlying logic.",
        outcome: "The new app was well-received, and we were able to retire the original application soon after the new one launched.",
        tags: ['Angular', 'Express', 'Sequelize', 'Web', 'App', 'Team']
    },
    {
        name: "Delphi Panel App",
        tech: "Angular, NodeJS, Express, PostgreSQL",
        highlights: "Since the introduction of the app, Costello Medical have been able to more than triple the number of Delphi panel projects conducted each year.",
        role: "This was a solo app development project. I was resposible for full-stack development and deployment.",
        objectives: "Delphi panels are a rigorous but resource-intensive method of eliciting consensus from a panel of experts. This app was built to improve the efficiency and accuracy of Delphi panels which typically involve conducting multiple survey rounds and preparing tailored result summaries for each participant.",
        design: "As I didn't personally have experience of conducting Delphi panels, I worked closely with project teams to understand inefficiencies in the existing process and researched the key features that were offered by competitor software.",
        development: "The app and APIs are divided into Study Coordinator, Client and Participant-facing versions to maintain appropriate content restrictions for each user as perserving participant anonymity is a core element of Delphi methodology. The app automates calculation of survey round results using raw SQL queries to remove the need for manual calculation by the project team. As most clients require externally facing materials to undergo copy approval, the app uses Puppeteer to crawl pages and generate PDF screenshots of the participant view of the app.",
        outcome: "The app has been used to conduct Delphi panels for clients since it's launch in 2021, several of which have been published in peer-reviewed scientific journals.",
        url: "https://www.costellomedical.com/what-we-do/evidence-development/delphi-panels",
        tags: ['Angular', 'Express', 'PostgreSQL', 'Web', 'App', 'Solo']
    },
    {
        name: "Cloud Permissions Manager",
        tech: "Angular, NodeJS, NestJS, PostgreSQL",
        highlights: "Introduction of this app saved the company £10ks in IT service provider fees.",
        role: "This app was developed as a 3-person team. I was responsible for the overall design of the app, front-end development and contributed to some back-end development. I also reviewed code from the other developers.",
        objectives: "To migrate from a manual system of approving folder access requests through raising IT service provider tickets to a self-service system.",
        design: "The app needed to stay in sync with the company's cloud file storage system but data retrieval via the system APIs was heavily rate limited. To work around this I mapped out the main user flows against existing ticket volumes to distribute API keys evenly and keep the calls to refresh data as low as possible.",
        development: "The timelines for releasing the app were tight and fixed as a result of the IT service provider contract ending, requiring development, security testing and onboarding of the whole company to be completed in under two months. I therefore prioritised core functionality, embedded user guidance within the app and pre-reviewed the app for security vulnerabilities that could come up during pen-testing.",
        outcome: "The app was successfully launched ahead of the deadline with no major issues.",
        tags: ['Angular', 'NestJS', 'TypeORM', 'Web', 'App', 'Team']
    },
    {
        name: "Contract Management App",
        tech: "Angular, NodeJS, Express, PostgreSQL",
        highlights: "This was one of the largest apps developed at the company, and launched in under a year.",
        role: "This app was developed as a 4-person team. I made the initial app design and prepared front and back-end specifications. I reviewed code from the other developers and contributed to front and back-end development.",
        objectives: "To establish a central, searchable system to record all client and supplier contracts, and track the contract review process. The app would be used by scientific and internal teams across the company to request contract reviews, be able to monitor their progress and refer back to contract details.",
        design: "I supplemented the brief from the Legal team with research into competitor offerings, interviews with other user groups and my own knowledge of the contracting process to set out required features and map out user journeys.",
        development: "I supervised development and assisted with writing more complex front-end pages and database queries, including creating custom SQL functions to conduct searches across database tables and columns. The scope of the app changed during development so I made adjustments to replace certain features so we could stay on schedule.",
        outcome: "The app was released on time and prompted discussions to consider moving other company processes into internally-developed apps.",
        tags: ['Angular', 'Express', 'Sequelize', 'Web', 'App', 'Team']
    },
    

];