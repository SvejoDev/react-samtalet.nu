import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutConversations from "@/components/AboutConversations";
import ImportantToKnow from "@/components/ImportantToKnow";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <AboutConversations />
      <ImportantToKnow />
    </div>
  );
}
