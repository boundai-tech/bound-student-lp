import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ChallengeEmbed from "@/components/sections/ChallengeEmbed";
import JobChallengeTypes from "@/components/sections/JobChallengeTypes";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";

export default function StudentLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChallengeEmbed />
        <JobChallengeTypes />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
