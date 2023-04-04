import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();
  const {user} = useUser();
  const orgId = "org_2NwqhR3YqilSddAl89q4g9dcRMY";
  const isUserInOrganization = user?.organizationMemberships.some(membership => membership.organization.id === orgId);
  if (isUserInOrganization) {
    console.log("User is in organization");
  }
  


  return (
    <nav className="flex justify-center py-6 z-10">
      <div className='flex justify-center'>
      <ul className="flex items-center space-x-4 z-10">
        <li>
          <Link href="/">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/' ? 'font-bold' : ''}`}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/About' ? 'font-bold' : ''}`}>About</div>
          </Link>
        </li>
        <li>
          <Link href="/ContactMe">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/ContactMe' ? 'font-bold' : ''}`}>Contact</div>
          </Link>
        </li>
        <SignedOut>
        <li>
          <Link href="/SignUpPage">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/SignUpPage' ? 'font-bold' : ''}`}>Sign Up</div>
          </Link>
        </li>
        </SignedOut>
        <SignedOut>
        <li>
          <Link href="/SignInPage">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/SignInPage' ? 'font-bold' : ''}`}>Sign In</div>
          </Link>
        </li>
        </SignedOut>
        <SignedIn>
        <li>
        { isUserInOrganization ?
          <Link href="/Notes">
            <div className={`text-white cursor-pointer z-10 ${router.pathname === '/Notes' ? 'font-bold' : ''}`}>Notes</div>
          </Link> : null}
          </li>
          <li>
        <UserButton />
        </li>
      </SignedIn>
      </ul>
      <style jsx>{`
        nav {
          width: 100%;
        }
      `}</style>
      </div>
    </nav>
  );
};

export default Navbar;
