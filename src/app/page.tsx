import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Benefits } from "@/components/Benefits";
import { Conditions } from "@/components/Conditions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Testimonials } from "@/components/Testimonials";
import { siteContent } from "@/data/siteContent";

export default function Home() {
  return (
    <>
      <Header
        navigation={siteContent.navigation}
        siteInfo={siteContent.siteInfo}
      />
      <main className="flex-1">
        <BeforeAfterSection beforeAfter={siteContent.beforeAfter} />
        <Hero hero={siteContent.hero} siteInfo={siteContent.siteInfo} />
        <Benefits benefits={siteContent.benefits} />
        <Services services={siteContent.services} />
        <Testimonials testimonials={siteContent.testimonials} />
        <Pricing pricing={siteContent.pricing} />
        <Conditions conditions={siteContent.conditions} />
        <Contact
          contact={siteContent.contact}
          siteInfo={siteContent.siteInfo}
        />
      </main>
      <Footer
        footer={siteContent.footer}
        navigation={siteContent.navigation}
        siteInfo={siteContent.siteInfo}
      />
      <ScrollToTopButton />
    </>
  );
}
