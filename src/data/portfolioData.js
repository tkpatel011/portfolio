export const personalDetails = {
  name: "Tej Kalola",
  role: "Computer Science Student & Competitive Programmer",
  handles: {
    github: "kalolaTej",
    codeforces: "Tej_Kalola_",
    leetcode: "Tej_Kalola",
    codolio: "Tej_Kalola",
    linkedin: "tej-kalola-1b58bb31a",
    email: "kalolatej007@gmail.com",
    phone: "+91 9313254554"
  },
  socials: {
    github: "https://github.com/kalolaTej",
    linkedin: "https://www.linkedin.com/in/tej-kalola-1b58bb31a/",
    codeforces: "https://codeforces.com/profile/Tej_Kalola_",
    leetcode: "https://leetcode.com/u/Tej_Kalola/",
    codolio: "https://codolio.com/profile/Tej_Kalola",
    email: "mailto:kalolatej007@gmail.com"
  },
  subtitles: [
    "Computer Science Student",
    "Competitive Programmer",
    "Full Stack Developer",
    "Problem Solver"
  ],
  bio: "I enjoy solving challenging algorithmic problems and building scalable web applications with modern technologies. My focus is on creating clean, efficient, and impactful software.",
  about: {
    intro: "Hello! I'm Tej Kalola, a Computer Science student at Nirma University (CGPA: 9.12/10) with a strong foundation in Competitive Programming (Codeforces Pupil, LeetCode Knight) and Full Stack Web Development.",
    journey: "Over the past years, I have solved 1300+ DSA & Competitive Programming problems across platforms like Codeforces (Max Rating 1396, 750+ solved) and LeetCode (Knight badge, Top 5.96% globally, 550+ solved). Additionally, I have industry internship experience at DRD Solution as a Software Engineer Intern.",
    interests: "I am passionate about Data Structures & Algorithms, Systems Programming, Database Query Optimization, Signal Processing Simulation, and building end-to-end Web Applications.",
    objective: "Seeking opportunities to apply my strong algorithmic problem-solving skills and full-stack software development experience in building high-performance, impactful products."
  },
  education: [
    {
      institution: "Nirma University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "July 2024 – Present",
      cgpa: "9.12 / 10.0 CGPA",
      location: "Ahmedabad, India",
      details: "Pursuing CS degree focused on Data Structures, Algorithms, Operating Systems, DBMS, and Systems Design.",
      coursework: ["Data Structures", "Design & Analysis of Algorithms", "Operating System", "DBMS", "Data Communication", "Object Oriented Programming", "Oracle SQL", "Machine Learning"]
    },
    {
      institution: "The School of Science (SOS) (GHSHEB)",
      degree: "Higher Secondary School (Class XII) — Science",
      period: "June 2022 – March 2024",
      cgpa: "PR: 99.62",
      location: "Rajkot, India",
      details: "Achieved 99.62 Percentile Rank in Class XII Science Stream with focus on Advanced Mathematics and Physics.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Applications"]
    },
    {
      institution: "Shree Vivekanand School (GSEB)",
      degree: "Secondary School (Class X)",
      period: "June 2020 – March 2022",
      cgpa: "PR: 99.84",
      location: "Amreli, India",
      details: "Achieved 99.84 Percentile Rank in Class X Board Examinations.",
      coursework: ["Mathematics", "Science", "English", "Social Science"]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "C / C++", level: "Expert", desc: "Primary language for CP & DSA, STL, Memory Management", icon: "SiCplusplus" },
        { name: "Java", level: "Proficient", desc: "OOP, Inheritance, Polymorphism, Data Structures", icon: "FaJava" },
        { name: "JavaScript", level: "Advanced", desc: "ES6+, Async/Await, Web APIs, Dynamic UI Logic", icon: "SiJavascript" },
        { name: "HTML / CSS", level: "Expert", desc: "Semantic Structure, Responsive Layouts, Styling", icon: "FaHtml5" },
        { name: "MySQL", level: "Advanced", desc: "Query Optimization, Relational Database Design, Indexing", icon: "SiMysql" },
        { name: "Python", level: "Proficient", desc: "Scripting, Automation, Data Processing, ML", icon: "FaPython" }
      ]
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", level: "Advanced", desc: "Version Control, Branching, Rebase, Commit Workflows", icon: "FaGitAlt" },
        { name: "GitHub", level: "Advanced", desc: "Open Source Repositories, Version Tracking, Collaboration", icon: "FaGithub" },
        { name: "VS Code", level: "Expert", desc: "Development Workspace, Debugging, Extensions", icon: "TbBrandVscode" }
      ]
    },
    {
      category: "Technical Electives & Core CS",
      items: [
        { name: "Data Structures & Algorithms", level: "Expert", desc: "Trees, Graphs, DP, Segment Trees, Algorithmic Optimization", icon: "TbBinaryTree" },
        { name: "Design & Analysis of Algorithms", level: "Expert", desc: "Time & Space Complexity, Greedy, Divide & Conquer", icon: "TbCode" },
        { name: "Database Management System (DBMS)", level: "Advanced", desc: "SQL Query Tuning, Normalization, Transactions, Oracle SQL", icon: "TbDatabase" },
        { name: "Operating System", level: "Advanced", desc: "Processes, Threads, Memory Management, Linux CLI", icon: "TbCpu" },
        { name: "Data Communication", level: "Advanced", desc: "Signal Impairments, Attenuation, Noise, Channel Capacity", icon: "TbCpu" },
        { name: "Object Oriented Programming", level: "Expert", desc: "Encapsulation, Polymorphism, Inheritance, Abstraction", icon: "TbCode" },
        { name: "Machine Learning", level: "Intermediate", desc: "Supervised Learning, Model Training, Data Processing", icon: "TbBrain" }
      ]
    }
  ]
};

