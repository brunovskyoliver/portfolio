import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Login from './Login';
import Blob from './Blob';



const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Login />
    </Layout>
  );
};

export default Index;
