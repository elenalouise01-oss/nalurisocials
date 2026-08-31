import About from '@/components/sections/About';
import BigIdea from '@/components/sections/BigIdea';
import ComingSoon from '@/components/sections/ComingSoon';
import FinalCta from '@/components/sections/FinalCta';
import Hero from '@/components/sections/Hero';
import HowWeWork from '@/components/sections/HowWeWork';
import Inclusions from '@/components/sections/Inclusions';
import MainOffer from '@/components/sections/MainOffer';
import Outcome from '@/components/sections/Outcome';
import Problem from '@/components/sections/Problem';
import SocialProof from '@/components/sections/SocialProof';
import Transformation from '@/components/sections/Transformation';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <BigIdea />
        <Transformation />
        <MainOffer />
        <HowWeWork />
        <Inclusions />
        <Outcome />
        <About />
        <SocialProof />
        <ComingSoon />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
