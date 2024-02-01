export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    name: "Juan Solano",
    title: "Software Engineer",
    summary:
      "Creative and detail-oriented Full-Stack Software Engineer with a strong foundation in JavaScript technologies and growing expertise in Python development. I have experience working cohesively with cross-functional teams to build innovative solutions. I am fascinated with the narrow applications of AI and excited for the future",
    workExperience: [
      {
        position: "Software Engineer",
        company: "Prime Healthcare",
        date: "January 2023 — Present",
        achievements: [
          "Excelled in UI development using React, crafting intuitive and responsive interfaces that improved user engagement and streamlined interactions",
          "Designed and optimized complex data pipelines, integrating multiple data sources, advanced transformation scripts, and dynamic import/export conditions",
          "Engineered robust APIs in Node.js, and assisted in maintaining Python-based APIs, bolstering back-end functionality and facilitating fluid user interactions",
          "Swiftly mastered full-stack ServiceNow development, becoming a key support pillar after the team lead's departure",
          "Balanced technical expertise with business insight, ensuring development efforts positively impacted the organization's strategic objectives and profitability",
        ],
      },
      {
        position: "Full Stack Software Engineer",
        company: "100Devs",
        date: "January 2021 — December 2022",
        achievements: [
          "Collaborated on building web applications using React, Node, and Express in an Agile environment.",
          "Developed full-stack applications with semantic structures.",
          "Applied agile methodologies like SCRUM for project management.",
        ],
      },
      {
        position: "Frontend Developer",
        company: "Solano’s Consulting",
        date: "January 2020 — Present",
        achievements: [
          "Designed UX/UI for responsive websites, achieving a 15% increase in user engagement.",
          "Created websites using HTML, CSS, and Javascript.",
          "Boosted SEO performance by implementing up-to-date best practices.",
        ],
      },
    ],
    projects: [
      {
        name: "Zentor AI",
        description: "AI-Powered Personal Journal",
        features: [
          "Comprehensive personal journal platform, utilizing the Next.js framework alongside React for a robust front-end experience",
          "Integrated Next.js for server-side rendering (SSR) of React components,ensuring fast page loads and improved SEO",
          "Developed custom React hooks and state management solutions to handle real-time updates in the journal, providing seamless integration of AI-generated insights and user inputs.",
        ],
      },
      {
        name: "OCR-EXCEL",
        description: "Invoice Management App",
        features: [
          "Developed a MERN-based application designed for invoice creation and management, specifically targeting clients with non-native English-speaking employees",
          "Integrated OpenAI’s APIs to auto-correct broken English in invoice descriptions, improving communication clarity",
          "Implemented back-end storage solutions using MongoDB and automated Excel creation for easy data export",
        ],
      },
    ],
    contact: {
      phone: "909.717.3587",
      email: "Email",
      website: "Website",
      social: {
        github: "Github",
        linkedin: "LinkedIn",
        twitter: "Twitter",
      },
    },
    skills: [
      "HTML",
      "CSS",
      "Python",
      "Django",
      "Javascript",
      "React",
      "React Native",
      "Node",
      "MongoDB",
      "SQL Server",
      "ServiceNow",
      "APIs",
    ],
    education: {
      institution: "California Polytechnic State University, Pomona",
      degree: "B.S. Business Administration, Marketing",
    },
    otherProjects: [
      "Created a weather app using React, fetching real-time data through a public API.",
      "Built a chat application using Node and Socket.io",
      "Developed a recipe finder app using an Express back-end and a front-end built with React and Material UI",
    ],
  });
}
