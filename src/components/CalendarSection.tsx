import { useState } from "react";

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const weekdays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return (
    <section className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">
          Расписание сеансов
        </h2>

        <div className="flex space-x-4 overflow-x-auto pb-4">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date.getDate())}
              className={`flex-shrink-0 p-4 rounded-lg text-center transition-colors ${
                selectedDate === date.getDate()
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="text-sm font-medium">
                {weekdays[date.getDay()]}
              </div>
              <div className="text-2xl font-bold mt-1">{date.getDate()}</div>
              <div className="text-xs mt-1">
                {date.toLocaleDateString("ru-RU", { month: "short" })}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
