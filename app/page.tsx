import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import StudentPain from "@/components/sections/StudentPain";
import WhyBound from "@/components/sections/WhyBound";
import ChallengeEmbed from "@/components/sections/ChallengeEmbed";
import JobChallengeTypes from "@/components/sections/JobChallengeTypes";
import Resources from "@/components/sections/Resources";
import FinalCTA from "@/components/sections/FinalCTA";

export default function StudentLandingPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="pt-9">
        <Hero />
        <StudentPain />
        <WhyBound />
        <ChallengeEmbed />
        <JobChallengeTypes />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
