import Navbar from './Navbar';
import Blob from './Blob';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
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