export const featuredProjects = [
  {
    id: "campus-reserve",
    title: "CampusReserve",
    subtitle: "Smart University Facility & Slot Booking Platform",
    category: "Full Stack Web App",
    tags: ["HTML", "CSS", "JavaScript", "Git", "Node.js", "MongoDB"],
    period: "June 2026 – Present",
    description: "An end-to-end facility reservation platform with responsive role-based dashboards for students, faculty, and administrators. Simplifies classroom, lab, and equipment scheduling.",
    features: [
      "Developed an end-to-end booking platform with responsive role-based dashboards for students, faculty, and administrators.",
      "Designed MongoDB collections for managing classrooms, labs, halls, and equipment.",
      "Implemented booking approval, cancellation, booking history, and resource utilization tracking.",
      "Built responsive UI components for resource booking and real-time scheduling."
    ],
    github: "https://github.com/kalolaTej/CampusReserve",
    demo: "https://campus-reserve.vercel.app"
  },
  {
    id: "transmission-visualizer",
    title: "Transmission Impairment Visualizer",
    subtitle: "Interactive Computer Networks Signal Simulator",
    category: "Data Communication / Web App",
    tags: ["HTML", "CSS", "JavaScript", "Signal Processing"],
    period: "April 2026",
    description: "An interactive signal simulation web application utilizing fundamental data communication principles to model digital signal attenuation, noise addition, and distortion.",
    features: [
      "Built an interactive signal simulation web application utilizing fundamental data communication principles.",
      "Implemented impairment modification logic supporting noise addition, signal attenuation, and distortion.",
      "Designed dynamic waveform charts and automated graphical comparisons between transmitted and received signals.",
      "Added interactive controls to adjust amplitude, frequency, and impairment levels."
    ],
    github: "https://github.com/kalolaTej/Transmission-Impairment-Visualizer",
    demo: "https://transmission-visualizer.vercel.app"
  },
  {
    id: "expense-management",
    title: "Expense Management System",
    subtitle: "OOP Personal Finance & Balance Tracker",
    category: "C++ & Java Console App",
    tags: ["C++", "Java", "OOP", "Inheritance", "Polymorphism"],
    period: "September 2025",
    description: "A menu-driven console application built using Object-Oriented Programming concepts (Inheritance, Polymorphism) for expense splitting, balance tracking, and transaction validation.",
    features: [
      "Built a menu-driven console application using Object-Oriented Programming concepts (Inheritance, Polymorphism).",
      "Implemented expense splitting logic supporting equal and custom distributions among members.",
      "Designed dynamic member management and automated balance tracking.",
      "Added input validation to prevent duplicate members and invalid transactions."
    ],
    github: "https://github.com/kalolaTej/Expense-Management-System",
    demo: "https://expense-tracker-tej.vercel.app"
  }
];

