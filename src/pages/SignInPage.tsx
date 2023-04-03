import { SignIn } from "@clerk/nextjs";
import Layout from './Layout';



export default function SignInPage(): JSX.Element { 
  return (
    <Layout>
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
/>
</div>
  </Layout>
  );
}