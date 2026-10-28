/**
 * ====================================================================
 * TIRTHA PATIL — RESEARCH PORTFOLIO DATA & CONFIGURATION
 * ====================================================================
 * All content is centralized here. You can update your projects,
 * research interests, social links, certifications, and experience
 * without touching any HTML or CSS files.
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  // Personal & Contact Information
  personal: {
    name: "Tirtha Patil",
    firstName: "Tirtha",
    tagline: "Machine Learning • Computer Vision • Explainable AI",
    subheadline: "B.Tech Computer Science & Engineering (AI & ML) Student",
    affiliation: "Vishwakarma Institute of Technology, Pune",
    bio: "I'm a Computer Science and Engineering student focused on building intelligent systems and exploring research at the intersection of artificial intelligence, computer vision, and natural language processing.",
    statusBadge: "Currently exploring • ML Research • Computer Vision • NLP",
    researchPhilosophy: "Dedicated to developing transparent, high-impact intelligent models with a primary focus on healthcare applications and interpretable deep learning architectures.",
    email: "tirtha.patil24@vit.edu",
    github: "https://github.com/tirtha-patil",
    linkedin: "https://www.linkedin.com/in/tirtha-patil/",
    // EDITABLE PLACEHOLDER: Replace with your actual Instagram profile URL
    instagram: "https://instagram.com/your_handle_placeholder",
    resumePdfPath: "assets/resume.pdf",
    location: "Pune, India",
    openForOpportunities: true,
    opportunityText: "Available for AI/ML Research Internships & Collaborations"
  },

  // Research Interests (Prioritized for Academic & Research Evaluators)
  researchInterests: [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      icon: "cpu",
      shortDescription: "The science of creating machines capable of tasks that typically require human intelligence."
    },
    {
      id: "data-science",
      title: "Data Science",
      icon: "database",
      shortDescription: "The field of extracting meaningful insights form data using statistical methods, analytical techniques and computational tools."
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      icon: "network",
      shortDescription: "branch of AI that enables machines to learn patterns from data and make predictions or decisions."
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      icon: "eye",
      shortDescription: "A field of AI that enables machines to interpret and understand visual information from images and videos."
    },
    {
      id: "natural-language-processing",
      title: "Natural Language Processing",
      icon: "message-square",
      shortDescription: "A branch of AI that enables machines to understand, interpret and generate human language."
    },
    {
      id: "ai-in-healthcare",
      title: "AI in Healthcare",
      icon: "activity",
      shortDescription: "the application of artificial intelligence to medical data and healthcare challenges to support diagnosis, treatment and clinical decision making."
    }
  ],

  // Selected Projects Showcase
  // IMPORTANT: Only valid URLs will display corresponding buttons.
  // Leave empty ("") if a link is not yet available.
  projects: [
    {
      id: "retina-disease-detection",
      title: "CNN, Grad-CAM Based Retina Disease Detector",
      description: "Developed a retinal disease classification model using MobileNetV2, TensorFlow, and Keras to identify Diabetic Retinopathy, Glaucoma, and Normal retinal images using combined public datasets, including APTOS 2019 and G1020, with Grad-CAM heatmaps for visual explanations of model predictions.",
      githubUrl: "https://github.com/tirtha-patil/CNN-Grad-CAM-based-Retina-Disease-Detector",
      liveDemoUrl: ""
    },
    {
      id: "lifestyle-health-outcome",
      title: "Lifestyle Health Outcome Prediction",
      description: "Built a health risk prediction framework using a ~100,000-record Health Lifestyle Dataset, comparing Gradient Boosting, XGBoost, CatBoost, Random Forest, Extra Trees, and MLP, with Gradient Boosting achieving 75.18% accuracy and SHAP providing interpretable feature-level explanations using Python, Pandas, NumPy, and Scikit-learn.",
      githubUrl: "https://github.com/tirtha-patil/Lifestyle-Health-Outcome-Prediction",
      liveDemoUrl: ""
    },
    {
      id: "chatterbox-realtime-chat",
      title: "Chatterbox: A Real-Time WebSocket Chat Application",
      description: "Developed a real-time messaging application using Python, FastAPI, Uvicorn, WebSockets, and Socket.IO, enabling live bidirectional communication between users through event-driven messaging without requiring repeated page refreshes.",
      githubUrl: "https://github.com/tirtha-patil/Chatterbox-A-Real-time-WebSocket-Chat-Application-Meeting-Invite-Infosys-Internship-Project-",
      liveDemoUrl: "https://chatterbox-a-real-time-websocket-chat.onrender.com/"
    },
    {
      id: "medical-data-visualization",
      title: "Medical Data Visualization",
      description: "Performed exploratory data analysis on the Pima Indians Diabetes Database using Python, Pandas, NumPy, Matplotlib, and Seaborn to examine health indicators, visualize feature distributions and correlations, and identify glucose levels as a prominent feature associated with diabetes outcomes.",
      githubUrl: "https://github.com/tirtha-patil/medical_data_visualization",
      liveDemoUrl: ""
    },
    {
      id: "diabetes-prediction",
      title: "Diabetes Prediction ML",
      description: "Developed a machine learning pipeline using the Pima Indians Diabetes Database to predict diabetes outcomes from diagnostic health attributes, applying data preprocessing, feature analysis, model training, and performance evaluation using Python and Scikit-learn.",
      githubUrl: "https://github.com/tirtha-patil/Diabetics_Prediction_ML",
      liveDemoUrl: ""
    }
  ],

  // Technical Skills (Categorical, No Arbitrary Percentage Bars)
  skills: {
    programming: [
      { name: "Python", level: "Primary Research Language", icon: "code" },
      { name: "C++", level: "Systems & DSA", icon: "cpu" },
      { name: "HTML / CSS", level: "Web Interface", icon: "layout" },
      { name: "JavaScript", level: "Client Logic", icon: "terminal" }
    ],
    machineLearning: [
      { name: "Scikit-learn", note: "Statistical Modeling & Pipelines" },
      { name: "CNN", note: "Convolutional Neural Architectures" },
      { name: "Transfer Learning", note: "Pretrained Feature Extractors" },
      { name: "Random Forest", note: "Ensemble Decision Trees" },
      { name: "SVM", note: "Support Vector Classification" },
      { name: "SHAP", note: "Shapley Additive Explanations" },
      { name: "Grad-CAM", note: "Class Activation Heatmaps" }
    ],
    libraries: [
      { name: "NumPy", note: "Vectorized Computations" },
      { name: "Pandas", note: "Tabular Data & Wrangling" },
      { name: "Matplotlib", note: "Publication Plots" },
      { name: "Seaborn", note: "Statistical Visualizations" },
      { name: "OpenCV", note: "Computer Vision & Preprocessing" }
    ],
    toolsFrameworks: [
      { name: "FastAPI", note: "High-Performance Async APIs" },
      { name: "Git", note: "Distributed Version Control" },
      { name: "Jupyter Notebook", note: "Research Prototyping & EDA" },
      { name: "VS Code", note: "Primary Development Environment" }
    ]
  },

  // Education
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Vishwakarma Institute of Technology, Pune",
    cgpa: "8.22 / 10",
    expectedGraduation: "2028",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Probability & Statistics",
      "Linear Algebra"
    ]
  },

  // Experience Timeline
  experience: [
    {
      role: "Project Intern (Certified)",
      organization: "Infosys Virtual Internship 6.0",
      period: "Internship Program",
      badge: "Certified Internship",
      description: "Collaborated in an intensive, team-based engineering environment delivering enterprise-grade backend APIs and asynchronous real-time infrastructure.",
      highlights: [
        "Architected backend RESTful API endpoints utilizing FastAPI and asynchronous Python runtimes.",
        "Implemented low-latency WebSocket communication channels with connection pooling and broadcast routing.",
        "Collaborated in a multidisciplinary 6-member engineering team to design, test, and deliver the Chatterbox real-time messaging application.",
        "Applied software engineering principles and version control workflows to maintain clean code and agile delivery milestones."
      ],
      technologies: ["FastAPI", "WebSockets", "Python", "Uvicorn", "Agile Scrum"]
    }
  ],

  // Real Authentic Certifications (Matched with files in assets/)
  certifications: [
    {
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Python Foundation Certification.pdf",
      description: "Core programming paradigms, computational problem solving, and Python standard libraries.",
      badge: "Programming"
    },
    {
      title: "Deloitte Virtual Internship Cyber Certificate",
      issuer: "Deloitte / Forage",
      date: "Certified",
      file: "assets/Deloitte Virtual Internship Cyber Certificate.pdf",
      description: "Practical virtual experience analyzing cyber security architectures and enterprise data risk.",
      badge: "Industry Simulation"
    },
    {
      title: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "Certified",
      file: "assets/McKinsey.orgForward20251216-30-2kqyuw.pdf",
      description: "Leadership, structured problem solving, digital thinking, and adaptive communication.",
      badge: "Leadership & Strategy"
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Agile Scrum in Practice.pdf",
      description: "Iterative software development life cycle, sprint ceremonies, backlog grooming, and team collaboration.",
      badge: "Engineering Process"
    },
    {
      title: "Software Engineering & Agile Software Development",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Software Engineering and Agile software development.pdf",
      description: "System architecture, design patterns, testing strategies, and modern software lifecycle management.",
      badge: "Engineering"
    },
    {
      title: "Database Management System (Part 1 & 2)",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Database Management System Part - 1.pdf",
      description: "Relational schema design, normalization, SQL querying, transaction management, and indexing.",
      badge: "Data Systems"
    },
    {
      title: "Programming Fundamentals & OOP using Python",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Object Oriented Programming using Python.pdf",
      description: "Object-oriented design, inheritance, polymorphism, encapsulation, and modular design.",
      badge: "Programming"
    },
    {
      title: "Introduction to NoSQL Databases",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Introduction to NoSQL databases.pdf",
      description: "Document and key-value database paradigms, unstructured data handling, and schema flexibility.",
      badge: "Data Systems"
    },
    {
      title: "1 Million Prompters Certificate",
      issuer: "Generative AI Initiative",
      date: "Certified",
      file: "assets/1 Million Prompters Certificate.pdf",
      description: "Prompt engineering, generative model guidance, and structured output formatting.",
      badge: "Generative AI"
    }
  ],

  // Extracurricular & Leadership ("Beyond the Lab")
  leadership: [
    {
      organization: "Abhivriddhi Student Development Club",
      role: "Student Council Volunteer & Video Editing Coordinator",
      timeline: "Active Contributor",
      description: "Contributing to technical community initiatives, creative media production, and campus student development operations.",
      responsibilities: [
        "Coordinating video editing and visual media production for club events, workshops, and student outreach campaigns.",
        "Assisting in organizing and executing technical seminars, peer learning sessions, and student development programs.",
        "Collaborating across cross-functional student teams to ensure engaging content delivery and impactful digital presence."
      ],
      // Editable fields for user to add photos or more details
      eventPhotosPlaceholder: true
    }
  ],

  // System Configuration
  config: {
    // Replace with your Formspree endpoint (e.g. "https://formspree.io/f/your_form_id")
    // or your custom serverless endpoint. Defaults to a mailto dispatch if unset.
    contactFormEndpoint: "",
    soundEnabledByDefault: false, // Polite default to respect browser autoplay policies
    analyticsEnabled: false
  }
};

// Freeze the object so it behaves safely as a read-only configuration
if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_DATA);
}
