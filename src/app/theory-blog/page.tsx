import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import theoryData from "@/components/Blog/theoryData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "בלוג תאוריה",
  description: "שאלות וחידונים בנושאי תאוריה",
  keywords: ["תאוריה", "חידונים", "נהיגה"],
};

export default function TheoryBlog() {
  return (
    <>
      <Breadcrumb pageName="בלוג תאוריה" description="תרגול וחידונים בדרך לרישיון" />
      <section className="pt-[60px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {theoryData.map((blog) => (
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
