const HeroSection = () => {
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
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full flex items-end p-8">
        <div className="text-white max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">КРАКЕН</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-red-600 px-3 py-1 rounded text-sm font-semibold">
              12+
            </span>
            <span className="text-lg">2025</span>
            <span className="text-lg">134 мин</span>
            <span className="text-lg">Приключения, Экшн</span>
          </div>
          <p className="text-xl mb-6 leading-relaxed">
            Эпическое приключение в глубинах океана, где древние легенды
            встречаются с современными технологиями.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Купить билет
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Смотреть трейлер
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
