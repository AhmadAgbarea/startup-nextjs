import { Blog } from "@/types/blog";

const learningData: Blog[] = [
  {
    id: 1,
    title: "איך להתכונן לשיעור הנהיגה הראשון",
    paragraph: "טיפים חשובים ללומדי נהיגה בתחילת הדרך.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "צוות האתר",
      image: "/images/blog/author-01.png",
      designation: "מומחים בנהיגה",
    },
    tags: ["לימוד"],
    publishDate: "2025",
  },
];

export default learningData;
