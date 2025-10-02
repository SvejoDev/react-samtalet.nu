import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutConversations from "@/components/AboutConversations";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutConversations />
    </div>
  );
}
