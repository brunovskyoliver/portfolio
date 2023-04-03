import { SignIn } from "@clerk/nextjs";
import Layout from './Layout';
import Head from 'next/head'


export default function SignInPage(): JSX.Element { 
  return (
    <Layout>
      <Head>
        <title>Sign In - brunovsky.online</title>
      </Head>
      <div className="w-full flex justify-center md:mt-12">
  <SignIn
  path="/SignInPage"
  routing="path"
  signUpUrl="/SignUpPage"
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