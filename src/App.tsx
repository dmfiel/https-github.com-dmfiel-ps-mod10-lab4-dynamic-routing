import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import ThemeProvider, { ThemeContext } from './context/ThemeContext';
import AuthProvider, { AuthContext } from './context/AuthContext';
import NavBar from './components/NavBar/NavBar';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ThemeWrapper />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function ThemeWrapper() {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div
      id="all"
      className={`${theme} w-full h-full bg:white dark:bg-black text-black dark:text-white flex flex-col min-h-screen px-5 pt-5`}
    >
      <Link to={'/blog'}>
        <h1 className="text-3xl font-bold text-center">My Super React Blog</h1>
      </Link>{' '}
      <NavBar />
      <main className="mx-auto my-5 flex-1 flex flex-col gap-5 items-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <Admin /> : <Login />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer role="contentinfo">
        <a
          href="https://www.flaticon.com/free-icons/letter-f"
          title="letter f icons"
          target="_blank"
          className="text-center text-xs text-gray-500"
        >
          <p>Letter f icons created by rashedul.islam - Flaticon</p>{' '}
        </a>{' '}
      </footer>{' '}
    </div>
  );
}

export default App;
