import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import learningData from "@/components/Blog/learningData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "בלוג לימוד נהיגה",
  description: "מאמרים וטיפים ללומדי נהיגה",
  keywords: ["בלוג נהיגה", "טיפים", "לימוד"],
};

export default function LearningBlog() {
  return (
    <>
      <Breadcrumb pageName="בלוג לימוד נהיגה" description="כל המידע שצריך לדעת כדי להצליח" />
      <section className="pt-[60px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {learningData.map((blog) => (
              <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
