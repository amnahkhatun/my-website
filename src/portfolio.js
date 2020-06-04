
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Amnah Khatun",
  title: "Hello, I'm Amnah",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with Reactjs / Redux / JavaScript / Nodejs and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1pIa_CHwrybgymcD0R3z-ieyku_akL0dV/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/amnahkhatun",
  linkedin: "https://www.linkedin.com/in/akhatun/",
  gmail: "amnah.khatun@gmail.com",
  hackerrank: "https://www.hackerrank.com/amna_khatun1605",
  medium : "https://medium.com/@amna.khatun1605"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC DEVELOPER KEEN TO LEARN AND EXPLORE LATEST TECHNOLOGY",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for Web"),
    emoji("⚡ Expertise in using Chrome Developer Tools + Redux dev Tools to debug and optimise code"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / oAuth"),
    emoji("⚡ Making network calls using REST Api, fetch and Axios library")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-rocket"
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React js",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "Redux",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "ITC Inofotech",
      companylogo: require("./assets/images/itc.jpeg"),
      date: "Oct 2019 – Present",
      descBullets: [
        "Part of the core team to build the product from scratch using React, Redux in developing Individual and Enterprise Portal for Financial/Lending product including features like E-Kyc,   E-sign and E-Nach.",
        "Implemented oAuth and firebase authentication.",
        "Implemented some main feature including E-sign and Multi signer feature for all pages in PDF consisting of more than 50 Pages.",
      ]
    },
    {
      role: "Software Engineer",   
      company: "Shenzyn",
      companylogo: require("./assets/images/shenzyn.jpeg"),
      date: "May 2019 – Oct 2019",
      descBullets: [ 
      "Expertise in React Js framework to develop the SPA.",
      "Solely developed one complete screen for user input along with API Integration.",
      "Experience in using React JS components, Forms, Events, Keys, Router and Redux Dev tool",
      ]
    },
    {
      role: "Software Engineer",  
      company: "Sygina Data system",
      companylogo: require("./assets/images/sygina.jpeg"),
      date: "Aug 2018 – Aor 2019",
      descBullets: [
        "Involved in development of front-end page by using HTML, CSS, JavaScript along with Javascript library like Jquery.",
        "Expertise in making AJAX calls to fetch data from database and displaying it in UI.",
        "Expertise in using Chrome Developer Tools + Firebug to ensure front-end code and assets were optimized and of high-quality.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "amnahkhatun", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  // title: "Side Projects",
  // subtitle: "Part of UK based start up Areva",
  // projects: [
  //   {
  //     image: "",
  //     link: ""
  //   },
  // ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achivementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image:
  //       "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
  //     footerLink: [
  //       { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
  //       { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
  //       { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
  //     footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
  //     footerLink: [
  //       { name: "Certification", url: "" },
  //       { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
  //     ]
  //   }
  // ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://chatbotsmagazine.com/chatbot-the-next-big-thing-512b292303a4",
      title: "Chatbot the next big thing – Chatbots Magazine",
      description: "We are all hearing a lot about chatbots these days. It’s new and trendy so what is this chatbot and why is it so famous?"
    },
    {
      url: "https://chatbotsmagazine.com/conversational-interface-the-new-era-of-computing-cdffd0b72b0c",
      title: "Conversational Interface- The New Era of Computing",
      description: "We’re experiencing a new era of computing, where terms like machine learning and artificial intelligence are coming more in the frame."
    },
    {
      url: "https://chatbotsmagazine.com/why-chatbots-need-nlp-7ec6ec11e4f4",
      title: "Why Chatbots Need NLP",
      description: "Natural language processing (NLP) is a branch of AI that can be defined as the ability of a machine to analyse, understand, and generate human speech."
    },
    {
      url: "https://chatbotsmagazine.com/lets-know-supervised-and-unsupervised-in-an-easy-way-9168363e06ab",
      title: "Let’s know Supervised and Unsupervised in an easy way",
      description: "These two methods of Machine Learning algorithms have a great place in data mining. They are not only one of the hottest data science topics but also has a vital role in data-driven decision making."
    }
  ]
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/amnah-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/",
  //     image:
  //       "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
  //   }
  // ]
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: []
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "amnah.khatun@gmail.com"
};

//Twitter Section

const twitterDetails = {

  // userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, contactInfo , twitterDetails};
