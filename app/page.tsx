import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CustomerLogos } from "@/components/CustomerLogos";
import { AboutSection } from "@/components/AboutSection";
import { InterestForm } from "@/components/InterestForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CustomerLogos />
        <AboutSection />
        <InterestForm />
      </main>
    </>
  );
}
