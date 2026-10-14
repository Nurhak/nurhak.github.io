/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Nurhak ALTIN",
  title: "Hi all, I'm Nurhak",
  subTitle: emoji("Lead Application Developer & Applied AI Engineer 🤖 I build AI agents that do real work in production — from multi-agent development pipelines to the product UIs around them. 8+ years across web, cloud, computer vision and embedded."),
  resumeLink: "https://nurhak.notion.site/nurhak/Resume-f37aa8ca888b4e409a9d048b473b1dda",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nurhak",
  linkedin: "https://www.linkedin.com/in/nurhakaltin/",
  gmail: "nurhakaltin@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section


const skillsSection = {
  title: "What I do",
  subTitle: "APPLIED AI ENGINEER WHO SHIPS AGENTS, PLATFORMS AND THE PRODUCTS AROUND THEM",
  skills: [
    emoji("⚡ Design and build agentic systems: orchestrated multi-agent workflows with Claude Agent SDK, Mastra and Inngest, human approval gates and LLM-as-judge evaluation"),
    emoji("⚡ Run AI in production: Langfuse tracing, cost visibility per feature, Amazon Bedrock and hybrid local + cloud models"),
    emoji("⚡ Lead frontend architecture: TypeScript, React and Next.js on Cloudflare Workers, configuration-driven UI engines, enterprise auth (SSO, SCIM)"),
    emoji("⚡ Go all the way down the stack: computer vision, Rust, ESP32 firmware and KiCad PCB design"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
 {
    skillName: "TypeScript",
    imageType: "local",
    imageSrc: require("./assets/images/ts-icon.svg"),
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "swift",
    fontAwesomeClassname: "fab fa-swift"
  },
], 
  display:true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Kocaeli University',
      logo: require('./assets/images/kou_logo.png'),
      subHeader: 'Bachelor Degree in Electronics and Telecommunication Engineering',
      duration: 'September 2013 - April 2018',
      desc: 'Participated in the research of Computer Vision and AI and published 1 paper.',
      descBullets: [
        'Engineering Achievement Award',
      ],
    },
    {
      schoolName: 'Kocaeli University',
      logo: require('./assets/images/kou_logo.png'),
      subHeader: 'Bachelor Degree in Computer Engineering (Double Major)',
      duration: 'September 2014',
      desc: 'Participated in the research of Computer Vision and AI and published 1 paper.',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      ID:1,
      Stack: "Frontend Architecture",
      progressPercentage: "95%"
    },
    {
      ID:2,
      Stack: "AI Agents & LLMOps",
      progressPercentage: "85%"
    },
    {
      ID:3,
      Stack: "Fullstack & Cloud",
      progressPercentage: "85%"
    },
    {
      ID:4,
      Stack: "Linux & DevOps",
      progressPercentage: "80%"
    },
    {
      ID:5,
      Stack: "Embedded & Computer Vision",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
   experience: [
    {
      role: "Lead Application Developer & Applied AI Engineer",
      company: "APS Group",
      companylogo: require("./assets/images/aps-logo.svg"),
      date: "Feb 2023 – Present",
      desc: "Leading development of Cohero, APS Group's AI-powered omnichannel content platform.",
      descBullets: [
        "Designing an agentic delivery pipeline: specialised AI agents for coding, review and testing, with confidence-based human approval and per-feature cost tracking",
        "Next.js/TypeScript on Cloudflare Workers with a GraphQL/REST backend, built to enterprise security and accessibility standards",
        "As Senior Application Engineer (2023–24): built a configuration-driven UI engine that renders fully customisable interfaces in React, and helped standardise how frontend applications are structured",
      ],
    },
    {
      role: "Senior Frontend Developer",
      company: "Kees De Boekhouder",
      companylogo:  require("./assets/images/kees-logo.png"),
      date: "Sep 2021 – Mar 2023",
      desc: "Developing web applications to allow customers manage their tax statement."
    },
    {
      role: "Software Engineer",
      company: "ICT Group",
      companylogo:  require("./assets/images/ict_logo.jpeg"),
      date: "Dec 2020 – Sep 2021",
      desc: "Developing web applications and cloud solutions."
    },
    {
      role: "Design Application Engineer",
      company: "Netaş",
      companylogo:  require("./assets/images/netas_logo.jpeg"),
      date: "Nov 2018 – Oct 2020",
      desc: "Developing highly interactive system administration tools with Perl, Bash, and customizing RedHat OS. Creating CI/CD environments with Jenkins, Git, Artifactory. Developing a test framework with Python."
    },
    {
      role: "R&D Assistant Specialist",
      company: "Bites",
      companylogo: require("./assets/images/bites_savunma_logo.png"),
      date: "July 2018 – Oct 2018",
      desc: "Developing and implementing low-level computer vision algorithms and high-level AR applications with C++, Qt."
    },
    {
      role: "R&D Engineer Assistant",
      company: "Prometeon",
      companylogo: require("./assets/images/logo-prometeon.jpeg"),
      date: "Mar 2017 - July 2018",
      desc: "Developing signal processing and computer vision application for factory-wide measurement tools with C++, Qt."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Nurhak', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/partnersbond_logo.png'),
      link: "https://partnersbond.com/"
    },
    {
      image: require('./assets/images/visipurs_logo.png'),
      link: "https://visipurs.com/"
    },
    {
      image: require('./assets/images/clpads_logo.jpg'),
      link: "https://clpads.com/"
    },
    {
      image: require('./assets/images/arc_logo.jpg'),
      link: "https://arcavukatlik.com/"
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Selected AI work — agentic development and multi-model projects

const aiProjects = {
  title: "Selected AI Work",
  subtitle: "AGENTIC SYSTEMS AND MULTI-MODEL PRODUCTS I'M BUILDING",
  projects: [
    {
      title: "AI Software Agency Platform",
      desc: "Agent platform that runs software work end-to-end: Mastra and Inngest durable workflows orchestrating Claude Agent SDK workers on self-hosted nodes, traced in Langfuse. Multi-tenant auth with SSO step-up and SCIM.",
      tags: ["Claude Agent SDK", "Mastra", "Inngest", "Langfuse", "Cloudflare"],
    },
    {
      title: "Hybrid Local + Cloud AI Infrastructure",
      desc: "Self-hosted AI stack combining local models (32B coding models via Ollama on Apple Silicon) with Claude. A Telegram bot hands natural-language tasks to Claude Code with human approval gates; a Python agent automates a media pipeline.",
      tags: ["Ollama", "Claude Code", "Python", "Docker"],
    },
    {
      title: "HomeHub",
      desc: "React Native / Expo property-search app built with a multi-agent Claude Code workflow — parallel agents for features, review and testing.",
      tags: ["React Native", "Expo", "Multi-agent", "TanStack Query"],
    },
    {
      title: "KMklopt",
      status: "In development",
      desc: "Native iOS + CarPlay mileage log for Dutch lease drivers, with AI reconstruction of past trips from known routines and smart recommendations.",
      tags: ["Swift", "CarPlay", "AI"],
    },
    {
      title: "Personal Finance Agents",
      status: "In development",
      desc: "Agents that analyse spending, detect subscriptions and contracts, research cheaper alternatives and draft quote requests automatically.",
      tags: ["AI Agents", "Node.js", "Automation"],
    },
    {
      title: "Vehicle Diagnostics Platform",
      desc: "Rust diagnostic core with a custom ESP32-S3 CAN-bus adapter built on open hardware.",
      tags: ["Rust", "ESP32-S3", "CAN bus"],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: "Professional Scrum Master 1",
      subtitle: "Scrum.org | nurhakaltin@gmail.com",
      imageType: "local",
      image: require('./assets/images/psmi.png'),
      footerLink: [
        { name: "Certification", url: "https://www.scrum.org/certificates/664467" }
      ]
    }, 
    {
      title: "Second Prize of TUBITAK 2241 Competition",
      subtitle: "A Control System and Method Used in the Rubber Sector named graduation thesis has won the competition in Industrial Final Thesis field.",
      image:
        "https://upload.wikimedia.org/wikipedia/tr/thumb/d/d0/TUBITAK-Logo.jpg/200px-TUBITAK-Logo.jpg",
      footerLink: [
        { name: "Award Letter", url: "http://www.kocaeli.edu.tr/int/haber-ayrinti.php?h=Frz5K26q" }
      ]
    },
    {
      title: "Mate ROV International Competitor",
      subtitle: "The competition is conducted at NASA have participated with our team to represent Turkey.",
      image: "https://pbs.twimg.com/profile_images/1069664567280717825/Qy1lfzQa.jpg",
      footerLink: [
        { name: "ROV Video", url: "https://www.youtube.com/watch?v=gguO14y8kzQ" },
        { name:"Social Media", url: "https://twitter.com/luckyfinteam"} 
      ] 
    },

    {
      title: "Enterprise Design Thinking Practitioner",
      image: "https://images.youracclaim.com/size/680x680/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png",
      footerLink: [
        { name: "Certification", url: "https://www.youracclaim.com/badges/d2c3c6f5-7762-4b3b-988e-f68b2f18f75a" }
      ]
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  bio: "Lead Application Developer · Applied AI Engineer · Builder", // Shown in the contact card instead of the GitHub bio
  number: "+31617329405",
  email_address: "nurhakaltin@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: 'nurhakaltin', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  aiProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
