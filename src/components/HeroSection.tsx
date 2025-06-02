import { useRef } from "react";

const HeroSection = () => {
  const scheduleRef = useRef<HTMLDivElement>(null);

  const scrollToSchedule = () => {
    const scheduleSection = document.querySelector("[data-schedule]");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://media.cinemabox.team/r/movies/11114/trailer-kraken.mp4#t=2"
          type="video/mp4"
        />
        <source
          src="https://media.cinemabox.team/net/c5/movies/1000000000355/trailer-missiya-nevypolnima-finalnaya-rasplata-predseans-obsl-kuda-ukhodyat-papy.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full flex items-end p-8">
        <div className="text-white max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">
            Миссия невыполнима: Финальная расплата
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-red-600 px-3 py-1 rounded text-sm font-semibold">
              18+
            </span>
            <span className="text-lg">2025</span>
            <span className="text-lg">169 мин</span>
            <span className="text-lg">Короткометражный</span>
          </div>
          <p className="text-xl mb-6 leading-relaxed">
            Итан Хант пытается разыскать инновационный искусственный интеллект,
            угрожающий существованию всего мира.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={scrollToSchedule}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Купить билеты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
