type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Arun Kumar",
    fullName: "Arun Kumar",
    email: "arunkumarb408@mail.com",
    phone: "+91-6360859627",
  },
  hero: {
    name: "Arun Kumar",
    p: ["Full-Stack MERN Developer | Scalable Applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `MERN Stack Developer with 2+ years of experience building scalable, high-performance web applications. Skilled in developing robust REST APIs using Node.js and Express.js, with strong expertise in React.js and MongoDB. Experienced in JWT authentication, Redis caching, MVC architecture, and optimizing applications for high-traffic production environments. Proven ability to handle high-concurrency systems efficiently.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects",
      content: `The following projects highlight my skills and experience through real-world applications. Each project includes a brief description along with links to the code repository and live demo, showcasing my ability to solve complex problems, work with modern technologies, and deliver effective solutions.`,
    },
  },
};
