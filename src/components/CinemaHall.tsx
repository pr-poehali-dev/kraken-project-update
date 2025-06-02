import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Seat {
  id: string;
  row: number;
  number: number;
  type: "standard" | "vip" | "disabled";
  status: "available" | "occupied" | "selected";
  price: number;
}

interface CinemaHallProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  showtime: string;
  date: string;
}

const CinemaHall = ({
  isOpen,
  onClose,
  movieTitle,
  showtime,
  date,
}: CinemaHallProps) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Генерация мест
  const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    const rows = 12;
    const seatsPerRow = 16;

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatId = `${row}-${seat}`;
        const isVip = row >= 8 && row <= 10;
        const isOccupied = Math.random() < 0.15;

        seats.push({
          id: seatId,
          row,
          number: seat,
          type: isVip ? "vip" : "standard",
          status: isOccupied ? "occupied" : "available",
          price: isVip ? 450 : 350,
        });
      }
    }
    return seats;
  };

  const [seats] = useState<Seat[]>(generateSeats());

  const toggleSeat = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId);
    if (!seat || seat.status === "occupied") return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId],
    );
  };

  const totalPrice = selectedSeats.reduce((sum, seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    return sum + (seat?.price || 0);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">{movieTitle}</h2>
              <p className="text-gray-400">
                {date} • {showtime}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div
              className="bg-gray-700 h-2 rounded-full mx-auto mb-2"
              style={{ width: "300px" }}
            ></div>
            <p className="text-gray-400 text-sm">ЭКРАН</p>
          </div>

          <div className="grid gap-2 justify-center">
            {Array.from({ length: 12 }, (_, rowIndex) => (
              <div key={rowIndex + 1} className="flex items-center gap-2">
                <span className="text-gray-400 w-6 text-center text-sm">
                  {rowIndex + 1}
                </span>
                <div className="flex gap-1">
                  {seats
                    .filter((seat) => seat.row === rowIndex + 1)
                    .map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => toggleSeat(seat.id)}
                        className={`w-6 h-6 rounded-t-lg text-xs font-bold transition-colors ${
                          seat.status === "occupied"
                            ? "bg-red-600 text-white cursor-not-allowed"
                            : selectedSeats.includes(seat.id)
                              ? "bg-green-500 text-white"
                              : seat.type === "vip"
                                ? "bg-yellow-600 hover:bg-yellow-500 text-white"
                                : "bg-gray-600 hover:bg-gray-500 text-white"
                        }`}
                        disabled={seat.status === "occupied"}
                      >
                        {seat.number}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-600 rounded-t"></div>
              <span className="text-gray-400">Свободно (350₽)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-600 rounded-t"></div>
              <span className="text-gray-400">VIP (450₽)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-t"></div>
              <span className="text-gray-400">Выбрано</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-t"></div>
              <span className="text-gray-400">Занято</span>
            </div>
          </div>
        </div>

        {selectedSeats.length > 0 && (
          <div className="p-6 border-t border-gray-700 bg-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-semibold">
                  Выбрано мест: {selectedSeats.length}
                </p>
                <p className="text-gray-400 text-sm">
                  {selectedSeats
                    .map((seatId) => {
                      const seat = seats.find((s) => s.id === seatId);
                      return `Ряд ${seat?.row}, место ${seat?.number}`;
                    })
                    .join(", ")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{totalPrice}₽</p>
                <button className="mt-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold text-white transition-colors">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CinemaHall;
