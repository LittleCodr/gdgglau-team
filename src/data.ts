import { TeamMember, SocialLink, TeamData } from './types';

export const teamMembers: TeamMember[] = [
  {
    name: "Anubhav Singh",
    role: "Organizer Lead",
    photo: "https://json.commudle.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeTNzQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8ff3de2d21b4c8371909ad52eca0bc60b3eb8d03/anu-framed.jpeg",
    linkedin: "https://www.linkedin.com/in/anubhav-singh-thedatum/"
  },
  {
    name: "Krishna Mittal",
    role: "Open Source Lead",
    photo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/krishna_mittal_PTFnXJN.jpeg",
    linkedin: "https://www.linkedin.com/in/krishna-mittal-8709b322a"
  },
  {
    name: "Mayank Agrawal",
    role: "Android & iOS App Dev",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQHf6QIXrXYv_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725551840288?e=1742428800&v=beta&t=9v8rSHI3BV8SCuHfy4-CgqlfQOYx-XdsSqcg_p9cXC0",
    linkedin: "http://linkedin.com/in/littlecodr/"
  },
  {
    name: "Ritee Ravi",
    role: "Public Relations Lead",
    photo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ritee_ravi_INnevAT.jpg",
    linkedin: "https://www.linkedin.com/in/kumari-ritee-2904ba289"
  },
  {
    name: "Shubhang Dixit",
    role: "Android Lead",
    photo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/shubhang_dixit_mw4o6st.jpg",
    linkedin: "https://www.linkedin.com/in/shubhang-dixit/"
  },
  {
    name: "Suryansh Agrawal",
    role: "Data Lead",
    photo: "https://gdgglau.co/useless-images/suryanshangrawal.jpeg",
    linkedin: "https://www.linkedin.com/in/suryansh-agarwal-b55232289"
  },
  {
    name: "Abhishek Soni",
    role: "Design Lead",
    photo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/abhishek_soni_ZRp81Gz.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-soni-89b518250/"
  },
  {
    name: "Aryan Sharma",
    role: "Machine Learning Lead",
    photo: "https://gdgglau.co/useless-images/aryan.jpeg",
    linkedin: "https://www.linkedin.com/in/aryan-sharma-ba23952a8"
  }
];

export const devFacts = [
  {
    question: "Why do Java developers wear glasses?",
    answer: "Because they don't C#! 🤓"
  },
  {
    question: "How do you comfort a JavaScript bug?",
    answer: "You console it! 😆"
  },
  {
    question: "Why did the CSS developer break up with the HTML developer?",
    answer: "Because they kept div-ing into different relationships! 💔"
  },
  {
    question: "Why was the function so calm?",
    answer: "Because it had closure! 😌"
  },
  {
    question: "What do you call a group of 8 hobbits?",
    answer: "A hob-byte! 🧙‍♂️"
  },
  {
    question: "Why do Python programmers prefer snakes over birds?",
    answer: "Because Pythons don't tweet errors! 🐍"
  },
  {
    question: "Why don't programmers like nature?",
    answer: "Too many bugs! 🐞"
  },
  {
    question: "What's a programmer's favorite type of music?",
    answer: "Algo-rhythms! 🎵"
  },
  {
    question: "Why did the database administrator break up with the developer?",
    answer: "Because he kept dropping tables! 😭"
  },
  {
    question: "Why did the JavaScript developer go to therapy?",
    answer: "Because they had too many callback issues! 📞"
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance! 💰"
  },
  {
    question: "Why do programmers prefer using dark mode?",
    answer: "Because the light mode has too many exceptions! 🌚"
  },
  {
    question: "Why do C++ programmers never get lost?",
    answer: "Because they always use pointers! 🧭"
  },
  {
    question: "What did the Git commit say to the branch?",
    answer: "You push my buttons! 🎛️"
  },
  {
    question: "Why do programmers love cooking?",
    answer: "Because they always follow the recipe (syntax)! 👨‍🍳"
  },
  {
    question: "Why did the programmer quit his job?",
    answer: "Because he didn't get arrays! 😢"
  },
  {
    question: "Why do programmers hate the outdoors?",
    answer: "Too many trees and not enough binary paths! 🌲"
  },
  {
    question: "Why was the JavaScript developer so good at baseball?",
    answer: "Because they always knew when to catch! ⚾"
  },
  {
    question: "What's a frontend developer's favorite drink?",
    answer: "CSSpresso! ☕"
  },
  {
    question: "Why do JavaScript developers prefer React?",
    answer: "Because they hate Vue(s)! 👀"
  }
];

export const teams: TeamData[] = [
  {
    id: "data",
    name: "📊 Data Team",
    description: "Analyzing and visualizing data to drive insights and innovation",
    color: "blue",
    members: [
      "Srijan Rai",
      "Unnati Agarwal",
      "Aditya Yadav",
      "Suryansh Agarwal",
      "Rishi Srivastava"
    ]
  },
  {
    id: "ml",
    name: "🧠 Machine Learning Team",
    description: "Building intelligent systems and AI solutions",
    color: "purple",
    members: [
      "Rachit Saxena",
      "Madhav Agrawal",
      "Aryan Sharma",
      "Divya Raj Varshney",
      "Sahil Chaudhary"
    ]
  },
  {
    id: "pr",
    name: "📢 Public Relations Team",
    description: "Managing community engagement and external communications",
    color: "yellow",
    members: [
      "Ritee",
      "Khushi Agrawal",
      "Ashutosh Dwivedi",
      "Anshika Saxena",
      "Ayush Sharma",
      "Rupam Ganguly",
      "Mohammad Almas"
    ]
  },
  {
    id: "opensource",
    name: "🌍 Open-Source Team",
    description: "Contributing to and maintaining open-source projects",
    color: "green",
    members: [
      "Teena Agarwal",
      "Deeksha Agarwal",
      "Saksham Kushwaha",
      "Mayank Agrawal",
      "Yash Jain"
    ]
  },
  {
    id: "devops",
    name: "⚙️ DevOps Team",
    description: "Managing infrastructure and deployment pipelines",
    color: "red",
    members: ["Krishna Mittal"]
  },
  {
    id: "design",
    name: "🎨 Design Team",
    description: "Creating beautiful and intuitive user experiences",
    color: "pink",
    members: [
      "Abhishek Soni",
      "Harshita Agrawal",
      "Prateek Modi",
      "Shubh Sachar"
    ]
  },
  {
    id: "android",
    name: "📱 Android Team",
    description: "Developing mobile applications for Android platform",
    color: "green",
    members: [
      "Shubhang Dixit",
      "Gautam Yadav",
      "Jaykant Yadav"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/gdgglau/",
    icon: "Instagram"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/gdg-glau/",
    icon: "Linkedin"
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/Bb2E1tbca4BJQILULehBuK",
    icon: "MessageCircle"
  }
];

export const navLinks = [
  { name: "About", url: "https://gdgglau.co/about.html" },
  { name: "Events", url: "https://gdgglau.co/events" },
  { name: "Our Team", url: "https://gdgglau.co/team.html" },
  { name: "Newsletter", url: "https://newsletter.gdgglau.co/" },
  { name: "Contact", url: "https://gdgglau.co/contact.html" }
];