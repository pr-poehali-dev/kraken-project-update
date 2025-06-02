import { useState } from "react";
import Icon from "@/components/ui/icon";

interface MovieCardProps {
  title: string;
  poster: string;
  trailer: string;
  rating: string;
  duration: string;
  genre: string;
  ageRating: string;
}

const MovieCard = ({
  title,
  poster,
  trailer,
  rating,
  duration,
  genre,
  ageRating,
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative overflow-hidden rounded-lg"
          onClick={openModal}
        >
          <img
            src={poster}
            alt={title}
            className="w-full h-[354px] object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ width: "240px", height: "354px" }}
          />

          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={trailer} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Play" size={48} className="text-white opacity-80" />
              </div>
            </div>
          )}

          <div className="absolute top-3 left-3">
            <span
              className={`px-2 py-1 rounded text-xs font-bold ${
                ageRating === "12+"
                  ? "bg-green-600"
                  : ageRating === "16+"
                    ? "bg-yellow-600"
                    : "bg-red-600"
              } text-white`}
            >
              {ageRating}
            </span>
          </div>

          {rating && (
            <div className="absolute top-3 right-3">
              <div className="flex items-center space-x-1 bg-black bg-opacity-70 px-2 py-1 rounded">
                <Icon
                  name="Star"
                  size={12}
                  className="text-yellow-400 fill-current"
                />
                <span className="text-white text-xs font-bold">{rating}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 text-white">
          <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="text-sm text-gray-400 space-y-1">
            <div>{genre}</div>
            <div>{duration}</div>
          </div>

          <button className="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition-colors">
            Купить билет
          </button>
        </div>
      </div>

      {/* Модальное окно с трейлером */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            >
              <Icon name="X" size={24} />
            </button>

            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            >
              <source src={trailer} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
