import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyFooter from "@/components/layout/MobileStickyFooter";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import StudentPain from "@/components/sections/StudentPain";
import WhyBound from "@/components/sections/WhyBound";
import ChallengeEmbed from "@/components/sections/ChallengeEmbed";
import JobChallengeTypes from "@/components/sections/JobChallengeTypes";
import Resources from "@/components/sections/Resources";
import FinalCTA from "@/components/sections/FinalCTA";

export default function StudentLandingPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <SocialProof />
        <StudentPain />
        <WhyBound />
        <ChallengeEmbed />
        <JobChallengeTypes />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyFooter />
    </>
  );
}
