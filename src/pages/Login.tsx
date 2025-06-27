import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function Login() {
  const { login } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-10 my-10 mx-auto items-center text-center">
      <h1>Please login for admin access</h1>
      <Link to={`/admin`}>
        <button
          className="text-black text-2xl font-bold bg-blue-500 hover:text-blue-700 hover:bg-blue-200 px-20 py-10  rounded-md w-fit"
          title="Login"
          onClick={() => login()}
        >
          Login
        </button>
      </Link>
    </div>
  );
}
