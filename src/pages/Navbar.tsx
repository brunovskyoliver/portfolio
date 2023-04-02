import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-center py-6 z-10">
      
      <ul className="flex items-center space-x-4 z-10">
        <li>
          <Link href="/">
            <div
              className={`text-white cursor-pointer z-10 ${
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
              className={`text-white cursor-pointer z-10 ${
                router.pathname === '/About' ? 'font-bold' : ''
              }`}
            >
              About
            </div>
          </Link>
        </li>
        <li>
          <Link href="/ContactMe">
            <div
              className={`text-white cursor-pointer z-10 ${
                router.pathname === '/ContactMe' ? 'font-bold' : ''
              }`}
            >
              Contact
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
