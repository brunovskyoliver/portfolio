import { SignUp } from "@clerk/nextjs";
import Layout from './Layout';



export default function SignUpPage(): JSX.Element { 
  return (
    <Layout>
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
/>
</div>
  </Layout>
  );
}