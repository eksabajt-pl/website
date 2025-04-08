import Footer from "@/components/footer/Footer";

export default function ContactEmailTemplate({ name }: { name: string }) {
  return (
    <div>
      <p>
        Thank you {name}, for contacting us! We will get back to you as soon as
        possible.
      </p>
      <Footer />
    </div>
  );
}
