import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <section className="h-screen p-4">
        <Breadcrumbs />
      </section>
      <Footer />
    </>
  );
}
