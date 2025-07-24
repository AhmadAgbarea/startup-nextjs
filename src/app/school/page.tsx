import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "בתי ספר לנהיגה - פתרונות חיבור",
  description: "ניהול תלמידים ומורים בקלות וביעילות",
  keywords: ["ניהול בית ספר", "מורי נהיגה", "לומדים"],
};

export default function SchoolPage() {
  return (
    <>
      <Breadcrumb pageName="בית ספר לנהיגה" description="כלים מתקדמים לניהול שיעורים ותלמידים" />
      <section className="container py-12 text-right">
        <h2 className="mb-4 text-2xl font-bold">מערכת מותאמת לבתי ספר לנהיגה</h2>
        <p className="mb-6">סנכרון מלא עם מורים ותלמידים, יומנים מתקדמים ודוחות מפורטים לניהול יעיל.</p>
      </section>
    </>
  );
}
