
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Nurhak ALTIN",
  title: "Hi all, I'm Nurhak",
  subTitle: emoji("A passionate Software Developer, Entrepreneur, DevOps Engineer 🚀 having an experience of building Web and Computer Vision applications. Creating CI/CD environments."),
  resumeLink: "https://drive.google.com/file/d/1h45oKnWZYqTaiS2JK8w_KGWNWYCAdfoh/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Nurhak",
  linkedin: "https://www.linkedin.com/in/nurhakaltin/",
  gmail: "nurhakaltin@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Creating highly interactive tools for system adminstrations."),
    emoji("⚡ Creating CI/CD envrionments for the different type of applications."),
    emoji("⚡ Migration of legacy VCS to the git environment."),
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      ID:1,
      Stack:"OOP",
      progressPercentage: "80%"
    },
    {
      ID:2,
      Stack: "C++",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      ID:3,
      Stack: "Linux",
      progressPercentage: "90%"
    },
    {
      ID:4,
      Stack: "CI/CD",
      progressPercentage: "90%"
    },
    {
      ID:5,
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "MTBjMDI5YzEyZGZiMmZhZmU5MGY4NjM4YTU3NWQ4MDI3ZTRkZTc3Mw==",
  githubUserName: "Nurhak",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: emoji("Big Projects 🏢"),
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "partnersbond",
      link: "http://partnersbond.com/"
    },
    {
      image: "visipurs",
      link: "http://visipurs.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
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
      subtitle: "Enterprise Design Thinking Practitioner",
      image: "https://images.youracclaim.com/size/680x680/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png",
      footerLink: [
        { name: "Certification", url: "https://images.youracclaim.com/size/680x680/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "PUBLICATIONS",
  subtitle: emoji("I LOVE TO SHARE MY SCIENTIFIC STUDIES 📢"),

  talks: [
    {
      title: "Deep Learning Based Road Crack Detection on an Embedded Platform",
      subtitle: "World Academy of Science, Engineering and Technology International Journal of Computer and Information Engineering(WASET)",
      slides_url: "https://publications.waset.org/abstracts/87638/pdf"
    }
  ]
};

// Podcast Section

const patentsSection = {
  title: emoji("Patents 📃"),
  subtitle: "I LIKE TO CREATE NEW METHODOLOGIES AND DEVICES",

  // Please Provide with Your Podcast embeded Link
  patents: [
    {
      url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/detayli",
      title: "Tire Pattern Trace Analysis and Approval System and Method",
      description: "05-11-2018 2018/16577 2018-GE-223124"
    },
    {
      url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/detayli",
      title: "Tire Crushing Machine",
      description: "05-11-2018 2018/16577 2018-GE-470267"
    },
    {
      url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/detayli",
      title: "Tire Pattern Trial Analysis and Approval System and Method",
      description: " 01-10-2018 2018/14272 2018-GE-414046"
    },
    {
      url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/detayli",
      title: "Tire Pattern Measurement Machine",
      description: "28-06-2018 2018/09253 2018-GE-283122"
    },
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+905304636980",
  email_address: "nurhakaltin@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, patentsSection, contactInfo , twitterDetails};
