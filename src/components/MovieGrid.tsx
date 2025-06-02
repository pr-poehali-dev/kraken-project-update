import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const movies = [
    {
      title: "Кракен",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/11114/147621_6825dff31b2d25.02131649.webp",
      trailer: "https://media.cinemabox.team/r/movies/11114/trailer-kraken.mp4",
      rating: "",
      duration: "134 мин",
      genre: "Приключения, Экшн",
      ageRating: "12+",
    },
    {
      title: "Миссия невыполнима: Финальная расплата",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000355/148052_6836c7ae7c1571.56221774.webp",
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000355/trailer-missiya-nevypolnima-finalnaya-rasplata-predseans-obsl-kuda-ukhodyat-papy.mp4",
      rating: "",
      duration: "169 мин",
      genre: "Короткометражный",
      ageRating: "18+",
    },
    {
      title: "Лило и Стич предсеанс. обсл. & Куда уходят папы?",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/147965_6830cae02b9974.26300785.webp",
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4",
      rating: "7.2",
      duration: "108 мин",
      genre: "Короткометражный",
      ageRating: "12+",
    },
    {
      title: "Пункт назначения: Узы крови предсеанс. обсл. & Куда уходят папы?",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000353/147825_682da245cf2e77.04306911.webp",
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000353/trailer-punkt-naznacheniya-uzy-krovi-predseans-obsl-kuda-ukhodyat-papy.mp4",
      rating: "7.1",
      duration: "110 мин",
      genre: "Короткометражный",
      ageRating: "18+",
    },
    {
      title: "Громовержцы предсеанс. обсл. & Куда уходят папы?",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000347/147961_6830caddaffd65.48423817.webp",
      trailer:
        "https://media.cinemabox.team/net/c5/movies/1000000000347/trailer-gromoverzhtsy-predseans-obsl-kuda-ukhodyat-papy.mp4",
      rating: "",
      duration: "127 мин",
      genre: "Короткометражный",
      ageRating: "16+",
    },
    {
      title: "Балерина",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/12119/148199_6839b806f07419.75827179.webp",
      trailer: "",
      rating: "",
      duration: "110 мин",
      genre: "Драма",
      ageRating: "12+",
    },
  ];

  return (
    <section className="bg-gray-900 py-12" data-schedule>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">В кино сейчас</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;
