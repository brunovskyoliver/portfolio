import { SignUp } from "@clerk/nextjs";
import Layout from './Layout';
import Head from 'next/head'



export default function SignUpPage(): JSX.Element { 
  return (
    <Layout>
      <Head>
        <title>Sign Up - brunovsky.online</title>
      </Head>
      <div className="w-full flex justify-center md:mt-12">
  <SignUp
  path="/SignUpPage"
  routing="path"
  signInUrl="/SignInPage"
  appearance={{
    elements: {
      "cl-signUp-root": "z-10 relative",
    },
  }}
  redirectUrl={"/"}
/>
</div>
  </Layout>
  );
}