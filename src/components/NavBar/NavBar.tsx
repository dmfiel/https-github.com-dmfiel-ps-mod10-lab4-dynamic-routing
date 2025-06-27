import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeButton } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';

function NavBar() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <header>
      <nav className="grid grid-cols-3 mt-5">
        <div>
          <button
            className="text-black text-md bg-blue-500 hover:text-blue-700 hover:bg-blue-200 px-2 py-1  rounded-md w-fit"
            title={isAuthenticated ? 'logout' : 'login'}
            onClick={() => (isAuthenticated ? logout() : login())}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>

        <ul className="flex gap-5 text-xl no-underline font-bold text-gray-500 cursor-pointer items-center justify-center">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              to="/blog"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              to="/admin"
            >
              Admin
            </NavLink>
          </li>
        </ul>
        <div className="text-end">
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
