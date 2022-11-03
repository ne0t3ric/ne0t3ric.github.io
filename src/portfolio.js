/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "ne0t3ric's Portfolio",
  description:
    "Fullstack web developer, passionate about software technologies but also music, travelling, and Go strategy board game (not Go-lang ;))",
  og: {
    title: "ne0t3ric Portfolio",
    type: "website",
    url: "https://ne0t3ric.github.io",
  },
};

//Home Page
const greeting = {
  title: "Eric Hang",
  logo_name: "ne0t3ric",
  nickname: "ne0t3ric",
  subTitle:
      "Fullstack web developer, passionate about software technologies but also music, trips, and Go strategy board game (not Go-lang ;))",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "https://github.com/ne0t3ric",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/ne0t3ric",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
/*  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },*/
/*  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:ne0t3ric@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ne0t3ric",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
/*  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
/*  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },*/
];

const skills = {
  data: [
    {
      title: "Front-end Development",
      fileName: "FrontEndIllustration",
      skills: [
        "⚡ Building responsive SPA web application using Typescript & Vue & Pinia & Vuetify",
        "⚡ Developing an internal web app in React",
        "⚡ Creating a geographic JS library (GIS)",
        "⚡ Exploiting different OGC APIs (WMS, TMS) to display maps on website using Leaflet.js",
        "⚡ Producing complex temporal and dynamic graphical visualisation using Highcharts"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Leaflet",
          fontAwesomeClassname: "simple-icons:leaflet",
          style: {
            color: "#199900",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Back-end Development",
      fileName: "BackEndIllustration",
      skills: [
        "⚡ Developing backend web application using Laravel & GraphQL & PostgreSQL for db",
        "⚡ Building a data transformations on-the-fly system in Python, based on Metwork framework",
        "⚡ Creating an HTTP API acting as a bridge to multiple APIs in Node, Typescript, Express",
        "⚡ Developing a quick internal HTTP API in Flask",
        "⚡ Creating an HTTP API serving GIS grid data in aiohttp"
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4"
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "#3776AB",
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "DevOps development",
      fileName: "DevOpsIllustration",
      skills: [
        "⚡ Creating CI pipelines from scratch",
        "⚡ Building and publishing docker images",
        "⚡ Building and publishing javascript library via Nexus",
        "⚡ Deploying web application in production (Apache web server + OPcache) + linking to databases"
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#D22128",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        }
      ],
    },
    {
      title: "Soft skills",
      fileName: "SoftSkillIllustration",
      skills: [
        "✨ Perseverance",
        "🧘‍♂️ Patience",
        "📘 Self-learning",
        "🪞 Self-awareness",
        "👂 Empathy",
        "🤝 Teamwork",
        "✍️ Problem solving",
        "👀 Curiosity"
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
   */
  ],
};

const degrees = {
  degrees: [
    {
      title: "INP Ecole Nationale de Météorologie",
      subtitle: "Master in Meteorology and Scientific Computing",
      logo_path: "enm_logo.png",
      alt_name: "ENM Toulouse",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, Linux, Java",
        "⚡ I have studied some specific software engineering subjects like Parallel Programming, Statistical Computation",
      ],
      website_link: "http://www.enm-toulouse.fr/",
    },
    {
      title: "CPGE - Paul Cezanne PCSI /PC*",
      subtitle: "Post-graduate mathematical, physics & chemistry prep school",
      logo_path: "cpge_logo.png",
      alt_name: "ENM Toulouse",
      duration: "2012 - 2015",
      descriptions: [
        "The CPGEs are a two-year curriculum extensible to three-years, acting as an intensive prep course with the main goal of training students for enrollment in one of the grandes écoles. The grandes écoles of France are higher education establishments aside the mainstream framework of the public universities.",
        "To summarize, it is 9h/week of physics, 9h/week of mathematics, 6h/week of chemistry, 2h/week pprogramming, and 6h/week languages lessons",
      ],
      website_link: "https://www.lyc-cezanne.ac-aix-marseille.fr/spip/spip.php?rubrique11",
    }
  ],
};

const certifications = {
  certifications: [
/*    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "Météo-France",
          company_url: "https://meteofrance.fr/",
          logo_path: "mf_logo.png",
          duration: "2015 - 2023",
          location: "Toulouse, FRANCE",
          description:
            "",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Hydrology Research Intern",
          company: "CESBIO",
          company_url: "https://www.cesbio.cnrs.fr/",
          logo_path: "cesbio_logo.png",
          duration: "2015",
          location: "Toulouse, FRANCE",
          description:
            "Subject: Snow remote sensing for runoff modelling in the Pyrenees." /** https://drive.google.com/file/d/1JitIRRMaBYfw3_ODZeZIZPmfHV8ZfI6p/view?usp=sharing */,
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "In charge of internal and external communication in ENM University",
          company: "ENM",
          company_url: "http://www.enm.meteo.fr/content/aeenm",
          logo_path: "enm_logo.png",
          duration: "2012",
          location: "Toulouse, FRANCE",
          description: "In charge of communication with other universities to organise events, but also communication with local school students. Also designing events posters with Photoshop",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Fun projects",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
/*    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar_neoteric.png",
    description:
      "I am available on twitter & mail. You can message me, I will answer you as fast as I can",
  },
  blogSection: {
    title: "",
    profile_image_path: "avatar_neoteric.png",
    description:
        "",
  },
  addressSection: {
    title: "Location",
    subtitle:
      "Toulouse, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/52heDKZMMsBps4g67",
  },
  phoneSection: {
    title: "",
    subtitle: ""
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
