import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-red-600">KINOIMAX</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-red-500 transition-colors">
            Афиша
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Фильмы
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Акции
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Контакты
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Icon
          name="Search"
          size={20}
          className="cursor-pointer hover:text-red-500"
        />
        <Icon
          name="User"
          size={20}
          className="cursor-pointer hover:text-red-500"
        />
      </div>
    </header>
  );
};

export default Header;
