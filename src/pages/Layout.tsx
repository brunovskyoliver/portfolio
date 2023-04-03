import Navbar from './Navbar';
import Blob from './Blob';
import Footer from './Footer';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <audio autoPlay loop>
        <source src="./bgmusic.mp3" type="audio/mpeg"/>
      </audio>
      <Footer />
      <Navbar />
      <Blob />
      
      
      <main>{children}</main>

      <style jsx>{`
        main {
          padding: 2rem;
        }
      `}</style>
    </div>
    
  );
};

export default Layout;
