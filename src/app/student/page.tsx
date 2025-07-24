import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "לומד נהיגה - פתרונות חכמים",
  description: "מערכת לניהול שיעורי נהיגה ולמידה מקוונת",
  keywords: ["לימוד נהיגה", "בית ספר לנהיגה", "תיאוריה"],
};

export default function StudentPage() {
  return (
    <>
      <Breadcrumb pageName="לומד נהיגה" description="תיאום מלא בין תלמיד למורה ולבית הספר" />
      <section className="container py-12 text-right">
        <h2 className="mb-4 text-2xl font-bold">ברוכים הבאים ללומדי הנהיגה</h2>
        <p className="mb-6">הפלטפורמה שלנו מאפשרת מעקב אחר שיעורים, ביצוע תרגולים מקוונים והתקדמות לקראת מבחן התיאוריה.</p>
      </section>
    </>
  );
}
