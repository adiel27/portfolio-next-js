import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adiel",
  lastName: "Fatich",
  name: `Adiel`,
  role: "App Developer",
  avatar: "/images/avatar.jpg",
  email: "fatich281@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia","Japanese", "Arabic", "Malay"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adiel27",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/adieruysn27/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@adieruysn27",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Adiel, a design engineer and App Developer
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Adiel is a Surabaya-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions, functional apps, System optimization. My work spans digital interfaces, interactive
        experiences, app innovations, system optimization and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "UNIDA",
        timeframe: "2021 - 2022",
        role: "Network Engineer",
        achievements: [
          <>
            Managing the University Network.
          </>,
          <>
            Admin of University Central Network.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
      
        ],
      },
      {
        company: "Al-Haitham",
        timeframe: "2022 - 2023",
        role: "IT Support and Technician",
        achievements: [
          <>
            Maintain system, replace hardware and build PCs for companies.
          </>,
          <>
            Optimize system to match companies needs.
          </>,
        ],
        images: [],
      },
      {
        company: "Win Institute",
        timeframe: "2024 - Present",
        role: "English Teacher",
        achievements: [
          <>
          Teaching English to High School Student
          </>
        ]
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Darussalam Gontor Modern Islamic Institution",
        description: <>As Senior High School Student</>
      },
      {
        name: "UPN Veteran East Java",
        description: <>Studying software engineering.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js, C language, Kotlin and Java.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          }

        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "C",
        description: (
          <>Building micro services to optimize system and Next Gen apps</>
        ),
        tags: [
          {
            name: "C",
            icon: "C"
          }
        ]
      },
      {
        title: "Java",
        description: (
          <>Building Java Apps simple and complex</>
        ),
        tags: [
          {
            name: "Java",
            icon: "Java"
          }
        ]
      },
      {
        title: "React.Js",
        description: (
          <>Building Android apps and Web Apps with React.js</>
        ),
        tags: [
          {
            name: "React.Js",
            icon: "React"
          }
        ]
      },
      {
        title: "Kotlin",
        description: (
          <>Building Android apps with native code Kotlin</>
        ),
        tags: [
          {
            name: "Kotlin",
            icon: "Kotlin"
          }
        ]
      },
      {
        title: "PHP",
        description: (
          <>Configuring app data and backend configuration until deployed</>
        ),
        tags: [
          {
            name: "PHP",
            icon: "PHP"
          }
        ]
      }
      
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
