import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Blob from './Blob';
import Footer from './Footer';
import ContactMe from './ContactMe';



const Index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;
