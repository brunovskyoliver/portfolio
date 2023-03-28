import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './Layout';
import Home from './Home';
import About from './About';



const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
};

export default Index;
