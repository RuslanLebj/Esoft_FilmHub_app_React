import { Bars3Icon } from '@heroicons/react/24/outline'
import IconButton from '../../components/buttons/IconButton';


const Navbar = ({ toggleSidebar }) => {

  return (
    <header className="fixed z-20 bg-white border-b flex items-center justify-between p-4 shadow-md w-screen opacity-90">
      {/* Button for sidebar and Logo text */}
      <nav>
        <ul className="flex items-center">
          <li>
            <IconButton onClick={toggleSidebar}>
              <Bars3Icon className="h-7 w-7" />
            </IconButton>
          </li>
          <li>
            <h1 className="leading-none text-2xl text-gray-800 font-bold ml-5"> {/* Добавляем margin слева для выравнивания */}
              <a href="#">
                Kinopoisk
              </a>
            </h1>
          </li>
        </ul>
      </nav>
      {/* END Logo text or image */}

      {/* Search field */}
      <form className="w-1/4">
        <label className="hidden" htmlFor="search-form">Search</label>
        <input className="bg-grey-lightest border-2 p-2 rounded-lg shadow-inner w-full" placeholder="Поиск" type="text" />
        <button className="hidden">Submit</button>
      </form>
      {/* END Search field */}

    </header>
  );
};

export default Navbar;