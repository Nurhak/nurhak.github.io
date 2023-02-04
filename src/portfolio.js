/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Nurhak ALTIN",
  title: "Hi all, I'm Nurhak",
  subTitle: emoji("A passionate Senior Software Engineer, Entrepreneur 🚀 having an experience of building web applications and creating CI/CD environments."),
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
  title: "What i do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Creating highly interactive tools for system adminstrations."),
    emoji("⚡ Creating CI/CD envrionments for the different type of applications."),
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
    skillName: "angular",
    fontAwesomeClassname: "fab fa-angular"
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
    skillName: "Redhat",
    fontAwesomeClassname: "fab fa-redhat"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
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
      ID:5,
      Stack: "Golang",
      progressPercentage: "10%"
    },
    {
      ID:3,
      Stack: "Linux",
      progressPercentage: "90%"
    },
    {
      ID:4,
      Stack: "DevOps",
      progressPercentage: "80%"
    },
    {
      ID:1,
      Stack: "Frontend",
      progressPercentage: "95%"
    },
    {
      ID:1,
      Stack: "Fullstack",
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
      role: "Senior Frontend Engineer",  
      company: "Kees De Boekhouder",
      companylogo:  require("./assets/images/kees-logo.png"),
      date: "Sep 2021 – Present",
      desc: "Developing web applications to allow customers manage their tax statement."
    },
    {
      role: "Senior Software Engineer",  
      company: "ICT Group",
      companylogo:  require("./assets/images/ict_logo.jpeg"),
      date: "Dec 2020 – Sep 2021",
      desc: "Developing web applications and cloud solutions."
    },
    {
      role: "Senior Software Engineer",  
      company: "Netaş",
      companylogo:  require("./assets/images/netas_logo.jpeg"),
      date: "Nov 2018 – Oct 2020",
      desc: "Developing highly interactive system administration tools with Perl, Bash, and customizing RedHat OS. Creating CI/CD environments with Jenkins, Git, Artifactory. Developing a test framework with Python."
    },
    {
      role: "Software Engineer",   
      company: "Bites",
      companylogo: require("./assets/images/bites_savunma_logo.png"),
      date: "July 2018 – Oct 2018",
      desc: "Developing and implementing low-level computer vision algorithms and high-level AR applications with C++, Qt."
    },
    {
      role: "Software Engineer",  
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
