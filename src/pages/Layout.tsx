import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
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
