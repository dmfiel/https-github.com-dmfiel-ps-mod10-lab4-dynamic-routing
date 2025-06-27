import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { posts } from '../lib/posts';

export function Admin() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) navigate('/login');
  if (!isAuthenticated) return;

  return (
    <div className="flex flex-col gap-10 my-10 mx-auto items-center text-center">
      <h1>Welcome to the Admin Dashboard</h1>
      <h2>
        Active blog posts: <strong>{posts.length}</strong>
      </h2>
    </div>
  );
}
