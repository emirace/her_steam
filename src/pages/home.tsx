import AboutMe from "../components/aboutMe";
import DonationCard from "../components/donationCard";
import Footer from "../components/footer";
import Hero from "../components/hero";
import WhyItMatters from "../components/howItsMatter";
import Introduction from "../components/introduction";
import JoinMovement from "../components/joinMovement";
import MissionObjectives from "../components/missionObjective";
import Navbar from "../components/navbar";
import Partners from "../components/partiners";
import TargetAudience from "../components/targetAudience";
import Testimonials from "../components/tetstimony";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <MissionObjectives />
      <WhyItMatters />
      <TargetAudience />
      <AboutMe />
      <Testimonials />
      <DonationCard />
      <JoinMovement />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
