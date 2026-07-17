import image1 from "../../../images/blog/blog-01.jpg";
import image2 from "../../../images/blog/blog-02.jpg";
import image3 from "../../../images/blog/blog-03.jpg";
import image4 from "../../../images/blog/blog-04.jpg";

const blogsData = [
  {
    id: 1,
    slug: "python-bytecode",

    image: image1,

    title: "Python Is Not Just an Interpreted Language",

    category: "Python",

    date: "Jul 2026",

    readTime: "6 min",

    linkedin:
      "https://www.linkedin.com/posts/abbasalirezaei79_techcommunity-developers-linkedinlearning-share-7378741752742047745-d_qv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4L3PoBd2hf1kmuPARYmXhH9V0g0PJ-4z4",

    description:
      "Many developers believe Python is purely interpreted, but CPython first compiles your code into Bytecode before executing it with the Python Virtual Machine.",

    content: `
Python is often introduced as an interpreted language, but that description is only partially correct.

In the standard CPython implementation, Python source code is first compiled into Bytecode (.pyc files).

This Bytecode is then executed by the Python Virtual Machine (PVM).

In this article you'll learn:

• What Bytecode really is
• Why __pycache__ exists
• CPython execution process
• Difference between CPython and PyPy
• How JIT Compilation improves performance
`,
  },

  {
    id: 2,

    slug: "free-stock-photos",

    image: image2,

    title: "15+ Top Sources to Download Free Stock Photos",

    category: "Resources",

    date: "Jun 2026",

    readTime: "4 min",

    linkedin: "#",

    description:
      "Best websites for downloading high-quality royalty-free images for personal and commercial projects.",

    content: `
Finding beautiful free stock photos is easier than ever.

In this article we introduce the best websites that provide free high-quality images for your next project.
`,
  },

  {
    id: 3,

    slug: "startup-landing-pages",

    image: image3,

    title: "15+ Free Startup Landing Page Templates",

    category: "Web Design",

    date: "Jun 2026",

    readTime: "5 min",

    linkedin: "#",

    description:
      "Collection of modern landing page templates for startups, SaaS products and portfolios.",

    content: `
Landing pages are one of the most important parts of every startup website.

Here are our favorite free templates.
`,
  },

  {
    id: 4,

    slug: "free-svg-illustrations",

    image: image4,

    title: "10+ Sources to Download Free SVG Illustrations",

    category: "Design",

    date: "May 2026",

    readTime: "3 min",

    linkedin: "#",

    description:
      "Discover the best websites for downloading free SVG illustrations for your web projects.",

    content: `
SVG illustrations are lightweight, scalable and perfect for modern websites.

Here are our favorite free resources.
`,
  },
];

export default blogsData;