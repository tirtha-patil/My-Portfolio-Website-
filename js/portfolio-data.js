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
    bio: "I'm a Computer Science & Engineering student focused on building intelligent systems and exploring research at the intersection of machine learning, computer vision, and explainable AI.",
    statusBadge: "Currently exploring • ML Research • Computer Vision • Explainable AI",
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
      id: "computer-vision",
      title: "Computer Vision",
      badge: "Vision AI",
      icon: "eye",
      shortDescription: "Visual feature extraction, deep convolutional architectures, and automated diagnostic image analysis in medical imaging domains.",
      focusKeywords: ["CNNs", "MobileNetV2", "Feature Attribution", "Medical Imaging", "OpenCV"]
    },
    {
      id: "explainable-ai",
      title: "Explainable AI (XAI)",
      badge: "Interpretability",
      icon: "sparkles",
      shortDescription: "Uncovering black-box model decisions using feature attribution, gradient-weighted class activation mapping (Grad-CAM), and SHAP analysis.",
      focusKeywords: ["Grad-CAM", "SHAP", "Model Transparency", "Attribution Maps"]
    },
    {
      id: "healthcare-ai",
      title: "Healthcare AI",
      badge: "Clinical Applications",
      icon: "activity",
      shortDescription: "Applying robust statistical learning and computer vision to early disease screening, risk stratification, and diagnostic assistance.",
      focusKeywords: ["Retinal Fundus Analysis", "Diabetic Retinopathy", "Outcome Prediction", "Pima Dataset"]
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      badge: "Statistical Learning",
      icon: "cpu",
      shortDescription: "Supervised and ensemble learning methods, probabilistic modeling, and disciplined evaluation pipelines for predictive tasks.",
      focusKeywords: ["Random Forest", "SVM", "Ensemble Methods", "ROC-AUC Optimization"]
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      badge: "Neural Networks",
      icon: "layers",
      shortDescription: "Transfer learning, convolutional neural networks, and lightweight edge-deployable vision architectures with fine-tuned representations.",
      focusKeywords: ["TensorFlow/Keras", "Transfer Learning", "Backpropagation", "Architectures"]
    },
    {
      id: "interpretable-ml",
      title: "Interpretable Machine Learning",
      badge: "Trust & Safety",
      icon: "shield-check",
      shortDescription: "Bridging the gap between empirical model accuracy and clinical trust through rigorous validation and human-interpretable feature importance.",
      focusKeywords: ["Feature Importance", "Decision Boundaries", "Trustworthy AI", "Error Analysis"]
    }
  ],

  // Selected Projects Showcase
  // IMPORTANT: Only valid URLs will display corresponding buttons.
  // Leave empty ("") if a link is not yet available.
  projects: [
    {
      id: "retina-disease-detection",
      featured: true,
      title: "AI-Powered Retina Disease Detection using CNN & Grad-CAM",
      category: "Computer Vision / Explainable AI / Healthcare AI",
      shortDescription: "A deep learning diagnostic pipeline achieving ~87% classification accuracy on retinal fundus scans, paired with Grad-CAM explainability to visualize model attention regions.",
      longDescription: "Built an end-to-end medical computer vision system utilizing transfer learning with MobileNetV2. Integrated Gradient-weighted Class Activation Mapping (Grad-CAM) to generate heatmaps highlighting clinically significant retinal lesions, ensuring predictions can be audited by healthcare specialists.",
      image: "assets/images/retina-gradcam.jpg",
      technologies: ["Python", "TensorFlow / Keras", "MobileNetV2", "CNN", "Grad-CAM", "OpenCV"],
      metrics: [
        { label: "Classification Accuracy", value: "~87%" },
        { label: "Backbone Architecture", value: "MobileNetV2" },
        { label: "Interpretability Method", value: "Grad-CAM" },
        { label: "Domain", value: "Retinal Diagnostics" }
      ],
      breakdown: {
        problem: "Automating retinal disease detection requires not only high empirical accuracy but also diagnostic interpretability so ophthalmologists can understand why a neural network flags a given pathology.",
        approach: "Employed transfer learning on retinal fundus images with systematic preprocessing, image augmentation, adaptive learning rate scheduling, and cross-entropy optimization.",
        model: "MobileNetV2 backbone pretrained on ImageNet, fine-tuned on curated retinal datasets for high-efficiency feature extraction without excessive parameter footprint.",
        explainability: "Integrated Grad-CAM to compute gradients of the target class score with respect to feature activation maps of the final convolutional layer, producing transparent heatmaps of vascular lesions.",
        results: "Achieved approximately 87% validation accuracy while confirming that model attention correlates with clinically documented physiological biomarkers."
      },
      // PLACEHOLDER: Replace with your actual repository URL
      githubUrl: "https://github.com/tirtha-patil",
      liveDemoUrl: "", // Leave empty if not available
      paperUrl: "",    // Leave empty if not available
      demoVideoUrl: "" // Leave empty if not available
    },
    {
      id: "diabetes-prediction",
      featured: false,
      title: "Diabetes Outcome Prediction using Machine Learning",
      category: "Machine Learning / Explainable AI",
      shortDescription: "Predictive modeling pipeline employing Random Forest, SVM, and KNN, achieving ~75% accuracy and 0.83 ROC-AUC, interpreted using SHAP feature attributions.",
      longDescription: "Engineered a systematic disease prediction pipeline with data scaling, outlier management, and hyperparameter tuning. Integrated SHapley Additive exPlanations (SHAP) to quantify global and local feature importance, identifying glucose and BMI as primary diagnostic drivers.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "SVM", "KNN", "SHAP", "Pandas"],
      metrics: [
        { label: "ROC-AUC Score", value: "0.83" },
        { label: "Model Accuracy", value: "~75%" },
        { label: "Explainability", value: "SHAP Values" },
        { label: "Key Features", value: "Glucose, BMI" }
      ],
      githubUrl: "https://github.com/tirtha-patil",
      liveDemoUrl: "",
      paperUrl: ""
    },
    {
      id: "medical-data-visualization",
      featured: false,
      title: "Medical Data Visualization & Analysis",
      category: "Data Analysis / Healthcare AI",
      shortDescription: "Comprehensive exploratory data analysis on clinical diabetes records, establishing correlation matrices and statistical distributions across biomarkers.",
      longDescription: "Investigated inter-feature correlations, distributions, and skewness across clinical variables. Provided foundational empirical evidence establishing glucose concentration as the single strongest predictive marker for insulin resistance outcomes.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      metrics: [
        { label: "Dataset", value: "Pima Indian Diabetes" },
        { label: "Primary Predictor", value: "Glucose" },
        { label: "Analysis Types", value: "EDA, Correlation" },
        { label: "Tooling", value: "Seaborn & Pandas" }
      ],
      githubUrl: "https://github.com/tirtha-patil",
      liveDemoUrl: "",
      paperUrl: ""
    },
    {
      id: "lifestyle-health-outcome",
      featured: false,
      title: "Lifestyle-Based Health Outcome Prediction using Explainable AI",
      category: "Machine Learning / Explainable AI",
      shortDescription: "Trained and benchmarked Gradient Boosting, XGBoost, CatBoost, and Random Forest across 100,000+ records, reaching 75.18% accuracy with full SHAP transparency.",
      longDescription: "Performed large-scale data preprocessing, feature engineering, and model comparison across ensemble algorithms. Designed comprehensive data visualizations including correlation heatmaps, model comparison charts, confusion matrices, and SHAP summary plots.",
      technologies: ["Python", "Scikit-learn", "Gradient Boosting", "XGBoost", "CatBoost", "SHAP", "Pandas"],
      metrics: [
        { label: "Dataset Scale", value: "100,000+ Records" },
        { label: "Best Accuracy", value: "75.18%" },
        { label: "Best Model", value: "Gradient Boosting" },
        { label: "Interpretability", value: "SHAP Summary Plots" }
      ],
      githubUrl: "https://github.com/tirtha-patil",
      liveDemoUrl: "",
      paperUrl: ""
    },
    {
      id: "chatterbox-realtime-chat",
      featured: false,
      title: "Chatterbox – Real-Time WebSocket Chat Application",
      category: "Backend / Real-Time Systems",
      shortDescription: "High-concurrency chat server built with FastAPI and WebSockets, supporting real-time chat rooms, typing indicators, and asynchronous broadcast events.",
      longDescription: "Engineered during the Infosys Virtual Internship 6.0 in a six-member agile collaborative team. Focused on low-latency bidirectional socket protocols and clean RESTful API design.",
      technologies: ["Python", "FastAPI", "WebSockets", "Uvicorn", "HTML", "CSS", "JavaScript"],
      metrics: [
        { label: "Protocol", value: "WebSockets" },
        { label: "Backend", value: "FastAPI / Uvicorn" },
        { label: "Team Size", value: "6 Members" },
        { label: "Context", value: "Infosys Internship 6.0" }
      ],
      githubUrl: "https://github.com/tirtha-patil",
      liveDemoUrl: "",
      paperUrl: ""
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
