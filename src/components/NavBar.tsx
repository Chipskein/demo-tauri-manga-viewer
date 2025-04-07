import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-mg px-6 py-4 h-40">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className='w-full h-20' />
      </Link>
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <Link to="/">
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
              Manga
            </button>
          </Link>
          <Link to="/file">
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
              Upload File
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
