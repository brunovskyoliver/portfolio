import Layout from './Layout';
import Home from './Home';
import Head from 'next/head'




const Index = () => {
  return (
    
    <Layout>
      <Head>
        <title>Home - brunovsky.online</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
