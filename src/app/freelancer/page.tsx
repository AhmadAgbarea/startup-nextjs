import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מורה נהיגה עצמאי - ניהול חכם",
  description: "כלים אישיים למורים פרטיים", 
  keywords: ["מורה פרטי", "ניהול שיעורים", "סנכרון תלמידים"],
};

export default function FreelancerPage() {
  return (
    <>
      <Breadcrumb pageName="מורה נהיגה עצמאי" description="פתרונות לניהול תלמידים ויומן שיעורים" />
      <section className="container py-12 text-right">
        <h2 className="mb-4 text-2xl font-bold">המערכת האישית שלך</h2>
        <p className="mb-6">נהל את לוח הזמנים שלך, תאם שיעורים ושלח עדכונים לתלמידים ישירות מהמובייל.</p>
      </section>
    </>
  );
}
