import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CalendarSection from "@/components/CalendarSection";
import MovieGrid from "@/components/MovieGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <CalendarSection />
      <MovieGrid />
    </div>
  );
};

export default Index;
