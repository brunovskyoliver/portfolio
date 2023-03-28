import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-center py-6">
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <div
              className={`text-white cursor-pointer ${
                router.pathname === '/' ? 'font-bold' : ''
              }`}
            >
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div
              className={`text-white cursor-pointer ${
                router.pathname === '/About' ? 'font-bold' : ''
              }`}
            >
              About
            </div>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
