// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
      <header className="border-b w-screen md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

          <div className="flex items-center justify-between mb-4 md:mb-0">
              <h1 className="leading-none text-2xl text-grey-darkest">
                  <a className="no-underline text-grey-darkest hover:text-orange" href="#">
                      Site Title
                  </a>
              </h1>

              <a className="text-black hover:text-orange md:hidden" href="#">
                  <i className="fa fa-2x fa-bars"></i>
              </a>
          </div>

          <SearchBar></SearchBar>

          <nav>
              <ul className="list-reset md:flex md:items-center">
                  <li className="md:ml-4">
                      <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                         href="#">
                          Products
                      </a>
                  </li>
                  <li className="md:ml-4">
                      <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                         href="#">
                          About
                      </a>
                  </li>
                  <li className="md:ml-4">
                      <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                         href="#">
                          Contact
                      </a>
                  </li>
              </ul>
          </nav>

      </header>
  );
}
