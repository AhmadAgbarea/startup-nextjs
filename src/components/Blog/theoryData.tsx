import { Blog } from "@/types/blog";

const theoryData: Blog[] = [
  {
    id: 1,
    title: "חידון תיאוריה מס' 1",
    paragraph: "בדקו את הידע שלכם בחוקי התנועה.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "מדריך תאוריה",
      image: "/images/blog/author-02.png",
      designation: "מומחה תאוריה",
    },
    tags: ["תיאוריה"],
    publishDate: "2025",
  },
];

export default theoryData;