export const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "DRD Solution",
    period: "May 2026 – July 2026",
    type: "Internship",
    location: "Rajkot, Gujarat",
    description: "Software engineering internship focused on frontend web page development and SQL database query optimization.",
    achievements: [
      "Developed 8+ responsive web pages using HTML, CSS, JavaScript, and Node.js, improving website usability and consistency across devices.",
      "Improved database performance by optimizing SQL queries, reducing page load and data retrieval time by 20%."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "SQL", "Database Optimization"]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Codeforces Pupil (Max 1396)",
    category: "Competitive Programming",
    subtitle: "Max Rating: 1396 | Solved 750+ problems on Codeforces",
    date: "Active",
    badge: "1396 Max Rating",
    highlight: "750+ Solved"
  },
  {
    id: 2,
    title: "LeetCode Knight (Top 5.96%)",
    category: "Algorithmic Problem Solving",
    subtitle: "Ranked among top 5.96% global users | Solved 550+ problems on LeetCode",
    date: "Active",
    badge: "Top 5.96%",
    highlight: "550+ Solved"
  },
  {
    id: 3,
    title: "Codolio Unified CP Profile",
    category: "Competitive Programming Portfolio",
    subtitle: "Unified tracker for Codeforces, LeetCode, and competitive coding stats",
    date: "Active",
    badge: "Codolio Verified",
    highlight: "1300+ Solved"
  },
  {
    id: 4,
    title: "Nirma University CSE (9.12 CGPA)",
    category: "Academic Excellence",
    subtitle: "Maintained 9.12 / 10.0 CGPA in B.Tech CSE at Nirma University",
    date: "2024 - Present",
    badge: "9.12 CGPA",
    highlight: "High Academic Standing"
  }
];

export const fallbackCodeforcesStats = {
  rating: 1366,
  maxRating: 1396,
  rank: "pupil",
  maxRank: "pupil",
  handle: "Tej_Kalola_",
  contestsCount: 36,
  problemsSolved: 775,
  recentContests: [
    { name: "Codeforces Round 980 (Div. 2)", rank: 1420, ratingChange: "+45", newRating: 1396, date: "2026-05-15" },
    { name: "Educational Codeforces Round 171", rank: 1890, ratingChange: "+18", newRating: 1351, date: "2026-04-28" },
    { name: "Codeforces Round 975 (Div. 2)", rank: 2150, ratingChange: "-12", newRating: 1333, date: "2026-03-19" }
  ]
};

export const fallbackLeetcodeStats = {
  totalSolved: 533,
  easySolved: 181,
  mediumSolved: 320,
  hardSolved: 32,
  acceptanceRate: 64.5,
  ranking: 38400,
  contributionPoints: 1450,
  reputation: 320,
  submissionCalendar: {
    "1738368000": 4,
    "1738454400": 6,
    "1738540800": 3
  }
};

export const fallbackGithubRepos = [
  {
    id: 1,
    name: "CampusReserve",
    description: "End-to-end booking platform with responsive role-based dashboards for students, faculty, and administrators.",
    stargazers_count: 14,
    forks_count: 4,
    language: "JavaScript",
    category: "Full Stack",
    updated_at: "2026-06-20T10:00:00Z",
    html_url: "https://github.com/kalolaTej/CampusReserve",
    homepage: "https://campus-reserve.vercel.app"
  },
  {
    id: 2,
    name: "Transmission-Impairment-Visualizer",
    description: "Interactive signal simulation web application utilizing fundamental data communication principles.",
    stargazers_count: 19,
    forks_count: 6,
    language: "JavaScript",
    category: "Algorithms",
    updated_at: "2026-04-14T14:30:00Z",
    html_url: "https://github.com/kalolaTej/Transmission-Impairment-Visualizer",
    homepage: "https://transmission-visualizer.vercel.app"
  },
  {
    id: 3,
    name: "Expense-Management-System",
    description: "Menu-driven console application built using Object-Oriented Programming concepts (Inheritance, Polymorphism) in C++ and Java.",
    stargazers_count: 11,
    forks_count: 3,
    language: "C++",
    category: "Algorithms",
    updated_at: "2025-09-02T18:20:00Z",
    html_url: "https://github.com/kalolaTej/Expense-Management-System",
    homepage: "https://expense-tracker-tej.vercel.app"
  }
];
