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
    email: "patiltirtha8811@gmail.com",
    github: "https://github.com/tirtha-patil",
    linkedin: "https://www.linkedin.com/in/tirtha-patil/",
    instagram: "https://www.instagram.com/ft._.tirthaaaa?cplk=NXo2aXlidTA1cGFm",
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

  // Experience Section
  experience: [
    {
      role: "Project Intern (Certified)",
      organization: "Infosys Virtual Internship 6.0",
      certificateUrl: "assets/Infosys Springboard Internship.pdf",
      githubUrl: "https://github.com/tirtha-patil/Chatterbox-A-Real-time-WebSocket-Chat-Application-Meeting-Invite-Infosys-Internship-Project-",
      liveDemoUrl: "https://chatterbox-a-real-time-websocket-chat.onrender.com/",
      highlights: [
        "Developed Chatterbox, a real-time messaging application using Python and FastAPI.",
        "Built backend APIs and WebSocket communication for instant messaging.",
        "Collaborated with a six-member team to develop, test, and integrate the application. The project was later selected to be showcased to Infosys professionals.",
        "Gained hands-on experience in backend development, teamwork, and version control."
      ]
    }
  ],

  // Real Authentic Certifications (All verified credentials in assets/)
  certifications: [
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      date: "Certified",
      file: "assets/Deep Learning.pdf",
      description: "Mastery of neural network architectures, CNNs, sequence models, transformers, hyperparameter tuning, and deep learning optimization.",
      badge: "Deep Learning"
    },
    {
      title: "Financial Technology (Fintech) Innovations Specialization",
      issuer: "University of Michigan / Coursera",
      date: "Certified",
      file: "assets/FinTech.pdf",
      description: "Payment technologies, blockchain, cryptocurrency, credit tech, AI in investment, and modern financial systems.",
      badge: "FinTech"
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
      title: "Deloitte Virtual Internship Cyber Certificate",
      issuer: "Deloitte / Forage",
      date: "Certified",
      file: "assets/Deloitte Virtual Internship Cyber Certificate.pdf",
      description: "Practical virtual experience analyzing cyber security architectures and enterprise data risk.",
      badge: "Industry Simulation"
    },
    {
      title: "1 Million Prompters Certificate",
      issuer: "Generative AI Initiative",
      date: "Certified",
      file: "assets/1 Million Prompters Certificate.pdf",
      description: "Prompt engineering, generative model guidance, and structured output formatting.",
      badge: "Generative AI"
    },
    {
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Python Foundation Certification.pdf",
      description: "Core programming paradigms, computational problem solving, and Python standard libraries.",
      badge: "Programming"
    },
    {
      title: "Programming Fundamentals using Python - Part 1",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Programming Fundamentals using Python - Part 1.pdf",
      description: "Core algorithms, control flow, functions, and structured Python development.",
      badge: "Programming"
    },
    {
      title: "Programming Fundamentals using Python - Part 2",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Programming Fundamentals using Python - Part 2.pdf",
      description: "Advanced data structures, algorithmic design patterns, and debugging in Python.",
      badge: "Programming"
    },
    {
      title: "Object Oriented Programming using Python",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Object Oriented Programming using Python.pdf",
      description: "Object-oriented design, inheritance, polymorphism, encapsulation, and modular design.",
      badge: "Programming"
    },
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Basics of Python.pdf",
      description: "Foundational programming constructs, syntax, and computational logic.",
      badge: "Programming"
    },
    {
      title: "Database Management System Part - 1",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Database Management System Part - 1.pdf",
      description: "Relational database architecture, entity-relationship models, and SQL querying.",
      badge: "Data Systems"
    },
    {
      title: "Database Management System Part - 2",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Database Management System Part - 2.pdf",
      description: "Normalization, transaction concurrency, ACID properties, and relational indexing.",
      badge: "Data Systems"
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
      title: "Software Engineering and Agile Software Development",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Software Engineering and Agile software development.pdf",
      description: "System architecture, design patterns, testing strategies, and modern software lifecycle management.",
      badge: "Engineering"
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "Certified",
      file: "assets/Agile Scrum in Practice.pdf",
      description: "Iterative software development life cycle, sprint ceremonies, backlog grooming, and team collaboration.",
      badge: "Engineering Process"
    }
  ],

  // Extracurricular & Activities ("Beyond Academics")
  beyondAcademics: [
    {
      title: "French DELF A1",
      status: "Completed",
      certificateUrl: "assets/DELF A1 Certificate.pdf"
    },
    {
      title: "French A2",
      subtitle: "Completion Certificate",
      status: "Completed",
      certificateUrl: "assets/A2 completion certificate.pdf"
    },
    {
      title: "French B1",
      status: "Ongoing"
    },
    {
      title: "Abhivriddhi Student Development Committee",
      role: "Video Editing Coordinator",
      certificateUrl: "assets/Abhivriddhi-Video Editing Coordinator.pdf"
    },
    {
      title: "Resin Art Workshop",
      subtitle: "Organized under the Student Council at VIT, Pune"
    }
  ],

  // System Configuration
  config: {
    // EmailJS Configuration (Direct transmission to patiltirtha8811@gmail.com)
    // Configure at https://www.emailjs.com/
    emailjs: {
      serviceId: "service_qkluop2",    // e.g. "service_xxxxxxx"
      templateId: "template_3pt3xx4",   // e.g. "template_xxxxxxx"
      publicKey: "kJV50e0w18ChUG_W1"     // e.g. "xxxxxxxxxxxxxxxxxxxx" (EmailJS Public Key)
    },
    // Optional fallback endpoint (e.g. Formspree / serverless endpoint)
    contactFormEndpoint: "",
    soundEnabledByDefault: true, // Default enabled for tactile micro-interactions
    analyticsEnabled: false
  }
};

// Freeze the object so it behaves safely as a read-only configuration
if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_DATA);
}
